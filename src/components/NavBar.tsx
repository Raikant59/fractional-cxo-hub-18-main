import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, User, LogOut, ArrowRight } from 'lucide-react';
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
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<<<<<<< HEAD
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
=======
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 glass border-b border-border/10' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto container-padding flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">CX</span>
            </div>
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              CXO Pro
            </span>
          </Link>
>>>>>>> 1050fdcd4e379f7a014211a558b905a51526c4da

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink href="/#how-it-works">How It Works</NavLink>
            <div className="relative group">
              <button className="flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200">
                <span>Services</span>
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left scale-95 group-hover:scale-100 z-50">
                <div className="glass rounded-2xl p-6 border border-border/20 shadow-xl">
                  <div className="grid gap-3">
                    <NavDropdownItem 
                      href="/services#ceo" 
                      label="Fractional CEO" 
                      description="Strategic leadership and vision development"
                    />
                    <NavDropdownItem 
                      href="/services#cfo" 
                      label="Fractional CFO" 
                      description="Financial planning and strategic finance"
                    />
                    <NavDropdownItem 
                      href="/services#cto" 
                      label="Fractional CTO" 
                      description="Technology strategy and team leadership"
                    />
                    <NavDropdownItem 
                      href="/services#cmo" 
                      label="Fractional CMO" 
                      description="Marketing strategy and growth acceleration"
                    />
                    <NavDropdownItem 
                      href="/services#coo" 
                      label="Fractional COO" 
                      description="Operations optimization and scaling"
                    />
                  </div>
                </div>
              </div>
            </div>
            <NavLink href="/executives">Find Executives</NavLink>
            <NavLink href="/#contact">Contact</NavLink>
          </nav>

          {/* CTA Buttons / User Menu */}
          <div className="hidden md:flex items-center space-x-3">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium">{user.email?.split('@')[0]}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
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
                  className="rounded-lg"
                >
                  Sign In
                </Button>
                <Button 
                  onClick={() => setAuthModalOpen(true)}
                  disabled={loading}
                  className="btn-primary group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-accent/50 transition-colors" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out ${
            mobileMenuOpen 
              ? 'opacity-100 visible translate-y-0' 
              : 'opacity-0 invisible -translate-y-4'
          }`}
        >
          <div className="glass border-t border-border/10 m-4 rounded-2xl p-6">
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="/#how-it-works" onClick={() => setMobileMenuOpen(false)}>
                How It Works
              </MobileNavLink>
              <MobileNavLink href="/services" onClick={() => setMobileMenuOpen(false)}>
                Services
              </MobileNavLink>
              <MobileNavLink href="/executives" onClick={() => setMobileMenuOpen(false)}>
                Find Executives
              </MobileNavLink>
              <MobileNavLink href="/#contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </MobileNavLink>
              
              <div className="pt-4 border-t border-border/20 flex flex-col space-y-3">
                {user ? (
                  <>
                    <Link 
                      to="/dashboard" 
                      className="btn-secondary text-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button 
                      onClick={() => {
                        signOut();
                        setMobileMenuOpen(false);
                      }}
                      className="btn-ghost text-center"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      onClick={() => {
                        setAuthModalOpen(true);
                        setMobileMenuOpen(false);
                      }}
                      className="btn-secondary text-center"
                    >
                      Sign In
                    </button>
                    <button 
                      onClick={() => {
                        setAuthModalOpen(true);
                        setMobileMenuOpen(false);
                      }}
                      className="btn-primary text-center"
                    >
                      Get Started
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
    </>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
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
    className="text-base font-medium text-foreground py-2 hover:text-primary transition-colors"
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
    className="p-3 rounded-xl hover:bg-accent/50 transition-all duration-200 group"
  >
    <div className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
      {label}
    </div>
    <div className="text-xs text-muted-foreground mt-1">
      {description}
    </div>
  </a>
);

export default NavBar;