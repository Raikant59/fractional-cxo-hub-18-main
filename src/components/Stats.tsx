import React from 'react';

const stats = [
  { value: '500+', label: 'Vetted Executives', description: 'Pre-screened C-suite professionals' },
  { value: '95%', label: 'Success Rate', description: 'Successful placements within 30 days' },
  { value: '48hrs', label: 'Start Time', description: 'From selection to engagement' },
  { value: '150+', label: 'Companies Served', description: 'Startups to Fortune 500s' }
];

export const Stats: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-background via-secondary/30 to-accent/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in group" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="p-6 rounded-2xl bg-card/50 border border-border/30 backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg group-hover:border-accent-blue/30">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};