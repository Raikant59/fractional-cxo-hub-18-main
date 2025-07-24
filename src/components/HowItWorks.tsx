
import React, { useRef, useEffect } from 'react';
import { CheckCircle, Search, Calendar, Users } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon, delay }) => {
  const stepRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-up');
              entry.target.classList.remove('opacity-0');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (stepRef.current) observer.observe(stepRef.current);

    return () => {
      if (stepRef.current) observer.unobserve(stepRef.current);
    };
  }, [delay]);

  return (
    <div ref={stepRef} className="relative opacity-0">
      <div className="flex flex-col items-center text-center bg-card rounded-2xl p-8 border border-border/50 transition-all duration-300 hover:shadow-lg hover:scale-105" style={{ boxShadow: 'var(--shadow-soft)' }}>
        <div className="relative mb-6">
          <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/5">
            {icon}
          </div>
          <div className="absolute -top-3 -right-3 w-10 h-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
            {number}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
    };
  }, []);

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-background rounded-2xl shadow-soft font-sans">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <h2 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 opacity-0 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p ref={subtitleRef} className="text-lg md:text-xl text-muted-foreground opacity-0 leading-relaxed">
            Our streamlined process connects you with top executive talent in days, not months.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <Step 
            number={1}
            title="Define Your Needs"
            description="Share your business challenges and executive requirements through our intake process."
            icon={<CheckCircle className="h-8 w-8 text-primary" />}
            delay={100}
          />
          
          <Step 
            number={2}
            title="Get Matched"
            description="Our team curates 3-5 pre-vetted executives that align with your specific needs and industry."
            icon={<Search className="h-8 w-8 text-primary" />}
            delay={200}
          />
          
          <Step 
            number={3}
            title="Interview & Select"
            description="Meet your shortlisted candidates and select the executive that's the best fit for your goals."
            icon={<Calendar className="h-8 w-8 text-primary" />}
            delay={300}
          />
          
          <Step 
            number={4}
            title="Start Immediately"
            description="Begin working with your fractional executive within 48 hours of selection."
            icon={<Users className="h-8 w-8 text-primary" />}
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
