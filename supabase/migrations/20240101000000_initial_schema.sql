-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create enum types
CREATE TYPE service_type AS ENUM ('CEO', 'CTO', 'CMO', 'CFO', 'COO', 'CPO');
CREATE TYPE request_status AS ENUM ('pending', 'matched', 'intro_scheduled', 'intro_completed', 'package_selected', 'contract_signed', 'payment_completed', 'active', 'completed', 'cancelled');
CREATE TYPE cxo_status AS ENUM ('available', 'busy', 'unavailable');
CREATE TYPE contract_status AS ENUM ('draft', 'sent', 'signed', 'completed');
CREATE TYPE payment_status AS ENUM ('pending', 'completed', 'failed', 'refunded');

-- Clients table
CREATE TABLE public.clients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  company_name TEXT NOT NULL,
  industry TEXT,
  company_size TEXT,
  contact_email TEXT NOT NULL,
  contact_phone TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- CXOs table
CREATE TABLE public.cxos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  expertise JSONB NOT NULL DEFAULT '[]',
  bio TEXT,
  experience_years INTEGER,
  hourly_rate DECIMAL(10,2),
  status cxo_status DEFAULT 'available',
  profile_image_url TEXT,
  linkedin_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Service requests table
CREATE TABLE public.service_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID REFERENCES public.clients(id) ON DELETE CASCADE,
  service_type service_type NOT NULL,
  description TEXT NOT NULL,
  company_stage TEXT,
  timeline TEXT,
  budget_range TEXT,
  status request_status DEFAULT 'pending',
  matched_cxo_id UUID REFERENCES public.cxos(id),
  intro_call_scheduled_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Packages table
CREATE TABLE public.packages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  hours_per_week INTEGER NOT NULL,
  duration_weeks INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  features JSONB NOT NULL DEFAULT '[]',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Contracts table
CREATE TABLE public.contracts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  request_id UUID REFERENCES public.service_requests(id) ON DELETE CASCADE,
  package_id UUID REFERENCES public.packages(id),
  client_signature TEXT,
  cxo_signature TEXT,
  contract_content TEXT,
  status contract_status DEFAULT 'draft',
  signed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Payments table
CREATE TABLE public.payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  contract_id UUID REFERENCES public.contracts(id) ON DELETE CASCADE,
  amount DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'USD',
  stripe_payment_id TEXT,
  status payment_status DEFAULT 'pending',
  paid_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Insert default packages
INSERT INTO public.packages (name, description, hours_per_week, duration_weeks, price, features) VALUES
('Starter', 'Perfect for early-stage companies needing strategic guidance', 10, 12, 2500.00, '["Weekly strategy sessions", "Monthly reports", "Email support"]'),
('Growth', 'Ideal for scaling companies requiring hands-on leadership', 20, 12, 4500.00, '["Bi-weekly strategy sessions", "Team mentoring", "Process optimization", "Monthly reports", "Priority support"]'),
('Enterprise', 'For established companies needing full executive presence', 30, 12, 7500.00, '["Daily availability", "Team leadership", "Board presentation support", "Strategic planning", "Priority support", "Custom deliverables"]');

-- Enable Row Level Security
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cxos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contracts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;

-- RLS Policies for clients
CREATE POLICY "Clients can view own data" ON public.clients
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Clients can update own data" ON public.clients
  FOR UPDATE USING (user_id = auth.uid());

CREATE POLICY "Clients can insert own data" ON public.clients
  FOR INSERT WITH CHECK (user_id = auth.uid());

-- RLS Policies for service_requests
CREATE POLICY "Clients can view own requests" ON public.service_requests
  FOR SELECT USING (
    client_id IN (SELECT id FROM public.clients WHERE user_id = auth.uid())
  );

CREATE POLICY "Clients can create requests" ON public.service_requests
  FOR INSERT WITH CHECK (
    client_id IN (SELECT id FROM public.clients WHERE user_id = auth.uid())
  );

-- Allow reading packages for all authenticated users
CREATE POLICY "Anyone can view packages" ON public.packages
  FOR SELECT USING (true);

-- CXO policies (admins and CXOs can view)
CREATE POLICY "CXOs can view own data" ON public.cxos
  FOR SELECT USING (user_id = auth.uid());

-- Admin functions will use service role to bypass RLS when needed