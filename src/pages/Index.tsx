
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { WorkHighlights } from "@/components/portfolio/WorkHighlights";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Education } from "@/components/portfolio/Education";
import { Recommendations } from "@/components/portfolio/Recommendations";
import { Contact } from "@/components/portfolio/Contact";
import { Navigation } from "@/components/portfolio/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Work Highlights Section */}
        <WorkHighlights />
        
        {/* Experience Section */}
        <Experience />
        
        {/* Projects Section */}
        <Projects />
        
        {/* Skills Section */}
        <Skills />
        
        {/* Education Section */}
        <Education />
        
        {/* Recommendations Section */}
        <Recommendations />
        
        {/* Contact Section */}
        <Contact />
      </main>
    </div>
  );
};

export default Index;
