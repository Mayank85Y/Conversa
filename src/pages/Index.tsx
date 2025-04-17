
import Navbar from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { AppShowcase } from "@/components/AppShowcase";
import { useState, useEffect } from "react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax effect calculation
  const calculateParallax = (element, multiplier = 0.1) => {
    if (typeof window !== 'undefined') {
      return { transform: `translateY(${scrollPosition * multiplier}px)` };
    }
    return {};
  };

  return (
    <div className={`min-h-screen flex flex-col ${isLoaded ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}`}>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ValueProposition />
        <AppShowcase />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
