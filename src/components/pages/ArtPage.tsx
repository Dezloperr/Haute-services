import { useState } from 'react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactDialog from '@/components/ContactDialog';
import { ExternalLink } from 'lucide-react';

export default function ArtPage() {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  const artFeatures = [
  {
    image: "https://static.wixstatic.com/media/e86273_c55c4aea8b994e739a709dfbf28af727~mv2.webp",
    alt: "Art as an Investment",
    source: "Youtube",
    date: "Nov 28, 2009",
    title: "Art as an Investment",
    summary:
      "Manish K Baheti - Zee Business News feature",
  },
  {
    image: "https://static.wixstatic.com/media/e86273_6348e1a2c4b049ebacad9b8a8135238b~mv2.jpeg",
    alt: "Awadh Art Festival",
    source: "Press Corridor",
    date: "Feb 13, 2023",
    title: "AWADH ART FESTIVAL – The 5th Edition at Visual Arts Gallery, Delhi",
    summary:
      "Maneesh Baheti was a guest at the 5th Awadh Art Festival, held at India Habitat Centre. The event featured artists from India and Bangladesh and recognized Maneesh for his contributions to the art community through Haute Services.",
  },
  {
    image: "https://static.wixstatic.com/media/e86273_74c9b196b37b4ddf8324ae6e852626e5~mv2.png", // replace with real image if needed
    alt: "Outlook India - Maneesh Baheti",
    source: "Outlook India",
    date: "Nov 28, 2009",
    title: "Maneesh Baheti: A Visionary In Lifestyle Consultancy & Gastronomy",
    summary:
      "Outlook India’s Hub4Business profile highlights Maneesh Baheti’s founding of Haute Services, offering Art Advisory and Lifestyle Events. It references curated exhibitions like the AIRA Waterside Bar launch and emphasizes Haute’s mission to integrate art, lifestyle, and culinary excellence.",
  },
  {
    image: "https://images.unsplash.com/photo-1549921296-3a12ce38d6f8", // placeholder, swap with GCR image if available
    alt: "Haute Services – Global Consultants Review",
    source: "Global Consultants Review",
    date: "Nov 2017",
    title: "Haute Services: Events. Hospitality. Art",
    summary:
      "A featured vendor profile of Haute Services outlines its blend of hospitality, events, and art. The article highlights the firm’s curated art events and exhibitions across hotels, emphasizing its role in luxury and cultural experiences.",
  },
  {
    image: "https://static.wixstatic.com/media/e86273_dc97805d416d4fd9b7ba256ebd586c6d~mv2.jpeg",
    alt: "New Wave Art Initiative – VEVA Art x Maneesh Baheti",
    source: "Event Poster",
    date: "Oct 5, 2024",
    title: "New Wave Art Initiative – Inaugural Show",
    summary:
      "Maneesh Baheti co-hosted the launch of the 'New Wave Art Initiative' with VEVA Art, spotlighting emerging artists from the defense and civil services at The Park Hotel, Delhi.",
  },
  {
    image: "https://static.wixstatic.com/media/e86273_5d4332a4599c4caf9d5f29024590904a~mv2.jpeg",
    alt: "Present Future – A Legacy of Masters",
    source: "ICAC / CCA Gallery",
    date: "March 11, 2024",
    title: "Present Future – A Legacy of Masters",
    summary:
      "Maneesh Baheti was a Guest of Honour at the ICAC exhibition at Bikaner House, showcasing legendary works by Indian masters and curated by Ravindra Mardia.",
  },
  {
    image: "https://static.wixstatic.com/media/e86273_b9a3e9a634e64a63b461f216fc3d2a1f~mv2.jpeg",
    alt: "Medley of Indian Visual Art – Article by Maneesh Baheti",
    source: "CFB Connect Magazine",
    date: "Sept 2014",
    title: "Medley of Indian Visual Art",
    summary:
      "In this article, Maneesh Baheti explores the evolution and patronage of modern Indian art across centuries, tracing its institutional, royal, and regional roots.",
  },
  {
    image: "https://static.wixstatic.com/media/e86273_7b42844a4d90490a9ef630c6633e7991~mv2.jpeg",
    alt: "Atypical Corollaries – Art Magnum",
    source: "Art Magnum Gallery",
    date: "Oct 20, 2023",
    title: "Atypical Corollaries – Guest of Honour",
    summary:
      "Art Magnum hosted this curated show featuring artists from Baroda. Maneesh Baheti was invited as Guest of Honour for his continued patronage and leadership in art advisory.",
  },
  {
    image: "https://static.wixstatic.com/media/e86273_416886f4fae741b2b9e751b80983d9ec~mv2.jpeg",
    alt: "A Way to Bengal – Affordable Contemporary Art Show",
    source: "Newspaper Feature",
    date: "March 22, 2023",
    title: "A Way to Bengal – Bengal Contemporary Art Exhibition",
    summary:
      "This show, supported by Haute Services, brought Bengal's finest contemporary artists to the capital. It highlighted Kalighat-inspired techniques and affordable modern art.",
  },
  {
    image: "https://static.wixstatic.com/media/e86273_c9dc5a71319a4f1981a7a30ffe340045~mv2.jpeg",
    alt: "Art for Concern Annual Show 2019",
    source: "Le Meridien Gurgaon",
    date: "July 17, 2019",
    title: "Art for Concern – Annual Show with Maneesh Baheti",
    summary:
      "Promoted by Haute Services and Secure Giving, this annual exhibition brought together emerging and mid-career artists. The event featured a preview cocktail evening.",
  }
];


  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Opening Quote Section */}
      <section className="py-12 sm:py-16 lg:py-24 border-b border-gray-200">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center">
            <p className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-primary italic leading-tight max-w-4xl mx-auto px-4">
              "Art is not what you see, but what you make others see."
            </p>
            <p className="font-paragraph text-base sm:text-lg text-secondary mt-4 sm:mt-6">
              — Edgar Degas
            </p>
          </div>
        </div>
      </section>

<section className="max-w-[100rem] mx-auto px-4 py-12 sm:px-6 lg:px-12">
      {/* Parallax Image with Text Overlay */}
      <div className="lg:col-span-4 mb-12">
                <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-primary mb-6">
                  Art Services
                </h2>
                <div className="w-full h-px bg-gray-200 mb-6" />
            <p className="font-paragraph text-base sm:text-lg text-secondary max-w-3xl">
              We believe that art is a transformative force that enriches lives, inspires creativity, and connects us to our shared humanity.
            </p>
            </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-start mb-12 sm:mb-20">
            <div>
              <Image 
                src="https://static.wixstatic.com/media/e86273_2a2d0a14f8234859bb245ae0f44ab2fa~mv2.webp"
                alt="Food For Thought Fest event"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover mb-4 sm:mb-8"
                width={700}
              />
            </div>
            
            <div>
              <p className="font-paragraph text-sm sm:text-base text-foreground mb-4 sm:mb-6">
                Haute Services’ art practice is a refined blend of connoisseurship, creativity, and cultural insight. We offer a full spectrum of art services that connect collectors, creators, and spaces with meaningful visual narratives.
              </p>
              <p className="font-paragraph text-sm sm:text-base text-foreground mb-6 sm:mb-8">
                Our work spans modern, contemporary, photographic, and sculptural art—delivered through curated shows, restoration projects, and bespoke installations in homes, galleries, and corporate environments. We believe art is more than decor; it is identity, investment, and dialogue shaped with care and purpose.
              </p>
              <a 
                href="https://www.foodforthoughtfest.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="bg-gold-accent text-secondary-foreground border-none rounded px-4 sm:px-6 py-2 sm:py-3 font-paragraph text-sm sm:text-base hover:opacity-90 transition-opacity flex items-center gap-2">
                  Contact Us
                  <ExternalLink size={16} />
                </button>
              </a>
            </div>
          </div>
          </section>

      {/* Our Services Section with Enhanced Boxes */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-primary mb-6">
              Our Services
            </h2>
            <p className="font-paragraph text-base sm:text-lg text-secondary max-w-3xl mx-auto">
              Comprehensive art advisory services tailored to your unique vision and goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Curation of Art Shows & Events */}
            <div className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="overflow-hidden">
                <Image 
                  src="https://static.wixstatic.com/media/e86273_ff32664b46b049fb9955f331e036f25a~mv2.png?originWidth=576&originHeight=384"
                  alt="Curation of Art Shows & Events"
                  className="w-full h-[280px] sm:h-[320px] lg:h-[380px] object-cover hover:scale-105 transition-transform duration-500"
                  width={700}
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-heading text-2xl sm:text-3xl text-primary mb-4">
                  Curation of Art Shows & Events
                </h3>
                <p className="font-paragraph text-sm sm:text-base text-secondary mb-4">
                  Professional curation and exhibition planning services.
                </p>
                <p className="font-paragraph text-sm sm:text-base text-foreground mb-6">
                  We design and curate exhibitions that tell compelling stories and engage audiences. From concept development to installation, we manage all aspects of exhibition planning.
                </p>
                <button className="bg-transparent text-foreground border border-foreground rounded px-6 py-3 font-paragraph text-sm sm:text-base hover:bg-foreground hover:text-primary-foreground transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Buying & Selling of Artworks */}
            <div className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="overflow-hidden">
                <Image 
                  src="https://static.wixstatic.com/media/e86273_59bcb9acc97741338c7c0cae8fb10323~mv2.png?originWidth=576&originHeight=384"
                  alt="Buying & Selling of Artworks"
                  className="w-full h-[280px] sm:h-[320px] lg:h-[380px] object-cover hover:scale-105 transition-transform duration-500"
                  width={700}
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-heading text-2xl sm:text-3xl text-primary mb-4">
                  Buying & Selling of Artworks
                </h3>
                <p className="font-paragraph text-sm sm:text-base text-secondary mb-4">
                  Strategic acquisition and sales services for collectors.
                </p>
                <p className="font-paragraph text-sm sm:text-base text-foreground mb-6">
                  We work closely with clients to identify and acquire works that align with their vision. Our services include market research, artist due diligence, negotiation, and transaction management.
                </p>
                <button className="bg-transparent text-foreground border border-foreground rounded px-6 py-3 font-paragraph text-sm sm:text-base hover:bg-foreground hover:text-primary-foreground transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Art Restoration */}
            <div className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="overflow-hidden">
                <Image 
                  src="https://static.wixstatic.com/media/e86273_54073ef0a80d47d39fcdfe1283821701~mv2.png?originWidth=576&originHeight=512"
                  alt="Art Restoration"
                  className="w-full h-[280px] sm:h-[320px] lg:h-[380px] object-cover hover:scale-105 transition-transform duration-500"
                  width={700}
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-heading text-2xl sm:text-3xl text-primary mb-4">
                  Art Restoration
                </h3>
                <p className="font-paragraph text-sm sm:text-base text-secondary mb-4">
                  Expert restoration and conservation services.
                </p>
                <p className="font-paragraph text-sm sm:text-base text-foreground mb-6">
                  Our restoration specialists work with the finest conservators to restore and preserve artworks. We coordinate all aspects of conservation, ensuring your pieces are handled with the utmost care.
                </p>
                <button className="bg-transparent text-foreground border border-foreground rounded px-6 py-3 font-paragraph text-sm sm:text-base hover:bg-foreground hover:text-primary-foreground transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Valuation of Art Portfolios */}
            <div className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="overflow-hidden">
                <Image 
                  src="https://static.wixstatic.com/media/e86273_dff03bcb748b4d99ade1f82f4d8faa48~mv2.png?originWidth=576&originHeight=384"
                  alt="Valuation of Art Portfolios"
                  className="w-full h-[280px] sm:h-[320px] lg:h-[380px] object-cover hover:scale-105 transition-transform duration-500"
                  width={700}
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-heading text-2xl sm:text-3xl text-primary mb-4">
                  Valuation of Art Portfolios
                </h3>
                <p className="font-paragraph text-sm sm:text-base text-secondary mb-4">
                  Expert valuation and appraisal services for insurance and estate purposes.
                </p>
                <p className="font-paragraph text-sm sm:text-base text-foreground mb-6">
                  We provide comprehensive valuations based on current market conditions and comparable sales. Our appraisals are recognized by insurance companies and estate planners.
                </p>
                <button className="bg-transparent text-foreground border border-foreground rounded px-6 py-3 font-paragraph text-sm sm:text-base hover:bg-foreground hover:text-primary-foreground transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Art Portfolio Management */}
            <div className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="overflow-hidden">
                <Image 
                  src="https://static.wixstatic.com/media/e86273_efc4aec961cb4972a28283597cf1f662~mv2.png?originWidth=576&originHeight=384"
                  alt="Art Portfolio Management"
                  className="w-full h-[280px] sm:h-[320px] lg:h-[380px] object-cover hover:scale-105 transition-transform duration-500"
                  width={700}
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-heading text-2xl sm:text-3xl text-primary mb-4">
                  Art Portfolio Management
                </h3>
                <p className="font-paragraph text-sm sm:text-base text-secondary mb-4">
                  Comprehensive care and management of art collections.
                </p>
                <p className="font-paragraph text-sm sm:text-base text-foreground mb-6">
                  Our portfolio management services include cataloging, conservation coordination, insurance valuation, and installation planning. We ensure your collection is properly documented and maintained.
                </p>
                <button className="bg-transparent text-foreground border border-foreground rounded px-6 py-3 font-paragraph text-sm sm:text-base hover:bg-foreground hover:text-primary-foreground transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spaces We Work With Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-primary text-center mb-12 sm:mb-20">
            Spaces We Work With
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {/* Art Types */}
            <div className="bg-white p-6 sm:p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-heading text-xl sm:text-2xl text-primary mb-3 sm:mb-4">
                Contemporary Art
              </h4>
              <p className="font-paragraph text-sm sm:text-base text-foreground">
                We specialize in contemporary art from emerging and established artists, helping clients discover works that push boundaries and challenge conventions.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-heading text-xl sm:text-2xl text-primary mb-3 sm:mb-4">
                Photography & Print Art
              </h4>
              <p className="font-paragraph text-sm sm:text-base text-foreground">
                Our expertise in photography and print art spans historical and contemporary works, from iconic images to cutting-edge digital art.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-heading text-xl sm:text-2xl text-primary mb-3 sm:mb-4">
                Sculptures & Installations
              </h4>
              <p className="font-paragraph text-sm sm:text-base text-foreground">
                We work with sculptors and installation artists to bring three-dimensional works into private and public spaces, creating immersive experiences.
              </p>
            </div>

            {/* Space Types */}
            <div className="bg-white p-6 sm:p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-heading text-xl sm:text-2xl text-primary mb-3 sm:mb-4">
                Luxury Residences
              </h4>
              <p className="font-paragraph text-sm sm:text-base text-foreground">
                We curate art collections for luxury homes, creating cohesive environments that reflect the homeowner's taste and enhance their living spaces.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-heading text-xl sm:text-2xl text-primary mb-3 sm:mb-4">
                Corporate Headquarters
              </h4>
              <p className="font-paragraph text-sm sm:text-base text-foreground">
                We develop art programs for corporate environments that inspire employees, impress clients, and communicate brand values.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-heading text-xl sm:text-2xl text-primary mb-3 sm:mb-4">
                Hotels & Hospitality Spaces
              </h4>
              <p className="font-paragraph text-sm sm:text-base text-foreground">
                We create art experiences for hotels and hospitality venues that enhance guest experiences and establish memorable brand identities.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
              <h4 className="font-heading text-xl sm:text-2xl text-primary mb-3 sm:mb-4">
                Galleries & Public Installations
              </h4>
              <p className="font-paragraph text-sm sm:text-base text-foreground">
                We collaborate with galleries and public institutions to create exhibitions and installations that engage diverse audiences and foster cultural dialogue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Masonry Grid of Art Images */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-primary text-center mb-12 sm:mb-20">
            Our Collection
          </h2>
          
          <div className="columns-2 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6">
            {[
              "https://static.wixstatic.com/media/e86273_ef52a94d65e04eb5baba36492d97c2c4~mv2.png?originWidth=576&originHeight=512",
              "https://static.wixstatic.com/media/e86273_363dd37680ec4558a9be7c69722f88c3~mv2.png?originWidth=576&originHeight=512",
              "https://static.wixstatic.com/media/e86273_53f7aabafa704ecfbaf8b5de9b86a6d1~mv2.png?originWidth=576&originHeight=512",
              "https://static.wixstatic.com/media/e86273_9c63793f9dc84320a9bc773d9cb44836~mv2.png?originWidth=576&originHeight=512",
              "https://static.wixstatic.com/media/e86273_54073ef0a80d47d39fcdfe1283821701~mv2.png?originWidth=576&originHeight=512",
              "https://static.wixstatic.com/media/e86273_74c9b196b37b4ddf8324ae6e852626e5~mv2.png?originWidth=576&originHeight=512",
              "https://static.wixstatic.com/media/e86273_ac8a530d1a5f432aa03681dba1b67ebc~mv2.png?originWidth=1920&originHeight=1024",
              "https://static.wixstatic.com/media/e86273_59bcb9acc97741338c7c0cae8fb10323~mv2.png?originWidth=576&originHeight=384",
              "https://static.wixstatic.com/media/e86273_efc4aec961cb4972a28283597cf1f662~mv2.png?originWidth=576&originHeight=384",
              "https://static.wixstatic.com/media/e86273_ff32664b46b049fb9955f331e036f25a~mv2.png?originWidth=576&originHeight=384",
              "https://static.wixstatic.com/media/e86273_dff03bcb748b4d99ade1f82f4d8faa48~mv2.png?originWidth=576&originHeight=384",
              "https://static.wixstatic.com/media/e86273_df45a75af41f4bd8857c3f737ba244fe~mv2.png?originWidth=576&originHeight=512"
            ].map((src, i) => (
              <div
                key={i}
                className="relative overflow-hidden mb-4 sm:mb-6 break-inside-avoid"
              >
                <Image
                  src={src}
                  alt={`Art collection piece ${i + 1}`}
                  width={600}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-primary text-center mb-12 sm:mb-20">
            Media Coverage
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {artFeatures.map((art, i) => (
            <div key={i} className="bg-white overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="overflow-hidden">
                <Image 
                  src={art.image}
                  alt="Featured in Art Magazine"
                  className="w-full h-fit object-cover hover:scale-105 transition-transform duration-500"
                  width={600}
                />
              </div>
              <div className="p-6">
                <p className="font-paragraph text-xs sm:text-sm text-secondary mb-2">
                  {art.source} • {art.date}
                </p>
                <h3 className="font-heading text-xl sm:text-2xl text-primary mb-3">
                  {art.title}
                </h3>
                <p className="font-paragraph text-sm sm:text-base text-foreground">
                  {art.summary}
                </p>
              </div>
            </div>
          ))}
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
