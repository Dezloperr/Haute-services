import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-background border-b border-gray-200">
      <div className="max-w-[100rem] mx-auto px-12">
        <nav className="flex items-center justify-between h-20">
          <Link to="/" className="font-heading text-2xl text-primary">
            Haute Services
          </Link>
          
          <div className="flex items-center gap-12">
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
              Food
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
        </nav>
      </div>
    </header>
  );
}
