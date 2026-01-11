import { useEffect, useState } from 'react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Services } from '@/entities';
import { ExternalLink } from 'lucide-react';

export default function FoodPage() {
  const [foodServices, setFoodServices] = useState<Services[]>([]);

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
      <section className="py-32">
        <div className="max-w-[100rem] mx-auto px-12">
          <div className="text-center mb-20">
            <h1 className="font-heading text-6xl text-primary mb-8">
              Food Services
            </h1>
            <p className="font-paragraph text-xl text-secondary max-w-3xl mx-auto">
              Creating exceptional culinary experiences and providing expert consultancy for the food sector.
            </p>
          </div>
        </div>
      </section>

      {/* Food For Thought Fest Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[100rem] mx-auto px-12">
          <div className="grid grid-cols-2 gap-24 items-center">
            <div>
              <Image 
                src="https://static.wixstatic.com/media/e86273_09dfe5b6f1c146b3b5c48beb28aa1798~mv2.png?originWidth=640&originHeight=576"
                alt="Food For Thought Fest event"
                className="w-full h-[600px] object-cover"
                width={700}
              />
            </div>
            
            <div>
              <h2 className="font-heading text-4xl text-primary mb-8">
                Food For Thought Fest
              </h2>
              <p className="font-paragraph text-base text-foreground mb-6">
                Our flagship event, Food For Thought Fest, is a celebration of culinary excellence that brings together renowned chefs, food artisans, and enthusiasts for an unforgettable experience.
              </p>
              <p className="font-paragraph text-base text-foreground mb-6">
                This annual festival showcases the finest in contemporary cuisine, featuring interactive demonstrations, tastings, and conversations with industry leaders. It's where innovation meets tradition, and where food becomes art.
              </p>
              <p className="font-paragraph text-base text-foreground mb-8">
                Join us in exploring the intersection of food, culture, and creativity through carefully curated experiences that engage all the senses.
              </p>
              <a 
                href="https://www.foodforthoughtfest.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="bg-gold-accent text-secondary-foreground border-none rounded px-6 py-3 font-paragraph text-base hover:opacity-90 transition-opacity flex items-center gap-2">
                  Visit Festival Website
                  <ExternalLink size={18} />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32">
        <div className="max-w-[100rem] mx-auto px-12">
          <h2 className="font-heading text-5xl text-primary text-center mb-20">
            Our Food Sector Services
          </h2>
          
          {foodServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {foodServices.map((service) => (
                <div key={service._id} className="bg-white">
                  {service.serviceImage && (
                    <Image 
                      src={service.serviceImage}
                      alt={service.serviceName || 'Service image'}
                      className="w-full h-[400px] object-cover mb-8"
                      width={600}
                    />
                  )}
                  <h3 className="font-heading text-3xl text-primary mb-4">
                    {service.serviceName}
                  </h3>
                  <p className="font-paragraph text-base text-secondary mb-6">
                    {service.shortDescription}
                  </p>
                  {service.detailedDescription && (
                    <p className="font-paragraph text-base text-foreground mb-6">
                      {service.detailedDescription}
                    </p>
                  )}
                  {service.callToActionUrl && (
                    <a 
                      href={service.callToActionUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <button className="bg-transparent text-foreground border border-foreground rounded px-6 py-3 font-paragraph text-base hover:bg-foreground hover:text-primary-foreground transition-colors">
                        Learn More
                      </button>
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="bg-white">
                <Image 
                  src="https://static.wixstatic.com/media/e86273_b5d7ebb7a8d9429594ddcfc394bacfd5~mv2.png?originWidth=576&originHeight=384"
                  alt="Food sector consulting"
                  className="w-full h-[400px] object-cover mb-8"
                  width={600}
                />
                <h3 className="font-heading text-3xl text-primary mb-4">
                  Event Planning & Production
                </h3>
                <p className="font-paragraph text-base text-secondary mb-6">
                  Comprehensive event planning services for food-focused experiences.
                </p>
                <p className="font-paragraph text-base text-foreground mb-6">
                  From intimate chef's table dinners to large-scale food festivals, we handle every detail with precision and creativity. Our team manages venue selection, vendor coordination, menu development, and on-site execution to ensure seamless events.
                </p>
              </div>
              
              <div className="bg-white">
                <Image 
                  src="https://static.wixstatic.com/media/e86273_5ae679c2437a4e85b804ab66d33a1fb7~mv2.png?originWidth=576&originHeight=384"
                  alt="Food sector strategy"
                  className="w-full h-[400px] object-cover mb-8"
                  width={600}
                />
                <h3 className="font-heading text-3xl text-primary mb-4">
                  Strategic Consulting
                </h3>
                <p className="font-paragraph text-base text-secondary mb-6">
                  Expert guidance for food businesses and culinary ventures.
                </p>
                <p className="font-paragraph text-base text-foreground mb-6">
                  We provide strategic consulting for restaurants, food brands, and culinary entrepreneurs. Our services include market analysis, brand positioning, partnership development, and growth strategies tailored to the unique challenges of the food sector.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
