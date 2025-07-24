
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
      if (ctaRef.current) observer.unobserve(ctaRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section className="relative pt-32 pb-32 md:pt-48 md:pb-40 overflow-hidden bg-gradient-to-br from-background to-accent/30 rounded-2xl shadow-soft font-sans">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gentle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-accent/10"></div>
        
        {/* Minimal floating elements */}
        <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-accent-blue/5 opacity-40 blur-3xl"></div>
        <div className="absolute top-1/4 -left-24 w-72 h-72 rounded-full bg-accent-purple/5 opacity-30 blur-3xl"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ 
          backgroundImage: 'radial-gradient(circle at 25px 25px, hsl(var(--primary)) 1px, transparent 0)', 
          backgroundSize: '50px 50px' 
        }}></div>
        
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Hero Text Content */}
          <div className="space-y-8 md:space-y-12">
            <h1 
              ref={titleRef}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-tight md:leading-tight lg:leading-tight opacity-0 text-foreground"
              style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
            >
              Fractional CXO talent <span className="text-accent-blue">when you need it</span>
            </h1>
            
            <p 
              ref={subtitleRef}
              className="text-xl md:text-2xl xl:text-3xl text-muted-foreground opacity-0 leading-relaxed max-w-4xl mx-auto"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              Connect with pre-vetted C-suite executives for fractional, interim, and project-based leadership. Scale your executive team without the full-time commitment.
            </p>
            
            <div 
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-6 pt-4 opacity-0 justify-center"
              style={{ animationDelay: '0.45s', animationFillMode: 'forwards' }}
            >
              <Link 
                to="/executives" 
                className="inline-flex items-center justify-center px-10 py-5 rounded-2xl text-primary-foreground font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl text-lg"
                style={{ background: 'var(--gradient-primary)' }}
              >
                Find Your CXO
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              
              <Link 
                to="/how-it-works" 
                className="inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-card border border-border text-foreground font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg text-lg hover:bg-accent"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
