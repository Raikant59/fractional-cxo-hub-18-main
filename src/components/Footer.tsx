
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div>
            <div className="mb-6">
              <Link to="/" className="inline-block">
                <span className="font-display text-xl font-semibold tracking-tight">Fractional</span>
                <span className="font-display text-xl font-light tracking-tight ml-1">CXO</span>
              </Link>
            </div>
            <p className="text-white/70 mb-6 max-w-xs">
              Connecting businesses with exceptional C-suite talent for fractional, interim, and project-based leadership.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'Facebook'].map((social, index) => (
                <a 
                  key={index}
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">For Businesses</h3>
            <ul className="space-y-3">
              {[
                { label: 'How It Works', path: '/#how-it-works' },
                { label: 'Find Executives', path: '/executives' },
                { label: 'Our Process', path: '/#process' },
                { label: 'Success Stories', path: '/#case-studies' },
                { label: 'Pricing', path: '/#pricing' },
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.path} 
                    className="text-white/70 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">For Executives</h3>
            <ul className="space-y-3">
              {[
                { label: 'Join Our Network', path: '/#join' },
                { label: 'Application Process', path: '/#apply' },
                { label: 'Executive Resources', path: '/#resources' },
                { label: 'Success Stories', path: '/#testimonials' },
                { label: 'FAQ', path: '/#faq' },
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.path} 
                    className="text-white/70 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              {[
                { label: 'Contact Us', path: '/#contact' },
                { label: 'Support', path: '/#support' },
                { label: 'Schedule a Call', path: '/#schedule' },
                { label: 'Privacy Policy', path: '/privacy' },
                { label: 'Terms of Service', path: '/terms' },
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.path} 
                    className="text-white/70 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/50 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Fractional CXO. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-white/50 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-white/50 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
