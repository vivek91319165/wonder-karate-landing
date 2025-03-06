
import { useState, useEffect } from 'react';
import { Instagram, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12",
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <div className="flex flex-col md:flex-row md:items-baseline gap-0 md:gap-2">
            <span className="font-display text-2xl font-bold text-karate-black">WONDER</span>
            <span className="font-display text-lg text-karate-red">KARATE</span>
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="karate-link text-karate-black font-medium">About</a>
          <a href="#classes" className="karate-link text-karate-black font-medium">Classes</a>
          <a href="#instructors" className="karate-link text-karate-black font-medium">Instructors</a>
          <a href="#testimonials" className="karate-link text-karate-black font-medium">Testimonials</a>
          <a href="#contact" className="karate-link text-karate-black font-medium">Contact</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-karate-red hover:text-karate-black transition-colors">
            <Instagram size={20} />
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-karate-black focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-white pt-20 px-6 md:hidden flex flex-col items-center transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center gap-8 text-lg">
          <a href="#about" className="text-karate-black font-medium" onClick={toggleMenu}>About</a>
          <a href="#classes" className="text-karate-black font-medium" onClick={toggleMenu}>Classes</a>
          <a href="#instructors" className="text-karate-black font-medium" onClick={toggleMenu}>Instructors</a>
          <a href="#testimonials" className="text-karate-black font-medium" onClick={toggleMenu}>Testimonials</a>
          <a href="#contact" className="text-karate-black font-medium" onClick={toggleMenu}>Contact</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-karate-red hover:text-karate-black transition-colors">
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
