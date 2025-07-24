import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, TrendingUp, DollarSign, Zap, Target, Shield, CheckCircle } from 'lucide-react';

const serviceTypes = [
  {
    id: 'ceo',
    title: 'Fractional CEO',
    icon: Users,
    description: 'Strategic leadership and vision to scale your startup',
    features: ['Strategic Planning', 'Board Management', 'Investor Relations', 'Culture Development'],
    popular: false,
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    id: 'cfo',
    title: 'Fractional CFO',
    icon: DollarSign,
    description: 'Financial strategy and operational excellence',
    features: ['Financial Planning', 'Investment Strategy', 'Cost Optimization', 'M&A Support'],
    popular: true,
    gradient: 'from-green-500 to-green-600'
  },
  {
    id: 'cto',
    title: 'Fractional CTO',
    icon: Zap,
    description: 'Technical leadership and innovation',
    features: ['Technical Strategy', 'Cloud Architecture', 'Team Leadership', 'Product Development'],
    popular: false,
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    id: 'cmo',
    title: 'Fractional CMO',
    icon: TrendingUp,
    description: 'Marketing strategy and growth acceleration',
    features: ['Growth Marketing', 'Brand Strategy', 'Digital Transformation', 'Customer Acquisition'],
    popular: false,
    gradient: 'from-pink-500 to-pink-600'
  },
  {
    id: 'coo',
    title: 'Fractional COO',
    icon: Target,
    description: 'Operations optimization and scaling',
    features: ['Operations', 'Process Optimization', 'Team Scaling', 'Performance Management'],
    popular: false,
    gradient: 'from-orange-500 to-orange-600'
  },
  {
    id: 'other',
    title: 'Other C-Suite',
    icon: Shield,
    description: 'Specialized executive roles for your needs',
    features: ['CRO', 'CHRO', 'CPO', 'Custom Roles'],
    popular: false,
    gradient: 'from-indigo-500 to-indigo-600'
  }
];

interface ServiceTypesProps {
  onRequestService?: (serviceType: string) => void;
}

const ServiceTypes: React.FC<ServiceTypesProps> = ({ onRequestService }) => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-display text-4xl md:text-5xl font-bold mb-6 text-balance">
            Choose Your Executive Service
          </h2>
          <p className="text-body text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Select the type of fractional executive you need and we'll connect you with the perfect match
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {serviceTypes.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div 
                key={service.id}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className={`card-modern h-full transition-all duration-300 hover:scale-[1.02] ${
                  service.popular ? 'ring-2 ring-primary/20 shadow-lg' : ''
                }`}>
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mr-4 shadow-lg`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 text-body">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={() => onRequestService?.(service.title)}
                    className={`w-full group transition-all duration-300 ${
                      service.popular 
                        ? 'btn-primary' 
                        : 'btn-secondary hover:bg-primary hover:text-primary-foreground'
                    }`}
                  >
                    Request Intro Call
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Not sure which executive you need?
          </p>
          <Button variant="outline" size="lg" className="btn-secondary">
            Schedule a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceTypes;