
import { Button } from "@/components/ui/button";

export const Hero = () => {
  // Function to scroll to contact section
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to scroll to projects section
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Greeting */}
        <div className="mb-6">
          <span className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            👋 Hello, I'm Bharat
          </span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight">
          Software Engineer
        </h1>
        
        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed px-4">
          Passionate about crafting scalable, high-performance backend systems with 3+ years of experience 
          in Python, Django, and distributed architectures. Dedicated to delivering robust solutions 
          and optimizing system performance.
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 px-4">
          <Button 
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium w-full sm:w-auto"
          >
            Get In Touch
          </Button>
          <Button 
            onClick={scrollToProjects}
            variant="outline"
            className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium w-full sm:w-auto"
          >
            View My Work
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">3+</div>
            <div className="text-xs sm:text-sm text-slate-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">100%</div>
            <div className="text-xs sm:text-sm text-slate-600">Query Optimization</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">5</div>
            <div className="text-xs sm:text-sm text-slate-600">Team Members Led</div>
          </div>
        </div>
      </div>
    </section>
  );
};
