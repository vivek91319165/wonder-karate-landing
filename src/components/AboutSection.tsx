
import { Shield, Target, Users } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-10 w-10 text-karate-red" />,
    title: "Traditional Techniques",
    description: "Learn authentic karate techniques passed down through generations of masters, with emphasis on proper form and execution."
  },
  {
    icon: <Target className="h-10 w-10 text-karate-red" />,
    title: "Mental Discipline",
    description: "Develop focus, respect, and self-control through structured training that challenges both mind and body."
  },
  {
    icon: <Users className="h-10 w-10 text-karate-red" />,
    title: "Supportive Community",
    description: "Join a welcoming dojo where practitioners of all levels support each other's growth and development."
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding px-6 md:px-12 bg-karate-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in [animation-delay:0.2s] opacity-0">
          <div className="inline-block px-4 py-1.5 bg-karate-red/10 rounded-full mb-4">
            <span className="text-karate-red font-medium text-sm tracking-wide">OUR PHILOSOPHY</span>
          </div>
          <h2 className="heading-lg mb-4">The Way of <span className="text-karate-red">Karate</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Wonder Karate, we believe that karate is more than just a martial art—it's a path to 
            personal growth, physical wellness, and mental clarity. Our approach combines traditional 
            techniques with modern training methods.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 
                hover:shadow-md animate-fade-in opacity-0"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="bg-karate-red/5 rounded-2xl p-3 inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
