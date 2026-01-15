import { ExternalLink, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-gray-200">
      <div className="max-w-[100rem] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
           <Link to="/" className="flex-shrink-0">
            <Image 
              src="https://static.wixstatic.com/media/e86273_6a31b9369f2148b293befb62b4e5b115~mv2.png"
              alt="Haute Services"
              width={200}
              className="h-12 w-auto"
            />
          </Link>
            <p className="font-paragraph mt-2 text-sm lg:text-base text-secondary max-w-md">
              A boutique consultancy specializing in culinary events and art advisory services.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading text-lg text-primary md:mb-6 mb-2">About us</h4>
            <div className="flex flex-col gap-4">
              <Link
                to="/art"
                className="font-paragraph text-sm lg:text-base text-foreground hover:text-gold-accent transition-colors flex items-center gap-2"
              >
                Art
              </Link>
              <Link
                to="/food"
                className="font-paragraph text-sm lg:text-base text-foreground hover:text-gold-accent transition-colors flex items-center gap-2"
              >
                Culinary Events
              </Link>
              <Link
                to="/about"
                className="font-paragraph text-sm lg:text-base text-foreground hover:text-gold-accent transition-colors flex items-center gap-2"
              >
                Haute Services
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg text-primary md:mb-6 mb-2">Initiatives</h4>
            <div className="flex flex-col gap-4">
              <a 
                href="https://www.foodforthoughtfest.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-paragraph text-sm lg:text-base text-foreground hover:text-gold-accent transition-colors flex items-center gap-2"
              >
                Food For Thought Fest
              </a>
            </div>
          </div>

          <div className="w-full flex flex-col">
            <h4 className="font-heading text-lg text-primary md:mb- mb-2">Follow us</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/hauteservices" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-paragraph text-sm lg:text-base text-foreground hover:text-gold-accent transition-colors flex items-center gap-2"
              >
              <Instagram size={14} /> Instagram
              </a>
              <a 
                href="https://www.linkedin.com/company/hauteservices" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-paragraph text-sm lg:text-base text-foreground hover:text-gold-accent transition-colors flex items-center gap-2"
              >
              <Linkedin size={14} /> Linkdin
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="font-paragraph text-xs lg:text-sm text-secondary text-center">
            © {new Date().getFullYear()} Haute Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
