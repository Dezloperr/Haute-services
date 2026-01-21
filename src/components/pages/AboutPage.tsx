import { useEffect, useState } from 'react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactDialog from '@/components/ContactDialog';
import { BaseCrudService } from '@/integrations';
import { ClientCollaborations } from '@/entities';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const [clients, setClients] = useState<ClientCollaborations[]>([]);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const { items: clientItems } = await BaseCrudService.getAll<ClientCollaborations>('clientcollaborations');
        setClients(clientItems);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  const founders = [
    {
      name: 'Manish Kumar Baheti',
      title: 'Managing Director & Co-Founder',
      bio: `A seasoned hotelier and passionate art collector, Maneesh Baheti comes from a family of art connoisseurs. He holds a diploma in Hotel Management and an MBA, and trained with The Oberoi Group, later serving as General Manager at Trident Hilton, Bhubaneswar and Director of Marketing at Hyatt Regency Delhi.

He founded SAAG (South Asian Association for Gastronomy) and has taught hospitality at institutions such as NIFT and FHRAI. Baheti has been featured as Guest of Honour and Chief Guest at major art events, with notable appearances including:
• Times of India feature on his art collection
• Zee Business interview on "Art as an Alternative Asset Class in India"

He is passionate about food policy, regional gastronomy, and building inclusive communities through culture.`,
      image: 'https://static.wixstatic.com/media/e86273_ff9c35720df4457592eb6cfe677899db~mv2.png?originWidth=576&originHeight=448'
    },
    {
      name: 'Sonali Anand Baheti',
      title: 'Director & Co-Founder',
      bio: `Sonali holds dual master's degrees: one in Tourism & Hospitality Management (UK) and another in Good Governance (France). With 10+ years of experience across hospitality, software, and private banking, she formerly served as Country Sales Manager at FCS Computer Systems (Malaysia) and has worked with the United Nations as a consultant.

She brings a global strategic lens to business development and manages cross-sector client relationships, operations, and international partnerships at Haute Services.`,
      image: 'https://static.wixstatic.com/media/e86273_f1f445fa895f4d098464c32f8a98ab65~mv2.png?originWidth=576&originHeight=448'
    }
  ];

  const milestones = [
    { year: '2009', event: 'Haute Services founded' },
    { year: '2014', event: 'SAAG established' },
    { year: '2015–2024', event: 'Food For Thought Fest (7 editions)' },
    { year: '2019–2024', event: 'Art exhibitions & curations across Delhi, Gurgaon, Bikaner House, IHC' }
  ];

  const clientCategories = [
    {
      category: 'Luxury Hotels & Resorts',
      clients: ['Trident', 'Taj', 'Sinclairs', 'Crowne Plaza']
    },
    {
      category: 'Embassies & Cultural Institutions',
      clients: ['Indonesia', 'Sri Lanka', 'Nepal', 'Bhutan', 'Afghanistan']
    },
    {
      category: 'Art Collectors & Galleries',
      clients: ['Delhi Art Gallery', 'Wrap Art & Design']
    },
    {
      category: 'Corporate Partners',
      clients: ['GMR Aerocity', 'Four Seasons Damascus']
    },
    {
      category: 'Fashion & Design Houses',
      clients: ['Shantanu & Nikhil']
    }
  ];


  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full max-w-[120rem] mx-auto px-4 sm:px-6 border-b lg:px-12 pt-12 sm:pt-32 pb-12 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl flex flex-col items-center"
        >
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-4 sm:mb-6">
            About Haute Services
          </h1>
          <p className="font-paragraph flex flex-col gap-2 text-base sm:text-lg lg:text-xl text-center text-secondary leading-relaxed">
            <span className="italic whitespace-nowrap text-gold-accent/80">Where culinary excellence meets artistic vision.</span> <br /> We are a boutique consultancy specializing in food, art, and hospitality experiences that transcend the ordinary.
          </p>
        </motion.div>
      </section>

      {/* Founders Section */}
      <section className="w-full max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-foreground mb-3 sm:mb-4">
            Our Founders
          </h2>
          <p className="font-paragraph text-sm sm:text-base lg:text-lg text-secondary max-w-3xl">
            Leaders with decades of combined experience in hospitality, art, and global business development.
          </p>
        </motion.div>

        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden ${
                index % 2 === 1 ? 'lg:order-2' : ''
              }`}>
                <Image
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                  width={600}
                />
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-foreground mb-2">
                  {founder.name}
                </h3>
                <p className="font-paragraph text-base sm:text-lg lg:text-xl text-gold-accent mb-4 sm:mb-6">
                  {founder.title}
                </p>
                <div className="font-paragraph text-sm sm:text-base text-secondary leading-relaxed space-y-3 sm:space-y-4 whitespace-pre-line">
                  {founder.bio}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Milestones Section */}
      <section className="w-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-foreground mb-3 sm:mb-4">
              Our Journey
            </h2>
            <p className="font-paragraph text-sm sm:text-base lg:text-lg text-secondary">
              Key milestones that shaped Haute Services
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-5 sm:p-6 rounded-lg border border-gray-200"
              >
                <div className="font-heading text-2xl sm:text-3xl text-gold-accent mb-3">
                  {milestone.year}
                </div>
                <p className="font-paragraph text-sm sm:text-base text-foreground leading-relaxed">
                  {milestone.event}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientele Section */}
      <section className="w-full max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-foreground mb-3 sm:mb-4">
            Clientele & Collaborations
          </h2>
          <p className="font-paragraph text-sm sm:text-base lg:text-lg text-secondary max-w-3xl">
            Trusted by leading organizations across hospitality, culture, art, and design
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {clientCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-5 sm:p-6 rounded-lg border border-gray-200"
            >
              <h3 className="font-heading text-xl sm:text-2xl text-foreground mb-4">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.clients.map((client) => (
                  <li key={client} className="font-paragraph text-sm sm:text-base text-secondary flex items-center">
                    <span className="w-1.5 h-1.5 bg-gold-accent rounded-full mr-3 flex-shrink-0"></span>
                    {client}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CMS Collaborations */}
        <div style={{ minHeight: isLoading ? '200px' : 'auto' }}>
          {isLoading ? null : clients.length > 0 ? (
            <div>
              <h3 className="font-heading text-2xl sm:text-3xl text-foreground mb-6 sm:mb-8">
                Featured Collaborations
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {clients.map((collab, index) => (
                  <motion.div
                    key={collab._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    {collab.clientLogo && (
                      <div className="relative h-20 sm:h-24 mb-4 flex items-center justify-center">
                        <Image
                          src={collab.clientLogo}
                          alt={collab.clientName || 'Client logo'}
                          className="max-h-full w-auto object-contain"
                          width={200}
                        />
                      </div>
                    )}
                    <h4 className="font-heading text-base sm:text-lg lg:text-xl text-foreground mb-2">
                      {collab.clientName}
                    </h4>
                    {collab.projectType && (
                      <p className="font-paragraph text-xs sm:text-sm text-gold-accent mb-2">
                        {collab.projectType}
                      </p>
                    )}
                    {collab.collaborationDescription && (
                      <p className="font-paragraph text-xs sm:text-sm text-secondary leading-relaxed mb-3">
                        {collab.collaborationDescription}
                      </p>
                    )}
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      {collab.collaborationYear && (
                        <span className="font-paragraph text-secondary">
                          {collab.collaborationYear}
                        </span>
                      )}
                      {collab.clientWebsiteUrl && (
                        <a
                          href={collab.clientWebsiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gold-accent hover:text-foreground transition-colors flex items-center gap-1"
                        >
                          <span>Visit</span>
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-foreground mb-3 sm:mb-4">
              Client Testimonials
            </h2>
            <p className="font-paragraph text-sm sm:text-base lg:text-lg text-secondary max-w-3xl mx-auto">
              What our clients say about working with Haute Services
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                quote: 'Haute Services transformed our hotel\'s dining experience into something truly extraordinary. Their attention to detail and creative vision exceeded all expectations.',
                author: 'Trident Hotels',
                role: 'Hospitality Partner',
              },
              {
                quote: 'The art curation and cultural programming brought by Haute Services added immense value to our embassy events. Professional, insightful, and deeply knowledgeable.',
                author: 'Embassy of Indonesia',
                role: 'Cultural Institution',
              },
              {
                quote: 'Working with Haute Services on our fashion events was seamless. They understand the intersection of design, food, and art like no one else.',
                author: 'Shantanu & Nikhil',
                role: 'Fashion House',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200"
              >
                <div className="mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gold-accent opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="font-paragraph text-sm sm:text-base text-foreground leading-relaxed mb-4 sm:mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-heading text-base sm:text-lg text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="font-paragraph text-xs sm:text-sm text-secondary">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://static.wixstatic.com/media/e86273_ac8a530d1a5f432aa03681dba1b67ebc~mv2.png?originWidth=1920&originHeight=1024"
            alt="Abstract texture"
            className="w-full h-full object-cover opacity-5"
            width={1920}
          />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-primary mb-6 sm:mb-8 lg:mb-12">
            Ready to elevate your <br className="hidden sm:block" />
            <span className="italic text-gold-accent">experience?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <button 
              onClick={() => setIsContactDialogOpen(true)}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white w-full sm:w-auto sm:min-w-[180px] lg:min-w-[200px] hover:bg-primary/90 transition-colors duration-300 rounded font-paragraph text-base"
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
