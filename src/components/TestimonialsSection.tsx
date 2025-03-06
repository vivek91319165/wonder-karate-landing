
import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Wonder Karate has been transformative for my daughter. She's not only learning self-defense but also developing confidence and discipline that's visible in all areas of her life.",
    name: "Sarah Johnson",
    title: "Parent of 10-year-old student",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  },
  {
    quote: "As a complete beginner at 40, I was nervous about starting karate. The instructors at Wonder Karate made me feel welcome and adapted the training to my fitness level while still challenging me to improve.",
    name: "Michael Rodriguez",
    title: "Adult student, 1 year",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  },
  {
    quote: "The competition team coaching at Wonder Karate helped me achieve my goal of qualifying for nationals. The personalized attention and technical expertise of the instructors is unmatched.",
    name: "Emily Chen",
    title: "Teen student, 4 years",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  }
];

const TestimonialsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="section-padding px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12 animate-fade-in [animation-delay:0.2s] opacity-0">
          <div>
            <div className="inline-block px-4 py-1.5 bg-karate-red/10 rounded-full mb-4">
              <span className="text-karate-red font-medium text-sm tracking-wide">TESTIMONIALS</span>
            </div>
            <h2 className="heading-lg">What Our Students Say</h2>
          </div>
          
          <div className="hidden md:flex items-center gap-2">
            <button 
              onClick={scrollPrev}
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={scrollNext}
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-none"
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="min-w-[320px] md:min-w-[400px] flex-shrink-0 snap-start animate-fade-in opacity-0"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col">
                <Quote className="h-10 w-10 text-karate-red/20 mb-4" />
                <p className="text-gray-600 italic mb-6 flex-grow">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-4 md:hidden">
          <div className="flex items-center gap-2">
            <button 
              onClick={scrollPrev}
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={scrollNext}
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
