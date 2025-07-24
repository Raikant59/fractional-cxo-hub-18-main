import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, TrendingUp, Users, DollarSign, Settings, Megaphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Fractional CEO",
      icon: TrendingUp,
      description: "Strategic leadership and executive guidance for growing businesses",
      keyServices: [
        "Strategic planning and vision development",
        "Board reporting and investor relations",
        "Fundraising strategy and execution",
        "Culture development and team alignment",
        "Mergers & acquisitions guidance",
        "Crisis management and turnaround strategy",
        "Executive coaching and mentorship",
        "Performance optimization"
      ],
      idealFor: "Companies seeking strategic direction, preparing for funding rounds, or needing interim executive leadership"
    },
    {
      title: "Fractional CFO",
      icon: DollarSign,
      description: "Financial strategy and management expertise to drive profitable growth",
      keyServices: [
        "Financial planning and analysis",
        "Budgeting and forecasting",
        "Cash flow management",
        "Financial reporting and KPI development",
        "Investor relations and presentations",
        "M&A financial due diligence",
        "Risk management and compliance",
        "Capital structure optimization"
      ],
      idealFor: "Businesses needing financial expertise for scaling, fundraising, or improving profitability"
    },
    {
      title: "Fractional CTO",
      icon: Settings,
      description: "Technology leadership and digital transformation for modern businesses",
      keyServices: [
        "Technology strategy and roadmap",
        "Architecture design and decisions",
        "Team building and technical hiring",
        "Product development oversight",
        "Digital transformation initiatives",
        "Cybersecurity and compliance",
        "Vendor management and partnerships",
        "Technical due diligence"
      ],
      idealFor: "Companies scaling their technology, building digital products, or modernizing infrastructure"
    },
    {
      title: "Fractional CMO",
      icon: Megaphone,
      description: "Marketing leadership to accelerate customer acquisition and brand growth",
      keyServices: [
        "Brand strategy and positioning",
        "Digital marketing and growth hacking",
        "Customer acquisition strategy",
        "Campaign planning and execution",
        "Marketing automation and analytics",
        "Content strategy and thought leadership",
        "Public relations and communications",
        "Marketing team development"
      ],
      idealFor: "Businesses looking to scale customer acquisition, launch new products, or build market presence"
    },
    {
      title: "Fractional COO",
      icon: Users,
      description: "Operational excellence and process optimization for efficient scaling",
      keyServices: [
        "Operations strategy and optimization",
        "Process improvement and automation",
        "Team scaling and performance management",
        "Supply chain and vendor management",
        "Quality assurance and compliance",
        "Project management and delivery",
        "Organizational design and structure",
        "Change management initiatives"
      ],
      idealFor: "Growing companies needing operational efficiency, process standardization, or team scaling"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Executive Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your business with our fractional C-suite executives. Get the leadership expertise you need, 
            when you need it, without the full-time commitment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                      <p className="text-muted-foreground mt-2">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-primary">Key Services Include:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.keyServices.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-start gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs">IDEAL FOR</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{service.idealFor}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-12 border border-border">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with our expert executives and transform your business with proven leadership strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/#contact">Book a Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/#how-it-works">Learn How It Works</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;