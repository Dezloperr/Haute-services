import { useEffect, useState, useRef } from 'react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactDialog from '@/components/ContactDialog';
import { BaseCrudService } from '@/integrations';
import { Services } from '@/entities';
import { ExternalLink, Award, Star, Heart, Lightbulb, Globe, Users, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


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

const values = [
    {
      title: "Excellence",
      description: "Showcase culinary innovation and excellence from around the world.",
      icon: Star
    },
    {
      title: "Authenticity",
      description: "Create platforms for meaningful dialogue about food, sustainability, and culture.",
      icon: Heart
    },
    {
      title: "Innovation",
      description: "Celebrate the intersection of food, art, and culture.",
      icon: Lightbulb
    }
  ];

// Chef data for marquee
const chefData = [
  { name: 'Elena Rodriguez', role: 'Executive Chef', image: 'https://static.wixstatic.com/media/e86273_2fe0218bfef0411ca55155a1c607750b~mv2.png?originWidth=128&originHeight=128' },
  { name: 'Marcus Chen', role: 'Pastry Chef', image: 'https://static.wixstatic.com/media/e86273_2e4445ba5c244a3c946825482e316269~mv2.png?originWidth=128&originHeight=128' },
  { name: 'Sophie Laurent', role: 'Sous Chef', image: 'https://static.wixstatic.com/media/e86273_ce46e0e14b1e4765964e88c13a18889a~mv2.png?originWidth=128&originHeight=128' },
  { name: 'James Thompson', role: 'Head Chef', image: 'https://static.wixstatic.com/media/e86273_01f46e89b380484ea5080bbe050d9cb0~mv2.png?originWidth=128&originHeight=128' },
  { name: 'Aria Patel', role: 'Culinary Director', image: 'https://static.wixstatic.com/media/e86273_30acbe531c7d488b91c05746c1edb258~mv2.png?originWidth=128&originHeight=128' },
  { name: 'Diego Martinez', role: 'Chef de Cuisine', image: 'https://static.wixstatic.com/media/e86273_b999ac919daf4eaca1ad365b09f51ea4~mv2.png?originWidth=128&originHeight=128' },
];

// Media images for masonry grid
const mediaImages = [
  { src: 'https://static.wixstatic.com/media/e86273_5739e4378254475a8666886ad594d671~mv2.png?originWidth=384&originHeight=256', alt: 'Chef interview' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbw5KQNis2TDrwILPZVntuuyO6nL5-u0RhYA&s', alt: 'Food festival coverage' },
  { src: 'https://kashi.gov.in/cmsadmin/storage/CMS/65d2fbcc303531708325836.jpg', alt: 'Culinary showcase' },
  { src: 'https://static.wixstatic.com/media/e86273_6c70315f2cec47608b282c5606b128b9~mv2.png?originWidth=384&originHeight=256', alt: 'Festival highlights' },
  { src: 'https://static.wixstatic.com/media/e86273_fe1c4c0e00254df5acf90747819020b7~mv2.png?originWidth=384&originHeight=256', alt: 'Press conference' },
  { src: 'https://plus.unsplash.com/premium_photo-1694547926001-f2151e4a476b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww', alt: 'Media event' },
  { src: 'https://static.wixstatic.com/media/e86273_0e30de44c5f341169694fee0dd8c0e61~mv2.png?originWidth=384&originHeight=256', alt: 'Food photography' },
  { src: 'https://thumbs.dreamstime.com/b/different-meals-served-breakfast-wooden-table-flat-lay-375298017.jpg', alt: 'Festival atmosphere' },
];

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
      <section className="py-6 sm:py-16 lg:py-20 border-b">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8 sm:mb-20">
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

          <div className="lg:col-span-4 mb-12">
                <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-primary mb-6">
                  Our Initiative
                </h2>
                <div className="w-full h-px bg-gray-200 mb-6" />
                <h2 className="font-heading text-xl sm:text-4xl lg:text-5xl text-gold-accent uppercase tracking-widest font-medium mb-4 sm:mb-8">
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
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover mb-4 sm:mb-8"
                width={700}
              />
            </div>
            
            <div>
              <h3 className="font-heading text-2xl sm:text-3xl text-primary mb-2 sm:mb-6">
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-20">
            <div className="bg-white p-6 sm:p-8 border border-gray-200">
            <div className="w-full flex overflow-hidden h-[25vh] bg-red-400 mb-2">
            <div className="w-full h-full bg-blue-300">
             <Image 
                src="https://static.wixstatic.com/media/e86273_8be9805e88524811816df8ccd741b923~mv2.png?originWidth=640&originHeight=448"
                alt="Food For Thought Fest event"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-full bg-green-300"> </div>
            </div>
              <h4 className="font-heading text-xl sm:text-2xl text-primary mb-3 sm:mb-4 flex items-center gap-3">
                Global Reach
              </h4>
              <p className="font-paragraph text-sm sm:text-base text-foreground">
                Food For Thought Fest takes place across multiple geographies, bringing the festival experience to culinary capitals worldwide. From intimate regional gatherings to large-scale international events, we create localized experiences that celebrate global culinary diversity.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 border border-gray-200">
            <div className="w-full h-[25vh] bg-red-400 mb-2">
              <Image src={"https://static.wixstatic.com/media/e86273_d2ffa787e5b848d3937819b964cacb51~mv2.jpg"} alt="festival format" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-heading text-xl sm:text-2xl text-primary mb-3 sm:mb-4 flex items-center gap-3">
                Festival Format
              </h4>
              <p className="font-paragraph text-sm sm:text-base text-foreground">
                The festival features a diverse program including chef demonstrations, masterclasses, wine and beverage pairings, pop-up dining experiences, artisan markets, and thought-provoking panel discussions. Each element is carefully curated to inspire, educate, and entertain.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 border border-gray-200">
            <div className="w-full h-[25vh] bg-red-400 mb-2"></div>
              <h4 className="font-heading text-xl sm:text-2xl text-primary mb-3 sm:mb-4 flex items-center gap-3">
                Participants & Community
              </h4>
              <p className="font-paragraph text-sm sm:text-base text-foreground">
                We collaborate with Michelin-starred chefs, emerging culinary talents, food writers, restaurateurs, and passionate food enthusiasts. The festival brings together a diverse community united by their appreciation for exceptional food and meaningful culinary experiences.
              </p>
            </div>
          </div>


{/* Chefs Marquee */}
<div className="w-full overflow-hidden bg-gray-50 py-10">
  <motion.div
    className="flex items-center will-change-transform"
    animate={{ x: ["0%", "-100%"] }}
    transition={{
      duration: 40,
      ease: "linear",
      repeat: Infinity,
    }}
  >
    {/* Duplicate for seamless loop */}
    {[...Array(2)].map((_, loopIndex) => (
      <div key={loopIndex} className="flex items-center">
        {chefData.map((chef, index) => (
          <div
            key={`${loopIndex}-${index}`}
            className="flex-shrink-0 text-center mx-8"
          >
            <div className="w-32 h-32 mx-auto mb-3">
              <Image
                src={chef.image}
                alt={chef.name}
                width={128}
                height={128}
                className="rounded-full object-cover w-full h-full"
              />
            </div>

            <h4 className="font-heading text-lg text-primary">
              {chef.name}
            </h4>
            <p className="font-paragraph text-sm text-secondary">
              {chef.role}
            </p>
          </div>
        ))}
      </div>
    ))}
  </motion.div>
</div>


          {/* Media coverage images  */}

         <div className="bg-white text-center my-12 w-full">
  <h4 className="font-heading text-xl sm:text-2xl text-primary mb-3 sm:mb-4 flex justify-center w-full items-center gap-3">
    Media & Recognition
  </h4>
<div className="w-full flex items-center justify-center">
  <p className="font-paragraph w-full flex items-center justify-center max-w-4xl text-sm sm:text-base text-foreground mb-8">
    Food For Thought Fest has garnered significant media coverage from leading food publications, lifestyle media, and international press. The festival is recognized as a premier platform for culinary innovation and cultural exchange in the food sector.
  </p>
  </div>

  {/* Masonry Grid */}
  <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
    {mediaImages.map((img, index) => (
      <div
        key={index}
        className="break-inside-avoid-column overflow-hidden mb-4"
      >
        <Image
          src={img.src}
          alt={img.alt}
          className="w-full h-auto object-cover rounded-lg shadow-sm"
          width={500}
          height={500}
        />
      </div>
    ))}
  </div>
</div>


          {/* --- VALUES (Sticky Horizontal Layout) --- */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
        {/* Decorative Background Text */}
        <div className="absolute top-20 left-0 w-full overflow-hidden opacity-[0.03] pointer-events-none">
          <div className="whitespace-nowrap font-heading text-[8rem] sm:text-[12rem] lg:text-[15rem] leading-none">
            Food Food Food Food
          </div>
        </div>

        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12">
            
            {/* Sticky Header */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                  <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-primary mb-6 sm:mb-8">
                    Our Purpose
                  </h2>
                  <p className="text-secondary text-base sm:text-lg max-w-xs mb-8 sm:mb-12">
                    Food For Thought Fest exists to celebrate the transformative power of food. We believe that culinary experiences can inspire creativity, foster cultural understanding, and create lasting connections between people. Through our festival, we aim to:
                  </p>
                  <div className="hidden lg:block w-24 h-px bg-gold-accent" />
              </div>
            </div>

            {/* Cards Grid */}
            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                {values.map((value, idx) => (
                  <div 
                    key={value.title} 

                    className={`bg-white p-6 sm:p-10 border border-gray-100 hover:border-gold-accent/30 transition-colors duration-300 md:col-span-2 md:w-1/2`}
                  >
                    <value.icon className="w-8 h-8 text-gold-accent mb-6" strokeWidth={1.5} />
                    <h3 className="font-heading text-2xl sm:text-3xl text-primary mb-4">
                      {value.title}
                    </h3>
                    <p className="text-secondary text-sm sm:text-base leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
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
