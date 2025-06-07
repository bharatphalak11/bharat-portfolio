
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";

interface Recommendation {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  linkedinUrl?: string;
}

export const Recommendations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Sample recommendations data - you can replace with real data
  const recommendations: Recommendation[] = [
    {
      id: 1,
      name: "Dhruval Patel",
      role: "Data Engineer | Software Engineer",
      company: "Tech Solutions Inc.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "Collaborating with Bharat Phalak on multiple projects involving Python, Django, API development, and troubleshooting was a pleasure. Bharat consistently demonstrated exceptional technical expertise and a remarkable ability to solve complex problems. One of Bharat's most notable strengths is his openness to feedback. He actively embraced constructive input from colleagues, leading to innovative solutions and enhanced project outcomes. His collaborative mindset and eagerness to share knowledge made him an invaluable team player and a key contributor to our success. Working alongside Bharat was inspiring.",
      linkedinUrl: "https://linkedin.com/in/dhruval-patel"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Senior Backend Developer",
      company: "Innovation Labs",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b193?w=100&h=100&fit=crop&crop=face",
      content: "Bharat's expertise in Django and system architecture is outstanding. He led our team through complex microservices implementation with great precision. His ability to optimize database performance and handle high-traffic scenarios is remarkable. A true professional who delivers quality results consistently.",
      linkedinUrl: "https://linkedin.com/in/priya-sharma"
    },
    {
      id: 3,
      name: "Raj Kumar",
      role: "Technical Lead",
      company: "StartupTech",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "Working with Bharat on the ERP system was exceptional. His deep understanding of Python, Celery, and RabbitMQ helped us build a robust notification system. He's not just a great developer but also an excellent mentor who guided our junior developers effectively.",
      linkedinUrl: "https://linkedin.com/in/raj-kumar"
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "Bharat's contribution to our projects was invaluable. His attention to detail in API development and his proactive approach to solving production issues made our product delivery smooth. He's a reliable team player with excellent communication skills.",
      linkedinUrl: "https://linkedin.com/in/sarah-johnson"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % recommendations.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [recommendations.length]);

  // Scroll to specific card
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.offsetWidth;
      container.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? recommendations.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % recommendations.length);
  };

  return (
    <section id="recommendations" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-blue-600 font-medium text-sm uppercase tracking-wide mb-4 block">
            Recommendations
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
            What People Say
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
            I start every project with a quick discovery call to understand your goals and recommend the best tech 
            solution. Here's what clients and coworkers say about working with me as a Python Django developer.
          </p>
        </div>

        {/* Recommendations Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 border border-slate-200"
          >
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 border border-slate-200"
          >
            <ChevronRight className="w-5 h-5 text-slate-600" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {recommendations.map((recommendation, index) => (
              <div
                key={recommendation.id}
                className="w-full flex-none snap-start px-4"
              >
                <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Profile Section */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <img
                            src={recommendation.image}
                            alt={recommendation.name}
                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-white/30"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                            {recommendation.name}
                          </h3>
                          <p className="text-green-100 text-sm sm:text-base font-medium">
                            {recommendation.role}
                          </p>
                          <p className="text-green-200 text-xs sm:text-sm">
                            {recommendation.company}
                          </p>
                        </div>
                      </div>
                      
                      {recommendation.linkedinUrl && (
                        <a
                          href={recommendation.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors duration-300"
                        >
                          <Linkedin className="w-5 h-5 text-white" />
                        </a>
                      )}
                    </div>

                    {/* Quote */}
                    <div className="relative">
                      <div className="text-4xl sm:text-6xl text-white/30 font-serif absolute -top-4 -left-2">"</div>
                      <p className="text-base sm:text-lg leading-relaxed text-white/95 pl-8">
                        {recommendation.content}
                      </p>
                      <div className="text-4xl sm:text-6xl text-white/30 font-serif absolute -bottom-8 right-0">"</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {recommendations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-green-500 scale-125'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
