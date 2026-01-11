import { useEffect, useState } from 'react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Services } from '@/entities';
import { Palette, Building2, Users, Lightbulb, Award, Compass, Mail, Send } from 'lucide-react';

export default function ArtPage() {
  const [artServices, setArtServices] = useState<Services[]>([]);
  const [email, setEmail] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    async function loadServices() {
      const { items } = await BaseCrudService.getAll<Services>('services');
      const art = items.filter(s => s.serviceCategory === 'Art');
      setArtServices(art);
    }
    loadServices();
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    setTimeout(() => {
      setSubmitStatus('success');
      setEmail('');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 500);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    setTimeout(() => {
      setSubmitStatus('success');
      setContactEmail('');
      setContactMessage('');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Opening Quote Section */}
      <section className="py-24 border-b border-gray-200">
        <div className="max-w-[100rem] mx-auto px-12">
          <div className="text-center">
            <p className="font-heading text-5xl lg:text-6xl text-primary italic leading-tight max-w-4xl mx-auto">
              "Art is not what you see, but what you make others see."
            </p>
            <p className="font-paragraph text-lg text-secondary mt-6">
              — Edgar Degas
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section with Gray Background */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-[100rem] mx-auto px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-5xl text-primary mb-8">
              Our Philosophy
            </h2>
            <p className="font-paragraph text-lg text-foreground mb-8 leading-relaxed">
              At Haute Services, we believe that art is a transformative force that enriches lives, inspires creativity, and connects us to our shared humanity. Our art advisory practice is rooted in authenticity, expertise, and a deep commitment to helping clients build meaningful collections that reflect their values and vision.
            </p>
            <p className="font-paragraph text-lg text-foreground mb-12 leading-relaxed">
              We approach each client relationship with personalized attention, combining market knowledge with curatorial insight. Whether you're a seasoned collector, a corporate institution, or a first-time buyer, we provide guidance tailored to your unique goals and aesthetic preferences.
            </p>
            <div className="w-12 h-px bg-gold-accent mx-auto mb-12" />
            <p className="font-paragraph text-base text-secondary">
              Our mission is to demystify the art world and empower our clients to make informed, confident decisions about their collections.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="py-20">
        <div className="max-w-[100rem] mx-auto px-12">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-heading text-3xl text-primary text-center mb-8">
              Stay Updated on Art Trends
            </h3>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-3 border border-gray-300 focus:border-gold-accent focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={submitStatus === 'loading'}
                className="px-8 py-3 bg-gold-accent text-secondary-foreground hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-2"
              >
                <Mail size={18} />
                Subscribe
              </button>
            </form>
            {submitStatus === 'success' && (
              <p className="text-center text-gold-accent mt-4 font-paragraph">
                Thank you for subscribing!
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Art Advisory Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[100rem] mx-auto px-12">
          <div className="grid grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="font-heading text-4xl text-primary mb-8">
                Our Approach
              </h2>
              <p className="font-paragraph text-base text-foreground mb-6">
                We combine deep market knowledge with curatorial insight to create collections that are both strategically sound and aesthetically meaningful. Our personalized approach ensures that every acquisition reflects your unique vision and values.
              </p>
              <p className="font-paragraph text-base text-foreground">
                From emerging contemporary artists to established modern masters, we provide comprehensive guidance across all periods and mediums.
              </p>
            </div>
            
            <div>
              <Image 
                src="https://static.wixstatic.com/media/e86273_7a41a60453714090bacaf707d2c53906~mv2.png?originWidth=640&originHeight=576"
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
            Our Services
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
                  src="https://static.wixstatic.com/media/e86273_59bcb9acc97741338c7c0cae8fb10323~mv2.png?originWidth=576&originHeight=384"
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
                  src="https://static.wixstatic.com/media/e86273_efc4aec961cb4972a28283597cf1f662~mv2.png?originWidth=576&originHeight=384"
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
                  src="https://static.wixstatic.com/media/e86273_ff32664b46b049fb9955f331e036f25a~mv2.png?originWidth=576&originHeight=384"
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
                  src="https://static.wixstatic.com/media/e86273_dff03bcb748b4d99ade1f82f4d8faa48~mv2.png?originWidth=576&originHeight=384"
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

      {/* Masonry Grid of Art Images */}
      <section className="py-32">
        <div className="max-w-[100rem] mx-auto px-12">
          <h2 className="font-heading text-5xl text-primary text-center mb-20">
            Our Collection
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Image 1 */}
            <div className="relative h-[60vh] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Image 
                src="https://static.wixstatic.com/media/e86273_ef52a94d65e04eb5baba36492d97c2c4~mv2.png?originWidth=576&originHeight=512"
                alt="Contemporary art piece"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                width={600}
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
            </div>

            {/* Image 2 */}
            <div className="relative h-[60vh] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Image 
                src="https://static.wixstatic.com/media/e86273_363dd37680ec4558a9be7c69722f88c3~mv2.png?originWidth=576&originHeight=512"
                alt="Modern art installation"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                width={600}
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
            </div>

            {/* Image 3 */}
            <div className="relative h-[60vh] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Image 
                src="https://static.wixstatic.com/media/e86273_53f7aabafa704ecfbaf8b5de9b86a6d1~mv2.png?originWidth=576&originHeight=512"
                alt="Abstract artwork"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                width={600}
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
            </div>

            {/* Image 4 */}
            <div className="relative h-[60vh] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Image 
                src="https://static.wixstatic.com/media/e86273_9c63793f9dc84320a9bc773d9cb44836~mv2.png?originWidth=576&originHeight=512"
                alt="Sculptural work"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                width={600}
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
            </div>

            {/* Image 5 */}
            <div className="relative h-[60vh] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Image 
                src="https://static.wixstatic.com/media/e86273_54073ef0a80d47d39fcdfe1283821701~mv2.png?originWidth=576&originHeight=512"
                alt="Photography artwork"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                width={600}
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
            </div>

            {/* Image 6 */}
            <div className="relative h-[60vh] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Image 
                src="https://static.wixstatic.com/media/e86273_74c9b196b37b4ddf8324ae6e852626e5~mv2.png?originWidth=576&originHeight=512"
                alt="Mixed media piece"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                width={600}
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
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
                Museums & Institutions
              </h4>
              <p className="font-paragraph text-base text-foreground">
                We collaborate with museums, galleries, and cultural institutions on acquisitions, exhibitions, and collection development. Our relationships with institutional partners provide access to significant works and curatorial expertise.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <h4 className="font-heading text-2xl text-primary mb-4 flex items-center gap-3">
                Private Collections
              </h4>
              <p className="font-paragraph text-base text-foreground">
                We work with private collectors to build, manage, and evolve their collections. Our personalized approach ensures each collection reflects the collector's vision and values.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <h4 className="font-heading text-2xl text-primary mb-4 flex items-center gap-3">
                Galleries & Auction Houses
              </h4>
              <p className="font-paragraph text-base text-foreground">
                Our extensive network includes leading galleries, auction houses, and art dealers worldwide. These relationships provide clients with access to exceptional works and market insights.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <h4 className="font-heading text-2xl text-primary mb-4 flex items-center gap-3">
                Artist Studios & Foundations
              </h4>
              <p className="font-paragraph text-base text-foreground">
                We maintain direct relationships with artists' studios and artist foundations, providing clients with direct access to works and insights into artistic practice and development.
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

      {/* Why Choose Haute Services Section */}
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

      {/* Contact Form Section */}
      <section className="py-32">
        <div className="max-w-2xl mx-auto px-12">
          <h2 className="font-heading text-5xl text-primary text-center mb-8">
            Get in Touch
          </h2>
          <p className="font-paragraph text-lg text-secondary text-center mb-16">
            Ready to discuss your art collection or explore our advisory services? Contact us today.
          </p>

          <form onSubmit={handleContactSubmit} className="space-y-6">
            <div>
              <label className="block font-paragraph text-base text-primary mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                required
                className="w-full px-6 py-3 border border-gray-300 focus:border-gold-accent focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block font-paragraph text-base text-primary mb-2">
                Message
              </label>
              <textarea
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                required
                rows={6}
                className="w-full px-6 py-3 border border-gray-300 focus:border-gold-accent focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your art interests or collection goals..."
              />
            </div>

            <button
              type="submit"
              disabled={submitStatus === 'loading'}
              className="w-full px-8 py-4 bg-gold-accent text-secondary-foreground hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2 font-paragraph text-base"
            >
              <Send size={18} />
              Send Message
            </button>

            {submitStatus === 'success' && (
              <p className="text-center text-gold-accent font-paragraph">
                Thank you for reaching out! We'll be in touch soon.
              </p>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
