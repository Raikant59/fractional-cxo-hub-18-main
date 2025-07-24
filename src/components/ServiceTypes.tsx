
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, TrendingUp, DollarSign, Zap, Target, Shield } from 'lucide-react';

const serviceTypes = [
  {
    id: 'ceo',
    title: 'Fractional CEO',
    icon: Users,
    description: 'Strategic leadership and vision to scale your startup',
    features: ['Strategic Planning', 'Board Management', 'Investor Relations']
  },
  {
    icon: DollarSign,
    title: 'Fractional CFO',
    description: 'Financial strategy and operational excellence',
    features: ['Financial Planning', 'Investment Strategy', 'Cost Optimization']
  },
  {
    icon: Zap,
    title: 'Fractional CTO',
    description: 'Technical leadership and innovation',
    features: ['Technical Strategy', 'Cloud Architecture', 'Team Leadership']
  },
  {
    icon: TrendingUp,
    title: 'Fractional CMO',
    description: 'Marketing strategy and growth acceleration',
    features: ['Growth Marketing', 'Brand Strategy', 'Digital Transformation']
  },
  {
    icon: Target,
    title: 'Fractional COO',
    description: 'Operations optimization and scaling',
    features: ['Operations', 'Process Optimization', 'Scaling']
  },
  {
    icon: Users,
    title: 'Other C-Suite',
    description: 'Specialized executive roles for your needs',
    features: ['CRO', 'CHRO', 'CPO']
  }
];

interface ServiceTypesProps {
  onRequestService?: (serviceType: string) => void;
}

const ServiceTypes: React.FC<ServiceTypesProps> = ({ onRequestService }) => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Choose Your Executive Service
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Select the type of fractional executive you need and we'll connect you with the perfect match
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {serviceTypes.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div 
                key={index}
                className="bg-card rounded-2xl border border-border/50 p-8 hover:shadow-xl transition-all duration-300 animate-fade-in hover:scale-105 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-accent-blue/10 flex items-center justify-center mr-4 group-hover:bg-accent-blue/20 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-accent-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-accent-blue mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button 
                  onClick={() => onRequestService?.(serviceTypes[index].title)}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Request Intro Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceTypes;
