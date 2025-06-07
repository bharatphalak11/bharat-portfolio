
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  // Contact information data
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bharat.phalak@example.com",
      href: "mailto:bharat.phalak@example.com",
      description: "Feel free to reach out for opportunities or collaborations"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-XXXXX-XXXXX",
      href: "tel:+91XXXXXXXXX",
      description: "Available for calls during business hours"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/bharatphalak",
      href: "https://linkedin.com/in/bharatphalak",
      description: "Connect with me professionally"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/bharatphalak",
      href: "https://github.com/bharatphalak",
      description: "Check out my open source contributions"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Ready to discuss opportunities, collaborations, or just have a technical chat? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-blue-100 leading-relaxed mb-8">
                I'm always interested in discussing new opportunities, challenging projects, 
                or sharing insights about backend development and system architecture. 
                Whether you're looking for a technical lead, a backend specialist, or just 
                want to connect with a fellow developer, don't hesitate to reach out.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{contact.label}</h4>
                      <a 
                        href={contact.href}
                        className="text-blue-300 hover:text-blue-200 transition-colors duration-200 block mb-2"
                        target={contact.label === "LinkedIn" || contact.label === "GitHub" ? "_blank" : undefined}
                        rel={contact.label === "LinkedIn" || contact.label === "GitHub" ? "noopener noreferrer" : undefined}
                      >
                        {contact.value}
                      </a>
                      <p className="text-blue-100 text-sm">{contact.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Contact Form or CTA */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Ready to Start a Conversation?</h3>
            
            <div className="space-y-6">
              <p className="text-blue-100 leading-relaxed">
                I'm currently open to new opportunities and exciting projects. 
                Let's discuss how my backend development expertise and leadership 
                experience can contribute to your team's success.
              </p>

              {/* Areas of Interest */}
              <div>
                <h4 className="font-semibold mb-4">Areas of Interest:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Backend Architecture",
                    "System Optimization",
                    "Team Leadership",
                    "Microservices",
                    "API Development",
                    "Performance Tuning"
                  ].map((area, index) => (
                    <div key={index} className="bg-white/20 rounded-lg px-3 py-2 text-center text-sm font-medium">
                      {area}
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  asChild
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3"
                >
                  <a href="mailto:bharat.phalak@example.com">
                    Send Email
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="flex-1 border-2 border-white/30 text-white hover:bg-white/10 font-medium py-3"
                >
                  <a href="https://linkedin.com/in/bharatphalak" target="_blank" rel="noopener noreferrer">
                    LinkedIn Profile
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-blue-200">
            © 2024 Bharat Phalak. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-blue-300 text-sm mt-2">
            "Building scalable systems, one line of code at a time."
          </p>
        </div>
      </div>
    </section>
  );
};
