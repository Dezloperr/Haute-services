import { useEffect, useState, useRef } from 'react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactDialog from '@/components/ContactDialog';
import { BaseCrudService } from '@/integrations';
import { Services } from '@/entities';
import { ExternalLink, Award, Globe, Users, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';


/**
 * AnimatedElement: A reusable component for scroll-triggered reveals using IntersectionObserver.
 * Adheres to the "Safety & Performance" mandate.
 */
type AnimatedElementProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'fade-in' | 'slide-in-right';
};

const AnimatedElement: React.FC<AnimatedElementProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  animation = 'fade-up' 
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Add a small delay via style if needed, or just let CSS handle the transition
        setTimeout(() => {
          element.classList.add('is-visible');
        }, delay);
        observer.unobserve(element);
      }
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-in': return 'opacity-0 transition-opacity duration-1000 ease-out';
      case 'slide-in-right': return 'opacity-0 translate-x-10 transition-all duration-1000 ease-out';
      case 'fade-up': default: return 'opacity-0 translate-y-8 transition-all duration-1000 ease-out';
    }
  };

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className} group`}>
      {children}
    </div>
  );
};

export default function FoodPage() {
  const [foodServices, setFoodServices] = useState<Services[]>([]);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  useEffect(() => {
    async function loadServices() {
      const { items } = await BaseCrudService.getAll<Services>('services');
      const food = items.filter(s => s.serviceCategory === 'Food');
      setFoodServices(food);
    }
    loadServices();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 border-b">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-20">
            <h1 className="font-heading text-4xl italic sm:text-5xl lg:text-6xl text-primary mb-4 sm:mb-8">
              Culinary Events
            </h1>
            <p className="font-paragraph text-base sm:text-lg lg:text-xl text-secondary max-w-3xl mx-auto px-4">
              Creating exceptional culinary experiences around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Food For Thought Fest Section */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 sm:mb-20">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-primary mb-4 sm:mb-8">
              Food For Thought Fest
            </h2>
            <p className="font-paragraph text-base sm:text-lg text-secondary max-w-3xl">
              Our flagship initiative celebrating culinary excellence, innovation, and the intersection of food with culture and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-start mb-12 sm:mb-20">
            <div>
              <Image 
                src="https://static.wixstatic.com/media/e86273_8be9805e88524811816df8ccd741b923~mv2.png?originWidth=640&originHeight=448"
                alt="Food For Thought Fest event"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover mb-6 sm:mb-8"
                width={700}
              />
            </div>
            
            <div>
              <h3 className="font-heading text-2xl sm:text-3xl text-primary mb-4 sm:mb-6">
                Festival Overview
              </h3>
              <p className="font-paragraph text-sm sm:text-base text-foreground mb-4 sm:mb-6">
                Food For Thought Fest is an annual celebration of culinary excellence that brings together renowned chefs, food artisans, innovators, and enthusiasts from around the world. The festival is a platform for exploring contemporary cuisine, celebrating culinary traditions, and fostering meaningful conversations about the future of food.
              </p>
              <p className="font-paragraph text-sm sm:text-base text-foreground mb-6 sm:mb-8">
                Each edition features interactive demonstrations, exclusive tastings, panel discussions with industry leaders, and immersive experiences that engage all the senses. It's where innovation meets tradition, and where food becomes art.
              </p>
              <a 
                href="https://www.foodforthoughtfest.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="bg-gold-accent text-secondary-foreground border-none rounded px-4 sm:px-6 py-2 sm:py-3 font-paragraph text-sm sm:text-base hover:opacity-90 transition-opacity flex items-center gap-2">
                  Visit Festival Website
                  <ExternalLink size={16} />
                </button>
              </a>
            </div>
          </div>

          {/* Festival Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-20">
            <div className="bg-white p-6 sm:p-8 border border-gray-200">
              <h4 className="font-heading text-xl sm:text-2xl text-primary mb-3 sm:mb-4 flex items-center gap-3">
                Global Reach
              </h4>
              <p className="font-paragraph text-sm sm:text-base text-foreground">
                Food For Thought Fest takes place across multiple geographies, bringing the festival experience to culinary capitals worldwide. From intimate regional gatherings to large-scale international events, we create localized experiences that celebrate global culinary diversity.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 border border-gray-200">
              <h4 className="font-heading text-xl sm:text-2xl text-primary mb-3 sm:mb-4 flex items-center gap-3">
                Festival Format
              </h4>
              <p className="font-paragraph text-sm sm:text-base text-foreground">
                The festival features a diverse program including chef demonstrations, masterclasses, wine and beverage pairings, pop-up dining experiences, artisan markets, and thought-provoking panel discussions. Each element is carefully curated to inspire, educate, and entertain.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 border border-gray-200">
              <h4 className="font-heading text-xl sm:text-2xl text-primary mb-3 sm:mb-4 flex items-center gap-3">
                Participants & Community
              </h4>
              <p className="font-paragraph text-sm sm:text-base text-foreground">
                We collaborate with Michelin-starred chefs, emerging culinary talents, food writers, restaurateurs, and passionate food enthusiasts. The festival brings together a diverse community united by their appreciation for exceptional food and meaningful culinary experiences.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 border border-gray-200">
              <h4 className="font-heading text-xl sm:text-2xl text-primary mb-3 sm:mb-4 flex items-center gap-3">
                Media & Recognition
              </h4>
              <p className="font-paragraph text-sm sm:text-base text-foreground">
                Food For Thought Fest has garnered significant media coverage from leading food publications, lifestyle media, and international press. The festival is recognized as a premier platform for culinary innovation and cultural exchange in the food sector.
              </p>
            </div>
          </div>

          {/* Festival Purpose */}
          <div className="bg-gray-50 p-6 sm:p-8 lg:p-12">
            <h3 className="font-heading text-2xl sm:text-3xl text-primary mb-4 sm:mb-6">
              Our Purpose
            </h3>
            <p className="font-paragraph text-sm sm:text-base text-foreground mb-4 sm:mb-6">
              Food For Thought Fest exists to celebrate the transformative power of food. We believe that culinary experiences can inspire creativity, foster cultural understanding, and create lasting connections between people. Through our festival, we aim to:
            </p>
            <ul className="space-y-3 sm:space-y-4">
              <li className="font-paragraph text-sm sm:text-base text-foreground flex gap-3">
                <span className="text-gold-accent font-bold flex-shrink-0">•</span>
                <span>Showcase culinary innovation and excellence from around the world</span>
              </li>
              <li className="font-paragraph text-sm sm:text-base text-foreground flex gap-3">
                <span className="text-gold-accent font-bold flex-shrink-0">•</span>
                <span>Create platforms for meaningful dialogue about food, sustainability, and culture</span>
              </li>
              <li className="font-paragraph text-sm sm:text-base text-foreground flex gap-3">
                <span className="text-gold-accent font-bold flex-shrink-0">•</span>
                <span>Support emerging culinary talent and foster community within the food sector</span>
              </li>
              <li className="font-paragraph text-sm sm:text-base text-foreground flex gap-3">
                <span className="text-gold-accent font-bold flex-shrink-0">•</span>
                <span>Celebrate the intersection of food, art, and culture</span>
              </li>
            </ul>
          </div>
        </div>
      </section>


      {/* --- VISUAL INTERLUDE / CTA --- */}
      <section className="relative py-24 sm:py-32 lg:py-40 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://static.wixstatic.com/media/e86273_ac8a530d1a5f432aa03681dba1b67ebc~mv2.png?originWidth=1920&originHeight=1024"
            alt="Abstract texture"
            className="w-full h-full object-cover opacity-5"
            width={1920}
          />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-7xl text-primary mb-8 sm:mb-12">
              Ready to elevate your <br />
              <span className="italic text-gold-accent">experience?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <button 
                onClick={() => setIsContactDialogOpen(true)}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white min-w-[180px] sm:min-w-[200px] hover:bg-primary/90 transition-colors duration-300 rounded font-paragraph text-base"
              >
                Contact Us
              </button>
            </div>
        </div>
      </section>

      <ContactDialog isOpen={isContactDialogOpen} onClose={() => setIsContactDialogOpen(false)} />

      <Footer />
    </div>
  );
}
