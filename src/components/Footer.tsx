
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-karate-black text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex flex-col md:flex-row md:items-baseline gap-0 md:gap-2 mb-4">
              <span className="font-display text-2xl font-bold text-white">WONDER</span>
              <span className="font-display text-lg text-karate-red">KARATE</span>
            </div>
            <p className="text-gray-400 mb-6">
              Tradition. Discipline. Excellence.<br/>
              Transforming lives through authentic karate instruction.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/wonderkarate" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:info@wonderkarate.com" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+15551234567" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#classes" className="text-gray-400 hover:text-white transition-colors">Classes</a></li>
              <li><a href="#instructors" className="text-gray-400 hover:text-white transition-colors">Instructors</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Class Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li><span className="font-medium">Monday - Friday:</span> 4:00 PM - 9:00 PM</li>
              <li><span className="font-medium">Saturday:</span> 9:00 AM - 1:00 PM</li>
              <li><span className="font-medium">Sunday:</span> Closed</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-karate-red mr-3 mt-0.5" />
                <span className="text-gray-400">
                  123 Martial Arts Way,<br/>
                  Karate City, KC 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-karate-red mr-3" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Instagram className="h-5 w-5 text-karate-red mr-3" />
                <a 
                  href="https://instagram.com/wonderkarate" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  @wonderkarate
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-white/10 my-8" />
        
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Wonder Karate Classes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
