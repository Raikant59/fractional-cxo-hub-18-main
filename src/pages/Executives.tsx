import React from 'react';
import { Search, Filter, MapPin, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';

const executives = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Fractional CMO',
    experience: '15+ years',
    location: 'San Francisco, CA',
    availability: '10-20 hrs/week',
    rating: 4.9,
    reviews: 23,
    hourlyRate: '$200-300',
    specialties: ['SaaS Marketing', 'Growth Strategy', 'Digital Marketing'],
    industries: ['SaaS', 'Fintech', 'E-commerce'],
    image: 'SJ'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Fractional CTO',
    experience: '20+ years',
    location: 'New York, NY',
    availability: '15-25 hrs/week',
    rating: 5.0,
    reviews: 41,
    hourlyRate: '$250-400',
    specialties: ['Tech Leadership', 'System Architecture', 'Team Building'],
    industries: ['Enterprise SaaS', 'AI/ML', 'Blockchain'],
    image: 'MC'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Fractional CFO',
    experience: '18+ years',
    location: 'Austin, TX',
    availability: '20-30 hrs/week',
    rating: 4.8,
    reviews: 35,
    hourlyRate: '$180-280',
    specialties: ['Financial Planning', 'Fundraising', 'Strategic Finance'],
    industries: ['Startups', 'Healthcare', 'EdTech'],
    image: 'ER'
  }
];

const Executives = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-24">
        {/* Header Section */}
        <section className="py-12 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Find Your Perfect Executive Match
              </h1>
              <p className="text-lg text-muted-foreground">
                Browse our curated network of pre-vetted C-suite professionals ready to transform your business
              </p>
            </div>
            
            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Search by role, industry, or skills..." 
                    className="pl-10 py-3"
                  />
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Executives Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {executives.map((executive) => (
                <Card key={executive.id} className="hover:shadow-lg transition-all duration-300 border border-border/50">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                          <span className="text-xl font-bold text-primary-foreground">{executive.image}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-foreground">{executive.name}</h3>
                          <p className="text-primary font-medium">{executive.role}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-4">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{executive.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{executive.availability}</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="font-semibold">{executive.rating}</span>
                        <span className="text-muted-foreground">({executive.reviews} reviews)</span>
                      </div>
                      <div className="text-sm font-semibold">{executive.hourlyRate}/hr</div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-2">Specialties</p>
                      <div className="flex flex-wrap gap-2">
                        {executive.specialties.slice(0, 3).map((specialty, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-2">Industries</p>
                      <p className="text-sm text-muted-foreground">{executive.industries.join(', ')}</p>
                    </div>
                    
                    <div className="pt-4">
                      <Button className="w-full" style={{ background: 'var(--gradient-primary)' }}>
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Executives
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Executives;