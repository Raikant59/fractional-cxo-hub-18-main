
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Send, Calendar } from 'lucide-react';

const RequestForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    companySize: '',
    serviceType: '',
    urgency: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to backend
    try {
      // In a real app, this would be an API call to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Request submitted successfully! We\'ll contact you within 24 hours to schedule your free intro call.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        companySize: '',
        serviceType: '',
        urgency: '',
        description: ''
      });
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="request" className="py-20 md:py-28 bg-gradient-to-br from-secondary/30 via-accent/20 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Request Your Free Intro Call
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Tell us about your needs and we'll match you with the perfect fractional executive
            </p>
          </div>

          <div className="bg-card rounded-2xl border border-border/50 p-8 md:p-10" style={{ boxShadow: 'var(--shadow-strong)' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    required
                    placeholder="Your full name"
                    className="h-11"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                    placeholder="your@email.com"
                    className="h-11"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="company" className="block text-sm font-medium">
                    Company Name *
                  </label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    required
                    placeholder="Your company"
                    className="h-11"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium">
                    Company Size
                  </label>
                  <Select onValueChange={(value) => handleChange('companySize', value)}>
                    <SelectTrigger className="h-11 bg-background">
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border border-border z-50">
                      <SelectItem value="startup">Startup (1-10 employees)</SelectItem>
                      <SelectItem value="small">Small (11-50 employees)</SelectItem>
                      <SelectItem value="medium">Medium (51-200 employees)</SelectItem>
                      <SelectItem value="large">Large (200+ employees)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium">
                    Service Type *
                  </label>
                  <Select onValueChange={(value) => handleChange('serviceType', value)} required>
                    <SelectTrigger className="h-11 bg-background">
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border border-border z-50">
                      <SelectItem value="ceo">Fractional CEO</SelectItem>
                      <SelectItem value="cfo">Fractional CFO</SelectItem>
                      <SelectItem value="cto">Fractional CTO</SelectItem>
                      <SelectItem value="cmo">Fractional CMO</SelectItem>
                      <SelectItem value="coo">Fractional COO</SelectItem>
                      <SelectItem value="other">Other C-Suite</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium">
                    Timeline
                  </label>
                  <Select onValueChange={(value) => handleChange('urgency', value)}>
                    <SelectTrigger className="h-11 bg-background">
                      <SelectValue placeholder="When do you need to start?" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border border-border z-50">
                      <SelectItem value="immediate">Immediately</SelectItem>
                      <SelectItem value="1-2weeks">1-2 weeks</SelectItem>
                      <SelectItem value="1month">Within 1 month</SelectItem>
                      <SelectItem value="2-3months">2-3 months</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              
              <div className="space-y-2">
                <label htmlFor="description" className="block text-sm font-medium">
                  Project Description *
                </label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                  required
                  placeholder="Tell us about your project, challenges, and what you're looking for in a fractional executive..."
                  rows={4}
                />
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-blue-900">
                    Free 30-minute intro call included
                  </span>
                </div>
                <p className="text-sm text-blue-700 mt-1">
                  No commitment required. We'll discuss your needs and see if we're a good fit.
                </p>
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-12 bg-primary text-white font-medium text-lg hover:bg-primary/90 disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Request Free Intro Call'}
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestForm;
