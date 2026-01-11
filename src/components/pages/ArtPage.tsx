import { useEffect, useState } from 'react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Services } from '@/entities';

export default function ArtPage() {
  const [artServices, setArtServices] = useState<Services[]>([]);

  useEffect(() => {
    async function loadServices() {
      const { items } = await BaseCrudService.getAll<Services>('services');
      const art = items.filter(s => s.serviceCategory === 'Art');
      setArtServices(art);
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
              Art Advisory Services
            </h1>
            <p className="font-paragraph text-xl text-secondary max-w-3xl mx-auto">
              Expert guidance in building and managing distinguished art collections.
            </p>
          </div>
        </div>
      </section>

      {/* Art Advisory Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[100rem] mx-auto px-12">
          <div className="grid grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="font-heading text-4xl text-primary mb-8">
                Curated Art Expertise
              </h2>
              <p className="font-paragraph text-base text-foreground mb-6">
                Our art advisory services provide comprehensive support for collectors, institutions, and corporations seeking to build meaningful art collections. We combine deep market knowledge with a passion for artistic excellence.
              </p>
              <p className="font-paragraph text-base text-foreground mb-6">
                Whether you're a seasoned collector or just beginning your journey, we offer personalized guidance tailored to your aesthetic preferences, investment goals, and cultural interests.
              </p>
              <p className="font-paragraph text-base text-foreground">
                Our network spans galleries, auction houses, artists' studios, and private collections worldwide, ensuring access to exceptional works across all periods and styles.
              </p>
            </div>
            
            <div>
              <Image 
                src="https://static.wixstatic.com/media/e86273_9812fd2bd4cf465db577ddb28a853fba~mv2.png?originWidth=640&originHeight=576"
                alt="Art advisory consultation"
                className="w-full h-[600px] object-cover"
                width={700}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32">
        <div className="max-w-[100rem] mx-auto px-12">
          <h2 className="font-heading text-5xl text-primary text-center mb-20">
            Our Art Services
          </h2>
          
          {artServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {artServices.map((service) => (
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
                  src="https://static.wixstatic.com/media/e86273_d2d3fe6dee804a25b6c04c4f3f4f1c21~mv2.png?originWidth=576&originHeight=384"
                  alt="Art acquisition services"
                  className="w-full h-[400px] object-cover mb-8"
                  width={600}
                />
                <h3 className="font-heading text-3xl text-primary mb-4">
                  Collection Building
                </h3>
                <p className="font-paragraph text-base text-secondary mb-6">
                  Strategic acquisition and collection development services.
                </p>
                <p className="font-paragraph text-base text-foreground mb-6">
                  We work closely with clients to identify and acquire works that align with their vision and goals. Our services include market research, artist due diligence, negotiation, and transaction management. We ensure every acquisition is both aesthetically meaningful and strategically sound.
                </p>
              </div>
              
              <div className="bg-white">
                <Image 
                  src="https://static.wixstatic.com/media/e86273_5524011bf0d94160bb65bfb021c68290~mv2.png?originWidth=576&originHeight=384"
                  alt="Art collection management"
                  className="w-full h-[400px] object-cover mb-8"
                  width={600}
                />
                <h3 className="font-heading text-3xl text-primary mb-4">
                  Collection Management
                </h3>
                <p className="font-paragraph text-base text-secondary mb-6">
                  Comprehensive care and management of art collections.
                </p>
                <p className="font-paragraph text-base text-foreground mb-6">
                  Our collection management services include cataloging, conservation coordination, insurance valuation, and installation planning. We ensure your collection is properly documented, maintained, and displayed to preserve its value and enhance its impact.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-[100rem] mx-auto px-12">
          <h2 className="font-heading text-5xl text-primary text-center mb-20">
            Our Expertise
          </h2>
          
          <div className="grid grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="font-heading text-2xl text-primary mb-4">
                Contemporary Art
              </h3>
              <p className="font-paragraph text-base text-secondary">
                Deep knowledge of emerging and established contemporary artists across all mediums.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="font-heading text-2xl text-primary mb-4">
                Modern Masters
              </h3>
              <p className="font-paragraph text-base text-secondary">
                Expertise in 20th century art movements and blue-chip modern works.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="font-heading text-2xl text-primary mb-4">
                Corporate Collections
              </h3>
              <p className="font-paragraph text-base text-secondary">
                Specialized services for building impactful corporate art programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
