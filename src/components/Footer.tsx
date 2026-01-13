import { ExternalLink, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-gray-200">
      <div className="max-w-[100rem] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <h3 className="font-heading text-xl lg:text-2xl text-primary mb-6">Haute Services</h3>
            <p className="font-paragraph text-sm lg:text-base text-secondary max-w-md">
              A boutique consultancy specializing in culinary events and art advisory services.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading text-lg text-primary mb-6">Our Initiatives</h4>
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
            <h4 className="font-heading text-lg text-primary mb-6">Socials</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/hauteservices" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-paragraph text-sm lg:text-base text-foreground hover:text-gold-accent transition-colors flex items-center gap-2"
              >
              <Instagram size={20} /> Instagram
              </a>
              <a 
                href="https://www.linkedin.com/company/hauteservices" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-paragraph text-sm lg:text-base text-foreground hover:text-gold-accent transition-colors flex items-center gap-2"
              >
              <Linkedin size={20} /> Linkedin
              </a>
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
