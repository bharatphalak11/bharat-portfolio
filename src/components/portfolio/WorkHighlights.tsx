
import { motion } from "framer-motion";
import { Code2, Database, Server, Cloud, Settings, Users } from "lucide-react";

export const WorkHighlights = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Python & Django Web Development",
      description: "Building responsive, secure web applications using Django, React, and other robust frameworks. Each project is optimized for performance, scalability, and maintainability."
    },
    {
      icon: Database,
      title: "Backend API Development",
      description: "Creating robust, RESTful and GraphQL APIs using Django and Python. From authentication and admin panels to data processing pipelines, ensuring secure, tested, and scalable backends."
    },
    {
      icon: Server,
      title: "System Architecture & Optimization",
      description: "Designing and implementing scalable system architectures, optimizing database performance, and ensuring high availability with modern distributed systems."
    },
    {
      icon: Cloud,
      title: "Deployment & DevOps",
      description: "End-to-end deployment on AWS, DigitalOcean, or VPS environments with Docker, Gunicorn, and Nginx. Handling SSL certificate setup and CI/CD pipelines for seamless updates."
    },
    {
      icon: Settings,
      title: "ERP & Business Solutions",
      description: "Specializing in ERP software solutions for the textile industry, building comprehensive systems that streamline business operations and improve efficiency."
    },
    {
      icon: Users,
      title: "Team Leadership & Mentoring",
      description: "Leading cross-functional development teams, conducting code reviews, and mentoring junior developers to foster collaborative and productive environments."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="work-highlights" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-600 font-medium text-sm uppercase tracking-wide mb-4 block">What I Do</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Work Highlights
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Core responsibilities and achievements that drive business success through innovative technology solutions
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-blue-600 transition-colors">
                    {highlight.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
