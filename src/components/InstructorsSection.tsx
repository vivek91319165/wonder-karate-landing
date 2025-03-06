
import { Instagram } from 'lucide-react';

const instructors = [
  {
    name: "Sensei Hiroshi Tanaka",
    title: "Chief Instructor",
    image: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    bio: "With over 30 years of experience and a 6th-degree black belt, Sensei Tanaka brings authentic Japanese karate training methods to Wonder Karate. His dedication to the art and commitment to excellence has helped hundreds of students achieve their potential in both karate and life.",
    instagram: "https://instagram.com"
  }
];

const InstructorsSection = () => {
  return (
    <section id="instructors" className="section-padding px-6 md:px-12 bg-karate-gray/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in [animation-delay:0.2s] opacity-0">
          <div className="inline-block px-4 py-1.5 bg-karate-red/10 rounded-full mb-4">
            <span className="text-karate-red font-medium text-sm tracking-wide">OUR EXPERT</span>
          </div>
          <h2 className="heading-lg mb-4">Meet Our Instructor</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our chief instructor is dedicated to providing high-quality karate training
            while fostering a positive and supportive learning environment.
          </p>
        </div>
        
        <div className="flex justify-center">
          {instructors.map((instructor, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow 
                duration-300 animate-fade-in opacity-0 max-w-2xl"
              style={{ animationDelay: `0.4s` }}
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-72 md:h-full overflow-hidden">
                    <img 
                      src={instructor.image} 
                      alt={instructor.name} 
                      className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
                
                <div className="md:w-1/2 p-6">
                  <h3 className="text-xl font-bold">{instructor.name}</h3>
                  <p className="text-karate-red font-medium mb-3">{instructor.title}</p>
                  <p className="text-gray-600 mb-4">{instructor.bio}</p>
                  
                  <a 
                    href={instructor.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-karate-black hover:text-karate-red transition-colors"
                  >
                    <Instagram size={18} className="mr-2" />
                    <span>Follow on Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
