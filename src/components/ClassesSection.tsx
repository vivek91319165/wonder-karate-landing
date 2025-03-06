import { Calendar, Clock } from 'lucide-react';

const classes = [
  {
    title: "Children's Karate",
    age: "Ages 6-12",
    description: "A fun and structured introduction to karate fundamentals, focusing on coordination, discipline, and confidence building.",
    image: "https://images.unsplash.com/photo-1576137884495-b5ba47c9926f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    schedule: [
      { day: "Monday & Wednesday", time: "4:00 PM - 5:00 PM" },
      { day: "Saturday", time: "10:00 AM - 11:00 AM" }
    ]
  },
  {
    title: "Teen Karate",
    age: "Ages 13-17",
    description: "An intermediate program that builds on basic techniques while introducing more advanced kata and kumite suitable for teenage practitioners.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    schedule: [
      { day: "Tuesday & Thursday", time: "5:30 PM - 6:30 PM" },
      { day: "Saturday", time: "11:30 AM - 12:30 PM" }
    ]
  }
];

const ClassesSection = () => {
  return (
    <section id="classes" className="section-padding px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in [animation-delay:0.2s] opacity-0">
          <div className="inline-block px-4 py-1.5 bg-karate-red/10 rounded-full mb-4">
            <span className="text-karate-red font-medium text-sm tracking-wide">OUR PROGRAMS</span>
          </div>
          <h2 className="heading-lg mb-4">Karate Classes for All Ages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer specialized training programs designed for different age groups and skill levels, 
            ensuring that every student receives appropriate instruction and challenges.
          </p>
        </div>
        
        <div className="space-y-20">
          {classes.map((classItem, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-[1fr,1.3fr]' : 'lg:grid-cols-[1.3fr,1fr]'} gap-12 items-center animate-fade-in opacity-0`}
              style={{ animationDelay: `${0.4 + index * 0.2}s` }}
            >
              <div className={index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2'}>
                <div className="space-y-4">
                  <h3 className="heading-md text-karate-black">{classItem.title}</h3>
                  <div className="inline-block px-3 py-1 bg-karate-red/10 rounded-full">
                    <span className="text-karate-red font-medium text-sm">{classItem.age}</span>
                  </div>
                  <p className="text-gray-600">{classItem.description}</p>
                  
                  <div className="pt-4">
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <Calendar className="mr-2 h-5 w-5 text-karate-red" />
                      Class Schedule
                    </h4>
                    <div className="space-y-2">
                      {classItem.schedule.map((schedule, scheduleIndex) => (
                        <div key={scheduleIndex} className="flex gap-2">
                          <Clock className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">{schedule.day}:</span>
                            <span className="text-gray-600 ml-2">{schedule.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={index % 2 === 0 ? 'order-1 lg:order-2' : 'order-1'}>
                <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-2xl shadow-xl">
                  <img 
                    src={classItem.image} 
                    alt={classItem.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
