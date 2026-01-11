import { useEffect, useState } from 'react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Services } from '@/entities';
import { Palette, Building2, Users, Lightbulb, Award, Compass } from 'lucide-react';

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
      <section className="py-12">
        <div className="max-w-[100rem] mx-auto px-12">
          <div className="text-center mb-20">
            <h1 className="font-heading text-6xl text-primary mb-8">
              Art Advisory Services
            </h1>
            <p className="font-paragraph text-xl text-secondary max-w-3xl mx-auto">
              Expert guidance in building, managing, and appreciating distinguished art collections.
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
                Our Philosophy
              </h2>
              <p className="font-paragraph text-base text-foreground mb-6">
                At Haute Services, we believe that art is a transformative force that enriches lives, inspires creativity, and connects us to our shared humanity. Our art advisory practice is rooted in authenticity, expertise, and a deep commitment to helping clients build meaningful collections that reflect their values and vision.
              </p>
              <p className="font-paragraph text-base text-foreground mb-6">
                We approach each client relationship with personalized attention, combining market knowledge with curatorial insight. Whether you're a seasoned collector, a corporate institution, or a first-time buyer, we provide guidance tailored to your unique goals and aesthetic preferences.
              </p>
              <p className="font-paragraph text-base text-foreground">
                Our mission is to demystify the art world and empower our clients to make informed, confident decisions about their collections.
              </p>
            </div>
            
            <div>
              <Image 
                src="https://static.wixstatic.com/media/e86273_73c11384c1d94272ad8f58707a5d4de4~mv2.png?originWidth=640&originHeight=576"
                alt="Art advisory consultation"
                className="w-full h-[600px] object-cover"
                width={700}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="py-32">
        <div className="max-w-[100rem] mx-auto px-12">
          <h2 className="font-heading text-5xl text-primary text-center mb-20">
            Services We Offer
          </h2>
          
          <div className="grid grid-cols-2 gap-12 mb-20">
            <div className="bg-white p-8 border border-gray-200">
              <h4 className="font-heading text-2xl text-primary mb-4 flex items-center gap-3">
                <Palette size={24} className="text-gold-accent" />
                Collection Building
              </h4>
              <p className="font-paragraph text-base text-foreground mb-4">
                Strategic acquisition and collection development services tailored to your vision and goals.
              </p>
              <p className="font-paragraph text-base text-secondary">
                We identify and acquire works that align with your aesthetic and investment objectives. Our services include market research, artist due diligence, negotiation, and transaction management to ensure every acquisition is both meaningful and strategically sound.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <h4 className="font-heading text-2xl text-primary mb-4 flex items-center gap-3">
                <Award size={24} className="text-gold-accent" />
                Collection Management
              </h4>
              <p className="font-paragraph text-base text-foreground mb-4">
                Comprehensive care and management of art collections.
              </p>
              <p className="font-paragraph text-base text-secondary">
                We provide cataloging, conservation coordination, insurance valuation, and installation planning. Our collection management services ensure your works are properly documented, maintained, and displayed to preserve their value and maximize their impact.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <h4 className="font-heading text-2xl text-primary mb-4 flex items-center gap-3">
                <Building2 size={24} className="text-gold-accent" />
                Corporate Art Programs
              </h4>
              <p className="font-paragraph text-base text-foreground mb-4">
                Specialized services for building impactful corporate art collections.
              </p>
              <p className="font-paragraph text-base text-secondary">
                We work with corporations to develop art programs that reflect brand identity, enhance workplace environments, and demonstrate cultural commitment. From acquisition to installation, we manage all aspects of corporate art initiatives.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <h4 className="font-heading text-2xl text-primary mb-4 flex items-center gap-3">
                <Compass size={24} className="text-gold-accent" />
                Market Guidance
              </h4>
              <p className="font-paragraph text-base text-foreground mb-4">
                Expert insights into art market trends and opportunities.
              </p>
              <p className="font-paragraph text-base text-secondary">
                We provide clients with comprehensive market analysis, artist trajectory assessments, and investment guidance. Our deep market knowledge helps you navigate the art world with confidence and make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Art Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-[100rem] mx-auto px-12">
          <h2 className="font-heading text-5xl text-primary text-center mb-20">
            Types of Art We Work With
          </h2>
          
          <div className="grid grid-cols-3 gap-12">
            <div className="text-center">
              <Image 
                src="https://static.wixstatic.com/media/e86273_064b2c5dfbbc454c81169e485d68334b~mv2.png?originWidth=384&originHeight=256"
                alt="Contemporary art"
                className="w-full h-[300px] object-cover mb-6"
                width={400}
              />
              <h3 className="font-heading text-2xl text-primary mb-4">
                Contemporary Art
              </h3>
              <p className="font-paragraph text-base text-secondary">
                Deep knowledge of emerging and established contemporary artists across all mediums—painting, sculpture, photography, video, and installation art.
              </p>
            </div>
            
            <div className="text-center">
              <Image 
                src="https://static.wixstatic.com/media/e86273_22c0e81315584117a9828da17f85810d~mv2.png?originWidth=384&originHeight=256"
                alt="Modern masters art"
                className="w-full h-[300px] object-cover mb-6"
                width={400}
              />
              <h3 className="font-heading text-2xl text-primary mb-4">
                Modern Masters
              </h3>
              <p className="font-paragraph text-base text-secondary">
                Expertise in 20th century art movements and blue-chip modern works. We specialize in works by established masters and significant modernist movements.
              </p>
            </div>
            
            <div className="text-center">
              <Image 
                src="https://static.wixstatic.com/media/e86273_deae7d4b345d410cab1902624993eb03~mv2.png?originWidth=384&originHeight=256"
                alt="Emerging artists"
                className="w-full h-[300px] object-cover mb-6"
                width={400}
              />
              <h3 className="font-heading text-2xl text-primary mb-4">
                Emerging Talent
              </h3>
              <p className="font-paragraph text-base text-secondary">
                We identify and support emerging artists with significant potential. Our network includes galleries and institutions that showcase the next generation of artistic voices.
              </p>
            </div>

            <div className="text-center">
              <Image 
                src="https://static.wixstatic.com/media/e86273_d12dee4bcf434d1db2a4d643e160557f~mv2.png?originWidth=384&originHeight=256"
                alt="Photography and prints"
                className="w-full h-[300px] object-cover mb-6"
                width={400}
              />
              <h3 className="font-heading text-2xl text-primary mb-4">
                Photography & Prints
              </h3>
              <p className="font-paragraph text-base text-secondary">
                Expertise in fine art photography and limited edition prints. We work with collectors to build significant photography collections and understand print markets.
              </p>
            </div>

            <div className="text-center">
              <Image 
                src="https://static.wixstatic.com/media/e86273_f3bb5930b76e4d3fbca1981070c188b0~mv2.png?originWidth=384&originHeight=256"
                alt="Decorative and design arts"
                className="w-full h-[300px] object-cover mb-6"
                width={400}
              />
              <h3 className="font-heading text-2xl text-primary mb-4">
                Decorative Arts & Design
              </h3>
              <p className="font-paragraph text-base text-secondary">
                Knowledge of decorative arts, design objects, and functional art. We help collectors appreciate the intersection of aesthetics and craftsmanship.
              </p>
            </div>

            <div className="text-center">
              <Image 
                src="https://static.wixstatic.com/media/e86273_c4da59bb0af44b8093dcddb968b0ca37~mv2.png?originWidth=384&originHeight=256"
                alt="Cultural and historical artifacts"
                className="w-full h-[300px] object-cover mb-6"
                width={400}
              />
              <h3 className="font-heading text-2xl text-primary mb-4">
                Cultural Artifacts
              </h3>
              <p className="font-paragraph text-base text-secondary">
                Guidance on culturally significant works and historical artifacts. We ensure ethical acquisition and proper stewardship of culturally important pieces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spaces We Work With Section */}
      <section className="py-32">
        <div className="max-w-[100rem] mx-auto px-12">
          <h2 className="font-heading text-5xl text-primary text-center mb-20">
            Spaces We Work With
          </h2>
          
          <div className="grid grid-cols-2 gap-12">
            <div className="bg-white p-8 border border-gray-200">
              <h4 className="font-heading text-2xl text-primary mb-4 flex items-center gap-3">
                <Building2 size={24} className="text-gold-accent" />
                Museums & Institutions
              </h4>
              <p className="font-paragraph text-base text-foreground">
                We collaborate with museums, galleries, and cultural institutions on acquisitions, exhibitions, and collection development. Our relationships with institutional partners provide access to significant works and curatorial expertise.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <h4 className="font-heading text-2xl text-primary mb-4 flex items-center gap-3">
                <Users size={24} className="text-gold-accent" />
                Private Collections
              </h4>
              <p className="font-paragraph text-base text-foreground">
                We work with private collectors to build, manage, and evolve their collections. Our personalized approach ensures each collection reflects the collector's vision and values.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <h4 className="font-heading text-2xl text-primary mb-4 flex items-center gap-3">
                <Award size={24} className="text-gold-accent" />
                Galleries & Auction Houses
              </h4>
              <p className="font-paragraph text-base text-foreground">
                Our extensive network includes leading galleries, auction houses, and art dealers worldwide. These relationships provide clients with access to exceptional works and market insights.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <h4 className="font-heading text-2xl text-primary mb-4 flex items-center gap-3">
                <Lightbulb size={24} className="text-gold-accent" />
                Artist Studios & Foundations
              </h4>
              <p className="font-paragraph text-base text-foreground">
                We maintain direct relationships with artists' studios and artist foundations, providing clients with direct access to works and insights into artistic practice and development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32">
        <div className="max-w-[100rem] mx-auto px-12">
          <h2 className="font-heading text-5xl text-primary text-center mb-20">
            Our Art Advisory Services
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
                  src="https://static.wixstatic.com/media/e86273_478c02f8740c4b7cbd03ae758ee73af2~mv2.png?originWidth=576&originHeight=384"
                  alt="Art collection building"
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
                  src="https://static.wixstatic.com/media/e86273_dda7644fcbc94c70b9aa2dfd2ecb93df~mv2.png?originWidth=576&originHeight=384"
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

              <div className="bg-white">
                <Image 
                  src="https://static.wixstatic.com/media/e86273_9261dc49cc0741f3b78baa424c15093a~mv2.png?originWidth=576&originHeight=384"
                  alt="Exhibition and curation services"
                  className="w-full h-[400px] object-cover mb-8"
                  width={600}
                />
                <h3 className="font-heading text-3xl text-primary mb-4">
                  Exhibition & Curation
                </h3>
                <p className="font-paragraph text-base text-secondary mb-6">
                  Professional curation and exhibition planning services.
                </p>
                <p className="font-paragraph text-base text-foreground mb-6">
                  We design and curate exhibitions that tell compelling stories and engage audiences. From concept development to installation, we manage all aspects of exhibition planning, ensuring your collection is presented in the most impactful way.
                </p>
              </div>

              <div className="bg-white">
                <Image 
                  src="https://static.wixstatic.com/media/e86273_d4cdf21dfde24380bbdf45d69390b78a~mv2.png?originWidth=576&originHeight=384"
                  alt="Art valuation and appraisal"
                  className="w-full h-[400px] object-cover mb-8"
                  width={600}
                />
                <h3 className="font-heading text-3xl text-primary mb-4">
                  Valuation & Appraisal
                </h3>
                <p className="font-paragraph text-base text-secondary mb-6">
                  Expert valuation and appraisal services for insurance and estate purposes.
                </p>
                <p className="font-paragraph text-base text-foreground mb-6">
                  We provide comprehensive valuations based on current market conditions and comparable sales. Our appraisals are recognized by insurance companies and estate planners, ensuring your collection is properly valued for all purposes.
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
            Why Choose Haute Services
          </h2>
          
          <div className="grid grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="font-heading text-2xl text-primary mb-4">
                Deep Expertise
              </h3>
              <p className="font-paragraph text-base text-secondary">
                Our team brings decades of combined experience in art advisory, curation, and market analysis across all periods and mediums.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="font-heading text-2xl text-primary mb-4">
                Extensive Network
              </h3>
              <p className="font-paragraph text-base text-secondary">
                We maintain relationships with galleries, auction houses, artists, institutions, and collectors worldwide, providing unparalleled access to exceptional works.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="font-heading text-2xl text-primary mb-4">
                Personalized Approach
              </h3>
              <p className="font-paragraph text-base text-secondary">
                We take time to understand your goals, preferences, and values, providing guidance tailored specifically to your unique situation and vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
