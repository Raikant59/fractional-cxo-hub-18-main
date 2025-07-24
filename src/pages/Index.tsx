
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import ServiceTypes from '@/components/ServiceTypes';
import RequestForm from '@/components/RequestForm';
import HowItWorks from '@/components/HowItWorks';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SafetyFeatures from '@/components/SafetyFeatures';
import { Stats } from '@/components/Stats';
import { Testimonials } from '@/components/Testimonials';
import { CXOStrengths } from '@/components/CXOStrengths';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleServiceRequest = (serviceType: string) => {
    // Scroll to the request form
    const requestSection = document.getElementById('request');
    if (requestSection) {
      requestSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <CXOStrengths />
        <ServiceTypes onRequestService={handleServiceRequest} />
        <HowItWorks />
        <SafetyFeatures />
        <RequestForm />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
