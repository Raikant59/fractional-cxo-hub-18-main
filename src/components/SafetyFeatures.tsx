
import React from 'react';
import { Shield, CheckCircle, Users } from 'lucide-react';

const SafetyFeatures = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-accent/10 via-secondary/20 to-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Why Choose Fractional Leadership?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Get C-suite expertise without the full-time commitment or overhead
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
              <Shield className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Cost-Effective</h3>
            <p className="text-muted-foreground leading-relaxed">
              Get senior-level expertise at a fraction of the cost of a full-time hire
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Immediate Impact</h3>
            <p className="text-muted-foreground leading-relaxed">
              Experienced executives who can contribute from day one without onboarding delays
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
              <Users className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Flexible Commitment</h3>
            <p className="text-muted-foreground leading-relaxed">
              Scale up or down based on your needs with no long-term employment obligations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyFeatures;
