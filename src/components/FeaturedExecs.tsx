
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CategoryTabs from './CategoryTabs';
import ExecCard, { Executive } from './ExecCard';

const categories = [
  { id: 'all', label: 'All Roles' },
  { id: 'ceo', label: 'CEO / COO' },
  { id: 'cfo', label: 'CFO' },
  { id: 'cto', label: 'CTO / CPO' },
  { id: 'cmo', label: 'CMO' },
  { id: 'cro', label: 'CRO' },
];

const executives: Executive[] = [
  {
    id: '1',
    name: 'Michael Chen',
    title: 'Fractional CTO',
    experience: '18+ years',
    availability: '15-20 hrs/week',
    specialties: ['Technical Strategy', 'Cloud Architecture', 'Team Leadership', 'Product Development'],
    industries: ['SaaS', 'Fintech', 'Healthtech']
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    title: 'Fractional CMO',
    experience: '15+ years',
    availability: '10-20 hrs/week',
    specialties: ['Growth Marketing', 'Brand Strategy', 'Digital Transformation', 'Go-to-Market'],
    industries: ['B2B SaaS', 'E-commerce', 'Financial Services']
  },
  {
    id: '3',
    name: 'David Rodriguez',
    title: 'Fractional CFO',
    experience: '20+ years',
    availability: '8-12 hrs/week',
    specialties: ['Financial Strategy', 'M&A', 'Fundraising', 'Financial Operations'],
    industries: ['SaaS', 'Manufacturing', 'Retail']
  },
  {
    id: '4',
    name: 'Amanda Lee',
    title: 'Fractional COO',
    experience: '12+ years',
    availability: 'Full-time (3-6 months)',
    specialties: ['Operations', 'Process Optimization', 'Scaling', 'Team Building'],
    industries: ['Tech', 'Healthcare', 'Professional Services']
  },
  {
    id: '5',
    name: 'James Wilson',
    title: 'Fractional CRO',
    experience: '16+ years',
    availability: '15-25 hrs/week',
    specialties: ['Sales Strategy', 'Revenue Operations', 'Go-to-Market', 'Channel Development'],
    industries: ['Enterprise SaaS', 'Cybersecurity', 'MarTech']
  },
  {
    id: '6',
    name: 'Emily Patel',
    title: 'Fractional CPO',
    experience: '14+ years',
    availability: '20 hrs/week',
    specialties: ['Product Strategy', 'UX/UI', 'Roadmapping', 'User Research'],
    industries: ['Consumer Tech', 'Marketplace', 'EdTech']
  },
];

const FeaturedExecs: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredExecutives = selectedCategory === 'all'
    ? executives
    : executives.filter(exec => {
        const categoryMap: Record<string, string[]> = {
          'ceo': ['CEO', 'COO'],
          'cfo': ['CFO'],
          'cto': ['CTO', 'CPO'],
          'cmo': ['CMO'],
          'cro': ['CRO']
        };
        
        const titles = categoryMap[selectedCategory] || [];
        return titles.some(title => exec.title.includes(title));
      });

  return (
    <section id="executives" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Meet Our Exceptional Executives</h2>
          <p className="text-muted-foreground text-lg">
            All of our executives have proven track records at leading companies and are ready to bring their expertise to your business.
          </p>
        </div>

        <div className="mb-8">
          <CategoryTabs 
            categories={categories} 
            onSelect={setSelectedCategory} 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {filteredExecutives.map((executive, index) => (
            <ExecCard 
              key={executive.id} 
              executive={executive} 
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            to="/executives" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-medium transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Browse All Executives
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedExecs;
