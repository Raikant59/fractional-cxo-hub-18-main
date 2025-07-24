import { useEffect, useRef } from 'react';
import { ArrowRight, Play, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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

    [titleRef, subtitleRef, ctaRef, statsRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
<<<<<<< HEAD
    <section className="relative pt-32 pb-32 md:pt-48 md:pb-40 overflow-hidden bg-gradient-to-br from-background to-accent/30 rounded-2xl shadow-soft font-sans">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gentle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-accent/10"></div>
=======
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/5"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-600/20 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
>>>>>>> 1050fdcd4e379f7a014211a558b905a51526c4da
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ 
          backgroundImage: 'radial-gradient(circle at 25px 25px, hsl(var(--foreground)) 1px, transparent 0)', 
          backgroundSize: '50px 50px' 
        }}></div>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="mb-8 opacity-0" ref={statsRef} style={{ animationDelay: '0.1s' }}>
            <Badge variant="secondary" className="px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium">Trusted by 500+ companies</span>
              </div>
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 
            ref={titleRef}
            className="text-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 opacity-0 text-balance"
            style={{ animationDelay: '0.2s' }}
          >
            Fractional CXO talent{' '}
            <span className="gradient-text">when you need it</span>
          </h1>
          
          {/* Subtitle */}
          <p 
            ref={subtitleRef}
            className="text-body text-xl md:text-2xl text-muted-foreground mb-12 opacity-0 max-w-3xl mx-auto text-balance leading-relaxed"
            style={{ animationDelay: '0.4s' }}
          >
            Connect with pre-vetted C-suite executives for fractional, interim, and project-based leadership. 
            Scale your executive team without the full-time commitment.
          </p>
          
          {/* CTA Buttons */}
          <div 
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0"
            style={{ animationDelay: '0.6s' }}
          >
            <Button asChild size="lg" className="btn-primary text-lg px-8 py-4 h-auto group">
              <Link to="/executives">
                Find Your CXO
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="btn-secondary text-lg px-8 py-4 h-auto group">
              <Link to="/how-it-works">
                <Play className="mr-3 h-5 w-5 transition-transform group-hover:scale-110" />
                How It Works
              </Link>
            </Button>
          </div>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto opacity-0" ref={statsRef} style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Vetted Executives</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">48hrs</div>
              <div className="text-sm text-muted-foreground">Average Match Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 opacity-0" style={{ animationDelay: '1s' }}>
            <p className="text-sm text-muted-foreground mb-6">Trusted by leading companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['Stripe', 'Linear', 'Framer', 'Notion', 'Figma', 'Vercel'].map((company, index) => (
                <div key={index} className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;