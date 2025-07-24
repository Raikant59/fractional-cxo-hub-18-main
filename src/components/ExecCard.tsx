
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Briefcase, Award } from 'lucide-react';

export interface Executive {
  id: string;
  name: string;
  title: string;
  image?: string;
  availability: string;
  experience: string;
  specialties: string[];
  industries: string[];
}

interface ExecCardProps {
  executive: Executive;
  index: number;
}

const ExecCard: React.FC<ExecCardProps> = ({ executive, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-scale-in');
              entry.target.classList.remove('opacity-0');
            }, index * 75); // Staggered animation
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className="relative group opacity-0"
    >
      <div className="relative overflow-hidden rounded-xl bg-white border border-border shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
        <div className="p-5">
          <div className="flex items-start gap-4">
            <div className="h-16 w-16 rounded-full bg-secondary relative overflow-hidden">
              {executive.image ? (
                <img 
                  src={executive.image} 
                  alt={executive.name} 
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-primary/40 text-lg font-medium">
                  {executive.name.charAt(0)}
                </div>
              )}
            </div>
            
            <div>
              <h3 className="font-medium text-lg">{executive.name}</h3>
              <p className="text-muted-foreground">{executive.title}</p>
            </div>
          </div>
          
          <div className="mt-4 space-y-3">
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-2 text-primary/60" />
              <span>Available: {executive.availability}</span>
            </div>
            
            <div className="flex items-center text-sm text-muted-foreground">
              <Briefcase className="h-4 w-4 mr-2 text-primary/60" />
              <span>Experience: {executive.experience}</span>
            </div>
            
            <div className="flex items-center text-sm text-muted-foreground">
              <Award className="h-4 w-4 mr-2 text-primary/60" />
              <span>Industries: {executive.industries.join(', ')}</span>
            </div>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {executive.specialties.slice(0, 3).map((specialty, idx) => (
              <span 
                key={idx} 
                className="px-2 py-1 bg-secondary rounded-md text-xs font-medium text-primary/80"
              >
                {specialty}
              </span>
            ))}
            {executive.specialties.length > 3 && (
              <span className="px-2 py-1 bg-secondary rounded-md text-xs font-medium text-primary/80">
                +{executive.specialties.length - 3} more
              </span>
            )}
          </div>
          
          <div className="mt-5 pt-4 border-t border-border">
            <Link 
              to={`/executive/${executive.id}`} 
              className="w-full inline-flex items-center justify-center py-2 rounded-lg bg-secondary text-primary text-sm font-medium transition-colors duration-200 hover:bg-primary hover:text-white"
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecCard;
