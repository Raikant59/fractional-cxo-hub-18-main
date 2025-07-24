import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
<<<<<<< HEAD
    <footer className="bg-gradient-to-t from-secondary via-[#23232A] to-[#18181B] text-foreground pt-16 pb-6 rounded-t-2xl shadow-soft font-sans border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-12">
          {/* Logo and Description Section - Spans 6 columns */}
          <div className="md:col-span-6">
            <div className="mb-6">
              <Link to="/" className="inline-block">
                <span className="font-display text-xl font-semibold tracking-tight">Fractional</span>
                <span className="font-display text-xl font-light tracking-tight ml-1">CXO</span>
              </Link>
            </div>
            <p className="text-white/70 mb-6 max-w-xs">
              Connecting businesses with exceptional C-suite talent for fractional, interim, and project-based leadership.
            </p>
          </div>

          {/* Navigation Sections - Each spans 3 columns */}
          <div className="md:col-span-3">
            <h3 className="font-medium text-lg mb-6">For Businesses</h3>
            <ul className="space-y-4">
              {[
                { label: 'How It Works', path: '/#how-it-works' },
                { label: 'Find Executives', path: '/executives' },
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.path} 
                    className="text-white/70 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-2" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-medium text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              {[
                { label: 'Contact Us', path: '/#contact' },
                { label: 'Schedule a Call', path: '/#request' },
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.path} 
                    className="text-white/70 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-2" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
=======
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto container-padding">
        {/* Main Footer Content */}
        <div className="section-padding border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CX</span>
                </div>
                <span className="text-xl font-bold">CXO Pro</span>
              </div>
              <p className="text-white/70 mb-6 text-body leading-relaxed">
                Connecting businesses with exceptional C-suite talent for fractional, interim, and project-based leadership.
              </p>
              <div className="flex space-x-4">
                <SocialLink href="#" icon={Twitter} label="Twitter" />
                <SocialLink href="#" icon={Linkedin} label="LinkedIn" />
                <SocialLink href="#" icon={Github} label="GitHub" />
                <SocialLink href="mailto:hello@cxopro.com" icon={Mail} label="Email" />
              </div>
            </div>

            {/* For Businesses */}
            <div>
              <h3 className="font-semibold text-lg mb-6">For Businesses</h3>
              <ul className="space-y-4">
                <FooterLink href="/#how-it-works" label="How It Works" />
                <FooterLink href="/executives" label="Find Executives" />
                <FooterLink href="/services" label="Our Services" />
                <FooterLink href="/#pricing" label="Pricing" />
                <FooterLink href="/#case-studies" label="Success Stories" />
              </ul>
            </div>

            {/* For Executives */}
            <div>
              <h3 className="font-semibold text-lg mb-6">For Executives</h3>
              <ul className="space-y-4">
                <FooterLink href="/#join" label="Join Our Network" />
                <FooterLink href="/#apply" label="Application Process" />
                <FooterLink href="/#resources" label="Executive Resources" />
                <FooterLink href="/#testimonials" label="Success Stories" />
                <FooterLink href="/#faq" label="FAQ" />
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Company</h3>
              <ul className="space-y-4">
                <FooterLink href="/about" label="About Us" />
                <FooterLink href="/#contact" label="Contact" />
                <FooterLink href="/careers" label="Careers" />
                <FooterLink href="/blog" label="Blog" />
                <FooterLink href="/press" label="Press" />
              </ul>
            </div>
>>>>>>> 1050fdcd4e379f7a014211a558b905a51526c4da
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-12 border-b border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-white/70 mb-6">
              Get the latest insights on fractional leadership and executive trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-colors flex items-center justify-center group">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/50 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} CXO Pro. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <a href="/privacy" className="text-white/50 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-white/50 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-white/50 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <li>
    <a 
      href={href} 
      className="text-white/70 hover:text-white transition-colors duration-200 flex items-center group"
    >
      <ArrowRight className="h-3 w-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
      {label}
    </a>
  </li>
);

const SocialLink = ({ 
  href, 
  icon: Icon, 
  label 
}: { 
  href: string; 
  icon: React.ComponentType<{ className?: string }>; 
  label: string 
}) => (
  <a
    href={href}
    aria-label={label}
    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110"
  >
    <Icon className="h-5 w-5" />
  </a>
);

export default Footer;