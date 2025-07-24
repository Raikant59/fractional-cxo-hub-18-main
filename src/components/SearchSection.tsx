
import React, { useState, useRef, useEffect } from 'react';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const roleOptions = [
  'Any Role',
  'CEO',
  'COO',
  'CFO',
  'CTO',
  'CMO',
  'CRO',
  'CHRO'
];

const industryOptions = [
  'Any Industry',
  'SaaS',
  'Fintech',
  'Healthcare',
  'E-commerce',
  'Manufacturing',
  'Professional Services',
  'Consumer Goods',
  'Real Estate'
];

const SearchSection: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState('Any Role');
  const [selectedIndustry, setSelectedIndustry] = useState('Any Industry');
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-secondary/50 opacity-0" 
      id="find-executive"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Find Your Perfect Executive Match
            </h2>
            <p className="text-lg text-muted-foreground">
              Search from our pool of pre-vetted executives with proven leadership experience.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-border p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-2 mb-6">
              <div className="space-y-2">
                <label htmlFor="role" className="block text-sm font-medium">
                  Executive Role
                </label>
                <div className="relative">
                  <select
                    id="role"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="w-full h-11 pl-4 pr-10 bg-secondary/50 border border-border rounded-lg text-primary focus:outline-none focus:ring-1 focus:ring-primary appearance-none"
                  >
                    {roleOptions.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <Filter className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="industry" className="block text-sm font-medium">
                  Industry Experience
                </label>
                <div className="relative">
                  <select
                    id="industry"
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="w-full h-11 pl-4 pr-10 bg-secondary/50 border border-border rounded-lg text-primary focus:outline-none focus:ring-1 focus:ring-primary appearance-none"
                  >
                    {industryOptions.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <Filter className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-muted-foreground" />
              </div>
              <input
                type="text"
                className="w-full h-11 pl-10 pr-4 bg-secondary/50 border border-border rounded-lg text-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Skills, expertise, or keywords..."
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link 
                to={`/executives?role=${selectedRole !== 'Any Role' ? selectedRole : ''}&industry=${selectedIndustry !== 'Any Industry' ? selectedIndustry : ''}`}
                className="flex-1 inline-flex items-center justify-center h-11 px-6 py-3 rounded-lg bg-primary text-white font-medium transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Search Executives
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              
              <Button
                variant="outline"
                className="flex-1 h-11"
              >
                Request Custom Match
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
