-- Create enum types
CREATE TYPE public.user_role AS ENUM ('client', 'cxo', 'admin');
CREATE TYPE public.service_request_status AS ENUM ('pending', 'in_review', 'matched', 'interview_scheduled', 'completed', 'cancelled');
CREATE TYPE public.contract_status AS ENUM ('draft', 'active', 'completed', 'terminated');
CREATE TYPE public.payment_status AS ENUM ('pending', 'processing', 'completed', 'failed', 'refunded');

-- Create clients table
CREATE TABLE public.clients (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  company_name TEXT NOT NULL,
  industry TEXT,
  company_size TEXT,
  contact_email TEXT NOT NULL,
  contact_phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create CXOs table
CREATE TABLE public.cxos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  linkedin_url TEXT,
  bio TEXT,
  years_experience INTEGER,
  hourly_rate DECIMAL(10,2),
  availability_hours_per_week INTEGER,
  industries TEXT[], -- Array of industries
  specializations TEXT[], -- Array of specializations
  is_verified BOOLEAN DEFAULT FALSE,
  is_available BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create service_requests table
CREATE TABLE public.service_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id UUID NOT NULL REFERENCES public.clients(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  requirements TEXT,
  industry TEXT,
  budget_min DECIMAL(10,2),
  budget_max DECIMAL(10,2),
  duration_weeks INTEGER,
  hours_per_week INTEGER,
  status public.service_request_status DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create packages table
CREATE TABLE public.packages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  cxo_id UUID NOT NULL REFERENCES public.cxos(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  duration_weeks INTEGER NOT NULL,
  hours_per_week INTEGER NOT NULL,
  features TEXT[],
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create contracts table
CREATE TABLE public.contracts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id UUID NOT NULL REFERENCES public.clients(id) ON DELETE CASCADE,
  cxo_id UUID NOT NULL REFERENCES public.cxos(id) ON DELETE CASCADE,
  service_request_id UUID REFERENCES public.service_requests(id) ON DELETE SET NULL,
  package_id UUID REFERENCES public.packages(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  description TEXT,
  start_date DATE,
  end_date DATE,
  hourly_rate DECIMAL(10,2) NOT NULL,
  total_hours INTEGER,
  total_amount DECIMAL(10,2) NOT NULL,
  status public.contract_status DEFAULT 'draft',
  terms_and_conditions TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create payments table
CREATE TABLE public.payments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  contract_id UUID NOT NULL REFERENCES public.contracts(id) ON DELETE CASCADE,
  amount DECIMAL(10,2) NOT NULL,
  currency TEXT NOT NULL DEFAULT 'USD',
  status public.payment_status DEFAULT 'pending',
  payment_method TEXT,
  transaction_id TEXT,
  payment_date TIMESTAMP WITH TIME ZONE,
  due_date DATE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cxos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contracts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for clients table
CREATE POLICY "Clients can view their own profile" ON public.clients
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Clients can update their own profile" ON public.clients
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own client profile" ON public.clients
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create RLS policies for cxos table
CREATE POLICY "CXOs can view their own profile" ON public.cxos
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "CXOs can update their own profile" ON public.cxos
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own CXO profile" ON public.cxos
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Everyone can view verified available CXOs" ON public.cxos
  FOR SELECT USING (is_verified = TRUE AND is_available = TRUE);

-- Create RLS policies for service_requests table
CREATE POLICY "Clients can view their own service requests" ON public.service_requests
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.clients 
      WHERE clients.id = service_requests.client_id 
      AND clients.user_id = auth.uid()
    )
  );

CREATE POLICY "Clients can create service requests" ON public.service_requests
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.clients 
      WHERE clients.id = service_requests.client_id 
      AND clients.user_id = auth.uid()
    )
  );

CREATE POLICY "Clients can update their own service requests" ON public.service_requests
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM public.clients 
      WHERE clients.id = service_requests.client_id 
      AND clients.user_id = auth.uid()
    )
  );

-- Create RLS policies for packages table
CREATE POLICY "CXOs can manage their own packages" ON public.packages
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.cxos 
      WHERE cxos.id = packages.cxo_id 
      AND cxos.user_id = auth.uid()
    )
  );

CREATE POLICY "Everyone can view active packages" ON public.packages
  FOR SELECT USING (is_active = TRUE);

-- Create RLS policies for contracts table
CREATE POLICY "Parties can view their contracts" ON public.contracts
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.clients 
      WHERE clients.id = contracts.client_id 
      AND clients.user_id = auth.uid()
    ) OR
    EXISTS (
      SELECT 1 FROM public.cxos 
      WHERE cxos.id = contracts.cxo_id 
      AND cxos.user_id = auth.uid()
    )
  );

CREATE POLICY "Parties can update their contracts" ON public.contracts
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM public.clients 
      WHERE clients.id = contracts.client_id 
      AND clients.user_id = auth.uid()
    ) OR
    EXISTS (
      SELECT 1 FROM public.cxos 
      WHERE cxos.id = contracts.cxo_id 
      AND cxos.user_id = auth.uid()
    )
  );

-- Create RLS policies for payments table
CREATE POLICY "Parties can view their payments" ON public.payments
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.contracts 
      JOIN public.clients ON clients.id = contracts.client_id
      WHERE contracts.id = payments.contract_id 
      AND clients.user_id = auth.uid()
    ) OR
    EXISTS (
      SELECT 1 FROM public.contracts 
      JOIN public.cxos ON cxos.id = contracts.cxo_id
      WHERE contracts.id = payments.contract_id 
      AND cxos.user_id = auth.uid()
    )
  );

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_clients_updated_at
  BEFORE UPDATE ON public.clients
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_cxos_updated_at
  BEFORE UPDATE ON public.cxos
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_service_requests_updated_at
  BEFORE UPDATE ON public.service_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_packages_updated_at
  BEFORE UPDATE ON public.packages
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_contracts_updated_at
  BEFORE UPDATE ON public.contracts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_payments_updated_at
  BEFORE UPDATE ON public.payments
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();