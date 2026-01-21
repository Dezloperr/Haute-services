import { useEffect, useState } from 'react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactDialog from '@/components/ContactDialog';
import { BaseCrudService } from '@/integrations';
import { LeadershipBios, ClientCollaborations } from '@/entities';
import { Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const [leadership, setLeadership] = useState<LeadershipBios[]>([]);
  const [clients, setClients] = useState<ClientCollaborations[]>([]);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  useEffect(() => {
    async function loadData() {
      const { items: leadershipItems } = await BaseCrudService.getAll<LeadershipBios>('leadershipbios');
      const { items: clientItems } = await BaseCrudService.getAll<ClientCollaborations>('clientcollaborations');
      setLeadership(leadershipItems);
      setClients(clientItems);
    }
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-20">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-primary mb-4 sm:mb-8">
              About Us
            </h1>
            <p className="font-paragraph text-base sm:text-lg lg:text-xl text-secondary max-w-3xl mx-auto px-4">
              Meet the team behind Haute Services and discover our collaborative approach to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-primary text-center mb-12 sm:mb-20">
            Our Leadership
          </h2>
          
          {leadership.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
              {leadership.map((leader) => (
                <div key={leader._id} className="bg-white">
                  {leader.photo && (
                    <Image 
                      src={leader.photo}
                      alt={leader.name || 'Team member'}
                      className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover mb-6 sm:mb-8"
                      width={600}
                    />
                  )}
                  <h3 className="font-heading text-2xl sm:text-3xl text-primary mb-2">
                    {leader.name}
                  </h3>
                  {leader.title && (
                    <p className="font-paragraph text-base sm:text-lg text-salmon-dark mb-4 sm:mb-6">
                      {leader.title}
                    </p>
                  )}
                  {leader.bio && (
                    <p className="font-paragraph text-sm sm:text-base text-foreground mb-6">
                      {leader.bio}
                    </p>
                  )}
                  <div className="flex gap-4">
                    {leader.linkedinUrl && (
                      <a 
                        href={leader.linkedinUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-salmon-dark transition-colors"
                      >
                        <Linkedin size={20} />
                      </a>
                    )}
                    {leader.email && (
                      <a 
                        href={`mailto:${leader.email}`}
                        className="text-foreground hover:text-salmon-dark transition-colors"
                      >
                        <Mail size={20} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
              <div className="bg-white">
                <Image 
                  src="https://static.wixstatic.com/media/e86273_f55ceb7c97cd4b958ea64524003ea0ca~mv2.png?originWidth=576&originHeight=448"
                  alt="Leadership team member"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover mb-6 sm:mb-8"
                  width={600}
                />
                <h3 className="font-heading text-2xl sm:text-3xl text-primary mb-2">
                  Leadership Team
                </h3>
                <p className="font-paragraph text-base sm:text-lg text-salmon-dark mb-4 sm:mb-6">
                  Founders & Partners
                </p>
                <p className="font-paragraph text-sm sm:text-base text-foreground mb-6">
                  Our leadership team brings decades of combined experience in lifestyle events, art advisory, and strategic consulting. With deep industry connections and a passion for excellence, we guide every project with expertise and vision.
                </p>
              </div>
              
              <div className="bg-white">
                <Image 
                  src="https://static.wixstatic.com/media/e86273_bb27eb6ec911431e9f548d53bdf00fb1~mv2.png?originWidth=576&originHeight=448"
                  alt="Advisory team member"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover mb-6 sm:mb-8"
                  width={600}
                />
                <h3 className="font-heading text-2xl sm:text-3xl text-primary mb-2">
                  Advisory Board
                </h3>
                <p className="font-paragraph text-base sm:text-lg text-salmon-dark mb-4 sm:mb-6">
                  Industry Experts
                </p>
                <p className="font-paragraph text-sm sm:text-base text-foreground mb-6">
                  Our advisory board consists of renowned experts from the food and art sectors, providing strategic guidance and ensuring we remain at the forefront of industry trends and best practices.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Client Collaborations Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-primary text-center mb-12 sm:mb-20">
            Client Collaborations
          </h2>
          
          {clients.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              {clients.map((client) => (
                <div key={client._id} className="bg-white p-6 sm:p-8 text-center">
                  {client.clientLogo && (
                    <div className="mb-6 flex justify-center">
                      <Image 
                        src={client.clientLogo}
                        alt={client.clientName || 'Client logo'}
                        className="h-20 sm:h-24 w-auto object-contain"
                        width={200}
                      />
                    </div>
                  )}
                  <h3 className="font-heading text-xl sm:text-2xl text-primary mb-3 sm:mb-4">
                    {client.clientName}
                  </h3>
                  {client.projectType && (
                    <p className="font-paragraph text-sm sm:text-base text-salmon-dark mb-3 sm:mb-4">
                      {client.projectType}
                    </p>
                  )}
                  {client.collaborationDescription && (
                    <p className="font-paragraph text-sm sm:text-base text-foreground mb-4">
                      {client.collaborationDescription}
                    </p>
                  )}
                  {client.collaborationYear && (
                    <p className="font-paragraph text-xs sm:text-sm text-secondary">
                      {client.collaborationYear}
                    </p>
                  )}
                  {client.clientWebsiteUrl && (
                    <a 
                      href={client.clientWebsiteUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-4 font-paragraph text-sm sm:text-base text-foreground hover:text-salmon-dark transition-colors"
                    >
                      Visit Website →
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              <div className="bg-white p-6 sm:p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <Image 
                    src="https://static.wixstatic.com/media/e86273_32539dd5e7894e20947593d4131bd10f~mv2.png?originWidth=192&originHeight=128"
                    alt="Client collaboration"
                    className="h-20 sm:h-24 w-auto object-contain"
                    width={200}
                  />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl text-primary mb-3 sm:mb-4">
                  Luxury Brands
                </h3>
                <p className="font-paragraph text-sm sm:text-base text-salmon-dark mb-3 sm:mb-4">
                  Event Production
                </p>
                <p className="font-paragraph text-sm sm:text-base text-foreground">
                  Collaborating with prestigious luxury brands to create exclusive culinary experiences and art exhibitions.
                </p>
              </div>
              
              <div className="bg-white p-6 sm:p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <Image 
                    src="https://static.wixstatic.com/media/e86273_0dedef826cd847f792a51d4df74ba80c~mv2.png?originWidth=192&originHeight=128"
                    alt="Client collaboration"
                    className="h-20 sm:h-24 w-auto object-contain"
                    width={200}
                  />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl text-primary mb-3 sm:mb-4">
                  Cultural Institutions
                </h3>
                <p className="font-paragraph text-sm sm:text-base text-salmon-dark mb-3 sm:mb-4">
                  Art Advisory
                </p>
                <p className="font-paragraph text-sm sm:text-base text-foreground">
                  Providing strategic guidance to museums and cultural organizations on collection development and exhibitions.
                </p>
              </div>
              
              <div className="bg-white p-6 sm:p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <Image 
                    src="https://static.wixstatic.com/media/e86273_c2bfb3b06cc845c781963235453ae765~mv2.png?originWidth=192&originHeight=128"
                    alt="Client collaboration"
                    className="h-20 sm:h-24 w-auto object-contain"
                    width={200}
                  />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl text-primary mb-3 sm:mb-4">
                  Private Collectors
                </h3>
                <p className="font-paragraph text-sm sm:text-base text-salmon-dark mb-3 sm:mb-4">
                  Collection Building
                </p>
                <p className="font-paragraph text-sm sm:text-base text-foreground">
                  Working with discerning collectors to build meaningful art collections and curate exceptional dining experiences.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-primary mb-6 sm:mb-8">
              Our Commitment
            </h2>
            <p className="font-paragraph text-base sm:text-lg text-foreground mb-4 sm:mb-6 px-4">
              At Haute Services, we believe in the power of exceptional experiences to inspire, connect, and transform. Whether we're orchestrating a culinary event or advising on an art acquisition, our commitment to excellence remains unwavering.
            </p>
            <p className="font-paragraph text-base sm:text-lg text-foreground px-4">
              We approach each project with fresh eyes, deep expertise, and a dedication to creating something truly memorable. Our success is measured not just in outcomes, but in the lasting relationships we build and the meaningful experiences we create.
            </p>
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
              <span className="italic text-salmon-dark">experience?</span>
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
