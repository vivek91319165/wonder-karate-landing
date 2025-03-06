
import { Instagram, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding px-6 md:px-12 bg-karate-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in [animation-delay:0.2s] opacity-0">
            <div className="inline-block px-4 py-1.5 bg-karate-red/20 rounded-full mb-4">
              <span className="text-karate-red font-medium text-sm tracking-wide">GET IN TOUCH</span>
            </div>
            <h2 className="heading-lg mb-6">Contact Information</h2>
            <p className="text-gray-300 mb-10 max-w-lg">
              Have questions about our classes or interested in a free trial session? 
              Reach out to us using the contact information below or visit our dojo.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-karate-red mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Address</h3>
                  <p className="text-gray-300">123 Martial Arts Way, Karate City, KC 12345</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-karate-red mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-gray-300">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Instagram className="h-6 w-6 text-karate-red mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Instagram</h3>
                  <a 
                    href="https://instagram.com/wonderkarate" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    @wonderkarate
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in [animation-delay:0.4s] opacity-0">
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-200">
                      Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-karate-red/50 text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-200">
                      Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-karate-red/50 text-white"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1 text-gray-200">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-karate-red/50 text-white"
                    placeholder="Message subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-200">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-karate-red/50 text-white"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-karate-red text-white rounded-lg font-medium transition-transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
