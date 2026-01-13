// HPI 1.6-G
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactDialog from '@/components/ContactDialog';
import { ArrowRight, Star, Heart, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Utility Components for Motion & Interaction ---

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

/**
 * ParallaxImage: Uses scroll progress to create a subtle parallax effect.
 * Safe implementation using CSS variables and minimal JS.
 */
const ParallaxImage: React.FC<{ src: string; alt: string; className?: string; id: string }> = ({ src, alt, className, id }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="w-full h-[120%] -mt-[10%]">
        <Image 
          src={src}
          alt={alt}
          width={1200}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

// --- Main Page Component ---

export default function HomePage() {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  // Canonical Data Sources (Preserved from original code logic)
  const missionText = "Haute Services is a boutique consultancy dedicated to creating exceptional experiences in the lifestyle and art sectors. We combine deep industry expertise with a passion for excellence to deliver unparalleled service to our clients.";
  
  const services = [
        {
      id: 'art',
      title: 'Art Services',
      description: "Comprehensive art advisory services rooted in authenticity, creativity, and a commitment to excellence.",
      link: '/art',
      image: "https://static.wixstatic.com/media/e86273_5544b433099a4239815d3c652fa6d118~mv2.png?originWidth=1152&originHeight=576"
    },
    {
      id: 'food',
      title: 'Food Services',
      description: "In the food sector, we organize one of India’s biggest culinary events Food For Thought Fest where we bring together a vibrant community of food lovers, chefs, and storytellers who share their ideas, experiences, and passion for food.",
      link: '/food',
      image: "https://static.wixstatic.com/media/e86273_6ed3ac2e3a1043aab162cb3b20065ea5~mv2.png?originWidth=1152&originHeight=576"
    }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, ensuring exceptional results for our clients.",
      icon: Star
    },
    {
      title: "Authenticity",
      description: "We believe in genuine connections and authentic experiences that resonate with audiences.",
      icon: Heart
    },
    {
      title: "Innovation",
      description: "We continuously explore new ideas and approaches to create unique and memorable experiences.",
      icon: Lightbulb
    }
  ];

  return (
    <div className="min-h-screen bg-background text-primary font-paragraph selection:bg-gold-accent selection:text-white overflow-clip">
      <style>{`
        .is-visible {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }
        .text-stroke {
          -webkit-text-stroke: 1px rgba(51, 51, 51, 0.2);
          color: transparent;
        }
      `}</style>

      <Header />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen bg-yellow-500 flex flex-col md:justify-center justify-start pt-12 sm:pt-20 pb-8 sm:pb-12">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -z-10 hidden lg:block" />
        <div className="absolute top-1/4 left-6 sm:left-12 w-px h-64 bg-gold-accent/30 hidden lg:block" />

        <div className="w-full max-w-[120rem] mx-auto px-4 sm:px-6 bg-red-500 lg:px-12 grid lg:grid-cols-12 gap-8 sm:gap-12 items-center h-full">
          
          {/* Text Content */}
          <div className="lg:col-span-5 relative z-10 flex flex-col justify-center">
            <AnimatedElement animation="fade-up" delay={100}>
              <span className="inline-block py-1 px-3 border border-gold-accent/30 rounded-full text-xs tracking-widest uppercase text-gold-accent mb-6 w-fit">
                Boutique Consultancy
              </span>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-up" delay={200}>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl leading-[0.9] text-primary mb-6 sm:mb-8">
                Haute <br />
                <span className="italic text-secondary font-light">Services</span>
              </h1>
            </AnimatedElement>

            <AnimatedElement animation="fade-up" delay={300}>
              <div className="w-12 h-px bg-primary mb-6 sm:mb-8" />
              <p className="text-base sm:text-lg lg:text-xl text-secondary max-w-md leading-relaxed">
                Elevating lifestyle experiences through expert consultancy in food sector events and art advisory services.
              </p>
            </AnimatedElement>
          </div>

          {/* Hero Image Composition */}
          <div className="lg:col-span-7 relative h-[50vh] sm:h-[60vh] lg:h-[85vh] w-full">
            <div className="absolute inset-0 lg:left-12 lg:right-0">
              <ParallaxImage 
                id="hero-main"
                src="https://static.wixstatic.com/media/e86273_57cdee80347a45fa8d0d12a449a0768b~mv2.png?originWidth=1152&originHeight=832"
                alt="Elegant lifestyle event setting"
                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            
            {/* Floating Accent Image */}
            <div className="absolute md:-bottom-12 md:-left-6 right-4 -bottom-24 lg:left-0 w-48 lg:w-72 aspect-[3/4] shadow-2xl">
              <AnimatedElement animation="fade-in" delay={500} className="w-full h-full">
                <Image 
                  src="https://static.wixstatic.com/media/e86273_3cf2a07072524c97affc88166c70e75d~mv2.png?originWidth=1152&originHeight=832"
                  alt="Artistic detail"
                  width={400}
                  className="w-full h-full object-cover border-4 border-white"
                />
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* --- MISSION STATEMENT (Editorial Layout) --- */}
      <section className="py-16 sm:py-24 lg:py-32 xl:py-48 relative">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-24 items-start">
            
            {/* Sticky Title */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <AnimatedElement>
                <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-primary mb-6">
                  Our Mission
                </h2>
                <div className="w-full h-px bg-gray-200 mb-6" />
                <p className="text-xs sm:text-sm text-gold-accent uppercase tracking-widest font-medium">
                  Est. 2024
                </p>
              </AnimatedElement>
            </div>

            {/* Content Flow */}
            <div className="lg:col-span-8">
              <AnimatedElement delay={200}>
                <p className="font-heading text-2xl sm:text-3xl lg:text-5xl leading-tight text-primary/90 mb-8 sm:mb-12">
                  "{missionText}"
                </p>
              </AnimatedElement>
              
              <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
                <AnimatedElement delay={300}>
                  <p className="text-secondary text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                    We specialize in two distinct yet complementary areas: lifestyle events in the food sector and comprehensive art advisory services. Our approach is rooted in authenticity, creativity, and a commitment to excellence.
                  </p>
                  <Link to="/about" >
                  <div className="flex items-center gap-2 text-primary font-medium group cursor-pointer">
                    <span className="w-8 h-px bg-primary transition-all group-hover:w-12" />
                    <span className="text-sm sm:text-base  hover:text-gold-accent transition-colors">Read our story</span>
                  </div>
                  </Link>
                </AnimatedElement>
                
                <AnimatedElement delay={400} className="relative mt-8 sm:mt-12 md:mt-0">
                  <div className="aspect-[3/3] bg-gray-100 overflow-hidden">
                    <Image 
                      src="https://static.wixstatic.com/media/e86273_733e8cac0d2a4461b6e62be12e290674~mv2.jpg"
                      alt="Curated art piece"
                      width={600}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DUAL SERVICES (Split Screen / Alternating) --- */}
      <section className="py-0">
        {services.map((service, index) => (
          <div key={service.id} className="relative group overflow-hidden">
            <div className={`grid lg:grid-cols-2 min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              
              {/* Image Side */}
              <div className={`relative h-[50vh] sm:h-[60vh] lg:h-auto overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <ParallaxImage 
                  id={`service-img-${service.id}`}
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full absolute inset-0"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Content Side */}
              <div className={`flex flex-col justify-center p-6 sm:p-12 lg:p-24 bg-white ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <AnimatedElement animation={index % 2 === 0 ? 'fade-up' : 'fade-up'}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl sm:text-6xl font-heading text-gray-100 absolute -translate-y-8 -translate-x-8 select-none z-0">
                      0{index + 1}
                    </span>
                    <span className="relative z-10 text-xs font-bold tracking-widest uppercase text-gold-accent">
                      {service.title}
                    </span>
                  </div>
                  
                  <h3 className="relative z-10 font-heading text-4xl sm:text-5xl lg:text-6xl text-primary mb-6 sm:mb-8">
                    {service.title}
                  </h3>
                  
                  <p className="relative z-10 text-base sm:text-lg text-secondary mb-8 sm:mb-12 max-w-md">
                    {service.description}
                  </p>

                  <Link to={service.link} className="relative z-10 inline-flex items-center gap-3 text-primary hover:text-gold-accent transition-colors group/btn">
                    <span className="text-base sm:text-lg border-b border-primary/30 pb-1 group-hover/btn:border-gold-accent">
                      Explore {service.title}
                    </span>
                    <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </AnimatedElement>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* --- VALUES (Sticky Horizontal Layout) --- */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
        {/* Decorative Background Text */}
        <div className="absolute top-20 left-0 w-full overflow-hidden opacity-[0.03] pointer-events-none">
          <div className="whitespace-nowrap font-heading text-[8rem] sm:text-[12rem] lg:text-[15rem] leading-none">
            Values Values Values Values
          </div>
        </div>

        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12">
            
            {/* Sticky Header */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <AnimatedElement>
                  <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-primary mb-6 sm:mb-8">
                    Core Values
                  </h2>
                  <p className="text-secondary text-base sm:text-lg max-w-xs mb-8 sm:mb-12">
                    The principles that guide our every interaction and decision.
                  </p>
                  <div className="hidden lg:block w-24 h-px bg-gold-accent" />
                </AnimatedElement>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                {values.map((value, idx) => (
                  <AnimatedElement 
                    key={value.title} 
                    delay={idx * 100}
                    className={`bg-white p-6 sm:p-10 border border-gray-100 hover:border-gold-accent/30 transition-colors duration-300 ${idx === 2 ? 'md:col-span-2 md:w-1/2' : ''}`}
                  >
                    <value.icon className="w-8 h-8 text-gold-accent mb-6" strokeWidth={1.5} />
                    <h3 className="font-heading text-2xl sm:text-3xl text-primary mb-4">
                      {value.title}
                    </h3>
                    <p className="text-secondary text-sm sm:text-base leading-relaxed">
                      {value.description}
                    </p>
                  </AnimatedElement>
                ))}
              </div>
            </div>
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
          <AnimatedElement animation="fade-up">
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
          </AnimatedElement>
        </div>
      </section>

      <ContactDialog isOpen={isContactDialogOpen} onClose={() => setIsContactDialogOpen(false)} />

      <Footer />
    </div>
  );
}