import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Search, Users, Handshake, TrendingUp, CheckCircle, Clock, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const steps = [
  {
    icon: Search,
    title: 'Tell Us Your Needs',
    description: 'Share your requirements, timeline, and budget. Our team will understand your specific executive needs.',
    details: ['30-minute consultation call', 'Requirements analysis', 'Custom matching criteria']
  },
  {
    icon: Users,
    title: 'Meet Curated Matches',
    description: 'Within 48 hours, receive 3-5 pre-vetted executive profiles that match your exact requirements.',
    details: ['Hand-picked candidates', 'Detailed executive profiles', 'Reference checks completed']
  },
  {
    icon: Handshake,
    title: 'Interview & Select',
    description: 'Interview your top choices and select the executive who best fits your company culture and goals.',
    details: ['Direct candidate interviews', 'Cultural fit assessment', 'Technical competency review']
  },
  {
    icon: TrendingUp,
    title: 'Start Transforming',
    description: 'Your fractional executive begins immediately, bringing strategic leadership to drive your business forward.',
    details: ['Immediate onboarding', 'Clear deliverables', 'Regular progress reviews']
  }
];

const benefits = [
  {
    icon: Clock,
    title: 'Fast Deployment',
    description: 'Start working with your executive within 48-72 hours of selection.'
  },
  {
    icon: Shield,
    title: 'Risk-Free Trial',
    description: '30-day satisfaction guarantee. Not happy? We\'ll find you another match.'
  },
  {
    icon: CheckCircle,
    title: 'Quality Assured',
    description: 'All executives are pre-vetted with verified track records and references.'
  }
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                How It Works
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Get matched with the perfect fractional executive in just 4 simple steps
              </p>
              <Badge variant="secondary" className="text-sm font-medium">
                Average time to match: 48 hours
              </Badge>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <div key={index} className="relative">
                    {/* Connection Line */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-primary/30 to-transparent z-0" 
                           style={{ width: 'calc(100% - 2rem)' }} />
                    )}
                    
                    <Card className="relative z-10 h-full hover:shadow-lg transition-all duration-300 border border-border/50">
                      <CardHeader className="text-center pb-4">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                          <step.icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <div className="text-sm font-bold text-primary mb-2">Step {index + 1}</div>
                        <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-muted-foreground mb-4">{step.description}</p>
                        <div className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Why Choose Our Process?
                </h2>
                <p className="text-lg text-muted-foreground">
                  We've streamlined executive hiring to save you time and reduce risk
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's find you the perfect fractional executive to drive your business forward
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8" style={{ background: 'var(--gradient-primary)' }}>
                  Start Your Search
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;