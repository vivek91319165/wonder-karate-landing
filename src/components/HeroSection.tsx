
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-6 md:px-12">
      {/* Background Design Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-karate-white rounded-bl-[200px] opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-karate-gray/40 rounded-tr-[100px]"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-karate-red/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
        <div className="order-2 lg:order-1 animate-fade-in [animation-delay:0.2s] opacity-0">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-karate-red/10 rounded-full">
              <span className="text-karate-red font-medium text-sm tracking-wide">Tradition • Discipline • Excellence</span>
            </div>
            
            <h1 className="heading-xl">
              <span className="block">Master the Art of</span>
              <span className="text-karate-red">Karate</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg">
              Discover the ancient tradition of karate through expert instruction, 
              disciplined practice, and a supportive community at Wonder Karate Classes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#classes" 
                className="inline-flex items-center justify-center px-8 py-3 bg-karate-black text-white rounded-lg font-medium transition-transform hover:scale-105"
              >
                Explore Classes
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-3 border border-karate-black/20 rounded-lg font-medium hover:bg-karate-black/5 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 relative animate-fade-in [animation-delay:0.4s] opacity-0">
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 bg-karate-red/10 rounded-full blur-3xl transform -translate-x-10 translate-y-10"></div>
            <div className="w-full h-full relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1591941556741-5e4dfc274270?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Karate master in action" 
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
