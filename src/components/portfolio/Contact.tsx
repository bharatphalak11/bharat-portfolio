
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bharat.phalak@example.com",
      href: "mailto:bharat.phalak@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-XXXXX-XXXXX",
      href: "tel:+91XXXXXXXXX"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/bharatphalak",
      href: "https://linkedin.com/in/bharatphalak"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/bharatphalak",
      href: "https://github.com/bharatphalak"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-400 font-medium text-sm uppercase tracking-wide mb-4 block">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Ready to discuss your next project? I'd love to hear from you and explore how we can build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-4 p-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors"
                    target={contact.label === "LinkedIn" || contact.label === "GitHub" ? "_blank" : undefined}
                    rel={contact.label === "LinkedIn" || contact.label === "GitHub" ? "noopener noreferrer" : undefined}
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{contact.label}</h4>
                      <p className="text-slate-300 text-sm">{contact.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="flex items-center space-x-2 text-slate-300">
              <MapPin className="w-5 h-5" />
              <span>Surat, India</span>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Ready to Start?</h3>
            
            <p className="text-slate-300 mb-8 leading-relaxed">
              I'm currently open to new opportunities and exciting projects. 
              Let's discuss how my backend development expertise can help bring your ideas to life.
            </p>

            <div className="space-y-4 mb-8">
              <h4 className="font-semibold">What I Can Help With:</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Backend Architecture",
                  "API Development", 
                  "System Optimization",
                  "Team Leadership",
                  "Database Design",
                  "Performance Tuning"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="text-slate-300 text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              asChild
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg"
            >
              <a href="mailto:bharat.phalak@example.com">
                Send me an email
              </a>
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-400">
            © 2024 Bharat Phalak. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};
