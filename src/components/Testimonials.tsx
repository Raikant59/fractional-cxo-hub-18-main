import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marcus Chen',
    role: 'CEO, TechFlow',
    content: 'Our fractional CFO helped us secure $5M in Series A funding. The expertise and strategic guidance were exactly what we needed.',
    rating: 5,
    company: 'TechFlow'
  },
  {
    name: 'Sarah Williams',
    role: 'Founder, InnovateCorp',
    content: 'Finding the right CTO was challenging until we used this platform. Our fractional CTO scaled our tech team from 3 to 15 engineers.',
    rating: 5,
    company: 'InnovateCorp'
  },
  {
    name: 'David Rodriguez',
    role: 'COO, ScaleUp Inc',
    content: 'The fractional CMO we hired increased our MRR by 300% in 6 months. Best investment we\'ve made in our marketing efforts.',
    rating: 5,
    company: 'ScaleUp Inc'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Trusted by Growing Companies
          </h2>
          <p className="text-lg text-muted-foreground">
            See how fractional executives have transformed businesses like yours
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <Quote className="h-8 w-8 text-primary/20 mb-2" />
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="border-t border-border/50 pt-4">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};