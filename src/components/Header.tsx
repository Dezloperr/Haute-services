import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between h-20">
          <Link to="/" className="font-heading text-xl lg:text-2xl text-primary flex-shrink-0">
            Haute Services
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            <Link 
              to="/" 
              className="font-paragraph text-base text-foreground hover:text-gold-accent transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/food" 
              className="font-paragraph text-base text-foreground hover:text-gold-accent transition-colors"
            >
              Culinary Events
            </Link>
            <Link 
              to="/art" 
              className="font-paragraph text-base text-foreground hover:text-gold-accent transition-colors"
            >
              Art
            </Link>
            <Link 
              to="/about" 
              className="font-paragraph text-base text-foreground hover:text-gold-accent transition-colors"
            >
              About Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-foreground hover:text-gold-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-gray-200">
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 font-paragraph text-base text-foreground hover:text-gold-accent transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/food" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 font-paragraph text-base text-foreground hover:text-gold-accent transition-colors"
            >
              Culinary Events
            </Link>
            <Link 
              to="/art" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 font-paragraph text-base text-foreground hover:text-gold-accent transition-colors"
            >
              Art
            </Link>
            <Link 
              to="/about" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 font-paragraph text-base text-foreground hover:text-gold-accent transition-colors"
            >
              About Us
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
