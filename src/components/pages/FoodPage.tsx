import { useEffect, useState } from 'react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Services } from '@/entities';
import { ExternalLink, Award, Globe, Users, Sparkles } from 'lucide-react';

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
              Culinary Events
            </h1>
            <p className="font-paragraph text-xl text-secondary max-w-3xl mx-auto">
              Creating exceptional culinary experiences and providing expert consultancy for the food sector.
            </p>
          </div>
        </div>
      </section>

      {/* About Haute Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[100rem] mx-auto px-12">
          <div className="grid grid-cols-2 gap-24 items-center">
            <div>
              <Image 
                src="https://static.wixstatic.com/media/e86273_ea10230387b3448f8d3a6e1d2b667039~mv2.png?originWidth=640&originHeight=576"
                alt="Haute Services culinary expertise"
                className="w-full h-[600px] object-cover"
                width={700}
              />
            </div>
            
            <div>
              <h2 className="font-heading text-4xl text-primary mb-8">
                About Haute Services
              </h2>
              <p className="font-paragraph text-base text-foreground mb-6">
                Haute Services is a boutique consultancy dedicated to creating exceptional culinary experiences and providing strategic guidance to the food sector. With deep industry connections and a passion for excellence, we orchestrate events and initiatives that celebrate the art of gastronomy.
              </p>
              <p className="font-paragraph text-base text-foreground mb-6">
                Our approach combines culinary expertise with creative vision, ensuring every event we produce is memorable, impactful, and aligned with our clients' objectives. Whether you're seeking to launch a new food brand, host an exclusive culinary gathering, or explore innovative dining concepts, we bring the expertise and connections to make it exceptional.
              </p>
              <p className="font-paragraph text-base text-foreground">
                We believe that food is more than sustenance—it's a medium for connection, culture, and creativity. This philosophy guides every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Food For Thought Fest Section */}
      <section className="py-32">
        <div className="max-w-[100rem] mx-auto px-12">
          <div className="mb-20">
            <h2 className="font-heading text-5xl text-primary mb-8">
              Food For Thought Fest
            </h2>
            <p className="font-paragraph text-lg text-secondary max-w-3xl">
              Our flagship initiative celebrating culinary excellence, innovation, and the intersection of food with culture and creativity.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-24 items-start mb-20">
            <div>
              <Image 
                src="https://static.wixstatic.com/media/e86273_8be9805e88524811816df8ccd741b923~mv2.png?originWidth=640&originHeight=448"
                alt="Food For Thought Fest event"
                className="w-full h-[500px] object-cover mb-8"
                width={700}
              />
            </div>
            
            <div>
              <h3 className="font-heading text-3xl text-primary mb-6">
                Festival Overview
              </h3>
              <p className="font-paragraph text-base text-foreground mb-6">
                Food For Thought Fest is an annual celebration of culinary excellence that brings together renowned chefs, food artisans, innovators, and enthusiasts from around the world. The festival is a platform for exploring contemporary cuisine, celebrating culinary traditions, and fostering meaningful conversations about the future of food.
              </p>
              <p className="font-paragraph text-base text-foreground mb-6">
                Each edition features interactive demonstrations, exclusive tastings, panel discussions with industry leaders, and immersive experiences that engage all the senses. It's where innovation meets tradition, and where food becomes art.
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

          {/* Festival Details Grid */}
          <div className="grid grid-cols-2 gap-12 mb-20">
            <div className="bg-white p-8 border border-gray-200">
              <h4 className="font-heading text-2xl text-primary mb-4 flex items-center gap-3">
                <Globe size={24} className="text-gold-accent" />
                Global Reach
              </h4>
              <p className="font-paragraph text-base text-foreground">
                Food For Thought Fest takes place across multiple geographies, bringing the festival experience to culinary capitals worldwide. From intimate regional gatherings to large-scale international events, we create localized experiences that celebrate global culinary diversity.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <h4 className="font-heading text-2xl text-primary mb-4 flex items-center gap-3">
                <Sparkles size={24} className="text-gold-accent" />
                Festival Format
              </h4>
              <p className="font-paragraph text-base text-foreground">
                The festival features a diverse program including chef demonstrations, masterclasses, wine and beverage pairings, pop-up dining experiences, artisan markets, and thought-provoking panel discussions. Each element is carefully curated to inspire, educate, and entertain.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <h4 className="font-heading text-2xl text-primary mb-4 flex items-center gap-3">
                <Users size={24} className="text-gold-accent" />
                Participants & Community
              </h4>
              <p className="font-paragraph text-base text-foreground">
                We collaborate with Michelin-starred chefs, emerging culinary talents, food writers, restaurateurs, and passionate food enthusiasts. The festival brings together a diverse community united by their appreciation for exceptional food and meaningful culinary experiences.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <h4 className="font-heading text-2xl text-primary mb-4 flex items-center gap-3">
                <Award size={24} className="text-gold-accent" />
                Media & Recognition
              </h4>
              <p className="font-paragraph text-base text-foreground">
                Food For Thought Fest has garnered significant media coverage from leading food publications, lifestyle media, and international press. The festival is recognized as a premier platform for culinary innovation and cultural exchange in the food sector.
              </p>
            </div>
          </div>

          {/* Festival Purpose */}
          <div className="bg-gray-50 p-12">
            <h3 className="font-heading text-3xl text-primary mb-6">
              Our Purpose
            </h3>
            <p className="font-paragraph text-base text-foreground mb-6">
              Food For Thought Fest exists to celebrate the transformative power of food. We believe that culinary experiences can inspire creativity, foster cultural understanding, and create lasting connections between people. Through our festival, we aim to:
            </p>
            <ul className="space-y-4">
              <li className="font-paragraph text-base text-foreground flex gap-3">
                <span className="text-gold-accent font-bold">•</span>
                Showcase culinary innovation and excellence from around the world
              </li>
              <li className="font-paragraph text-base text-foreground flex gap-3">
                <span className="text-gold-accent font-bold">•</span>
                Create platforms for meaningful dialogue about food, sustainability, and culture
              </li>
              <li className="font-paragraph text-base text-foreground flex gap-3">
                <span className="text-gold-accent font-bold">•</span>
                Support emerging culinary talent and foster community within the food sector
              </li>
              <li className="font-paragraph text-base text-foreground flex gap-3">
                <span className="text-gold-accent font-bold">•</span>
                Celebrate the intersection of food, art, and culture
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32">
        <div className="max-w-[100rem] mx-auto px-12">
          <h2 className="font-heading text-5xl text-primary text-center mb-20">
            Our Culinary Services
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
                  src="https://static.wixstatic.com/media/e86273_bbdc4f94c24a487eb8e22f469b746492~mv2.png?originWidth=576&originHeight=384"
                  alt="Culinary event planning"
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
                  From intimate chef's table dinners to large-scale culinary festivals, we handle every detail with precision and creativity. Our team manages venue selection, vendor coordination, menu development, chef partnerships, and on-site execution to ensure seamless, memorable events.
                </p>
              </div>
              
              <div className="bg-white">
                <Image 
                  src="https://static.wixstatic.com/media/e86273_00481b5f52534364a7df58868d96b875~mv2.png?originWidth=576&originHeight=384"
                  alt="Culinary strategy consulting"
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
                  We provide strategic consulting for restaurants, food brands, and culinary entrepreneurs. Our services include market analysis, brand positioning, partnership development, and growth strategies tailored to the unique challenges and opportunities of the food sector.
                </p>
              </div>

              <div className="bg-white">
                <Image 
                  src="https://static.wixstatic.com/media/e86273_0bc1b1afa05c49369b4ab8cdd1d3bf56~mv2.png?originWidth=576&originHeight=384"
                  alt="Lifestyle event experiences"
                  className="w-full h-[400px] object-cover mb-8"
                  width={600}
                />
                <h3 className="font-heading text-3xl text-primary mb-4">
                  Lifestyle Event Experiences
                </h3>
                <p className="font-paragraph text-base text-secondary mb-6">
                  Curated experiences that celebrate food, culture, and community.
                </p>
                <p className="font-paragraph text-base text-foreground mb-6">
                  We design and execute immersive lifestyle events that go beyond traditional dining. From food and wine festivals to culinary art installations and experiential dining concepts, we create moments that inspire, educate, and delight.
                </p>
              </div>

              <div className="bg-white">
                <Image 
                  src="https://static.wixstatic.com/media/e86273_398cdf4e3d4844e9aad7b8558dae840d~mv2.png?originWidth=576&originHeight=384"
                  alt="Chef and artisan partnerships"
                  className="w-full h-[400px] object-cover mb-8"
                  width={600}
                />
                <h3 className="font-heading text-3xl text-primary mb-4">
                  Chef & Artisan Partnerships
                </h3>
                <p className="font-paragraph text-base text-secondary mb-6">
                  Connecting brands with culinary talent and food artisans.
                </p>
                <p className="font-paragraph text-base text-foreground mb-6">
                  Our extensive network of Michelin-starred chefs, emerging culinary talents, and artisan food producers allows us to facilitate meaningful collaborations. We manage partnerships that elevate brands and create authentic culinary experiences.
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
