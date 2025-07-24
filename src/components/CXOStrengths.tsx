import React from 'react';
import { Users, Globe, Award, TrendingUp } from 'lucide-react';

const strengths = [
  {
    icon: Award,
    title: '15+ Years Experience',
    description: 'Average executive experience across all leadership levels',
    metric: '15+ Years'
  },
  {
    icon: Globe,
    title: 'Global Company Experience',
    description: 'Proven track record with Fortune 500 and international corporations',
    metric: '500+ Companies'
  },
  {
    icon: Users,
    title: 'Deep Industry Connects',
    description: 'Extensive network across all major industries and sectors',
    metric: '10K+ Connections'
  },
  {
    icon: TrendingUp,
    title: 'Best Practices Expertise',
    description: 'Deep knowledge of industry standards and proven methodologies',
    metric: '100% Success'
  }
];

export const CXOStrengths: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Our <span className="text-primary">CXO Network</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our executives bring unmatched expertise and proven results to drive your business forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((strength, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-2xl bg-card/50 border border-border/30 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mb-4">
                  <strength.icon className="h-8 w-8 text-primary" />
                </div>
                
                <div className="text-2xl font-bold text-primary mb-2">
                  {strength.metric}
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {strength.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {strength.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <Award className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">
              Trusted by 150+ companies worldwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};