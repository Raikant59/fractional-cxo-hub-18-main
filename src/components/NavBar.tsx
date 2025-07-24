
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, User, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { AuthModal } from '@/components/auth/AuthModal';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { user, signOut, loading } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 rounded-b-2xl shadow-soft font-sans border-b border-border bg-gradient-to-b from-secondary via-[#23232A] to-[#18181B] ${
        isScrolled 
          ? 'py-2' 
          : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="relative flex items-center"
        >
          <img 
            src="/lovable-uploads/7fabf0fd-ab9a-46a0-9921-5fcf09b40f14.png" 
            alt="CXO Pro" 
            className="h-14 w-auto opacity-90"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="/#how-it-works">How It Works</NavLink>
          <div className="relative group">
            <button className="flex items-center space-x-1 text-sm font-medium text-primary/80 hover:text-primary transition-colors duration-200 py-2">
              <span>CXO Services</span>
              <ChevronDown className="h-4 w-4 opacity-70" />
            </button>
            <div className="absolute top-full left-0 mt-1 w-80 p-6 rounded-lg bg-white shadow-xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left scale-95 group-hover:scale-100 z-50">
              <div className="grid gap-3">
                <NavDropdownItem href="/services#ceo" label="Fractional CEO" description="Strategic leadership, board reporting, fundraising, vision & culture development" />
                <NavDropdownItem href="/services#cfo" label="Fractional CFO" description="Financial planning, budgeting, cash flow management, investor relations, M&A support" />
                <NavDropdownItem href="/services#cto" label="Fractional CTO" description="Technical strategy, architecture decisions, team building, product development oversight" />
                <NavDropdownItem href="/services#cmo" label="Fractional CMO" description="Brand strategy, digital marketing, growth hacking, customer acquisition, campaign management" />
                <NavDropdownItem href="/services#coo" label="Fractional COO" description="Operations optimization, process improvement, team scaling, performance management" />
              </div>
            </div>
          </div>
          <NavLink href="/#contact">Contact</NavLink>
        </nav>

        {/* CTA Buttons / User Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span className="text-sm">{user.email}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/dashboard" className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={signOut} className="flex items-center space-x-2">
                  <LogOut className="h-4 w-4" />
                  <span>Sign Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button 
                variant="ghost" 
                onClick={() => setAuthModalOpen(true)}
                disabled={loading}
              >
                Sign In
              </Button>
              <Button 
                onClick={() => setAuthModalOpen(true)}
                disabled={loading}
              >
                Get Started
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-primary" />
          ) : (
            <Menu className="h-6 w-6 text-primary" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col space-y-6">
          <MobileNavLink href="/#how-it-works" onClick={() => setMobileMenuOpen(false)}>How It Works</MobileNavLink>
          <MobileNavLink href="/#solutions" onClick={() => setMobileMenuOpen(false)}>Solutions</MobileNavLink>
          <MobileNavLink href="/#contact" onClick={() => setMobileMenuOpen(false)}>Contact</MobileNavLink>
          <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
            <Link 
              to="/executives" 
              className="w-full py-3 rounded-full bg-secondary text-primary text-sm font-medium text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Find an Executive
            </Link>
            <Link 
              to="/#apply" 
              className="w-full py-3 rounded-full bg-primary text-white text-sm font-medium text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join as Executive
            </Link>
          </div>
        </div>
      </div>
      
      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-sm font-medium text-primary/80 hover:text-primary transition-colors duration-200"
  >
    {children}
  </a>
);

const MobileNavLink = ({ 
  href, 
  onClick, 
  children 
}: { 
  href: string; 
  onClick: () => void; 
  children: React.ReactNode 
}) => (
  <a 
    href={href} 
    className="text-base font-medium text-primary py-2"
    onClick={onClick}
  >
    {children}
  </a>
);

const NavDropdownItem = ({ 
  href, 
  label, 
  description 
}: { 
  href: string; 
  label: string; 
  description: string 
}) => (
  <a 
    href={href} 
    className="p-2 rounded-md hover:bg-secondary transition-colors duration-200"
  >
    <div className="font-medium text-sm">{label}</div>
    <div className="text-xs text-muted-foreground">{description}</div>
  </a>
);

export default NavBar;
