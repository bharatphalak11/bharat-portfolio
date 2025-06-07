
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
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Greeting */}
        <div className="mb-6">
          <span className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            👋 Hello, I'm Bharat
          </span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight">
          Backend Developer &<br />
          <span className="text-blue-600">System Architect</span>
        </h1>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          I build scalable backend systems and lead development teams with 3+ years of experience 
          in Python, Django, and distributed architectures. Passionate about performance optimization 
          and delivering robust solutions.
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium"
          >
            Get In Touch
          </Button>
          <Button 
            onClick={scrollToProjects}
            variant="outline"
            className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-full text-lg font-medium"
          >
            View My Work
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 mb-1">3+</div>
            <div className="text-sm text-slate-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 mb-1">100%</div>
            <div className="text-sm text-slate-600">Query Optimization</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 mb-1">5</div>
            <div className="text-sm text-slate-600">Team Members Led</div>
          </div>
        </div>
      </div>
    </section>
  );
};
