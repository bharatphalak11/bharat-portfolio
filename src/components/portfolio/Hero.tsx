
import { Button } from "@/components/ui/button";

export const Hero = () => {
  // Function to scroll to contact section
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
          Bharat Phalak
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-blue-600 font-medium mb-8">
          Backend Developer & Site Reliability Engineer
        </h2>
        
        {/* Description */}
        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Passionate backend developer with 3+ years of experience building scalable ERP solutions 
          and microservices architectures. Specialized in Python, Django, and distributed systems 
          with a focus on performance optimization and team leadership.
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToContact}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Get In Touch
          </Button>
          <Button 
            variant="outline"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors duration-200"
          >
            View Projects
          </Button>
        </div>
        
        {/* Key Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
            <div className="text-slate-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-slate-600">Query Optimization</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
            <div className="text-slate-600">Team Members Led</div>
          </div>
        </div>
      </div>
    </section>
  );
};
