
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const allProjects = [
    {
      title: "Notification System",
      duration: "Jan 2024 - Mar 2024",
      description: "Built a scalable, independent notification system supporting multiple channels with 100% reliability.",
      technologies: ["Celery", "RabbitMQ", "AWS", "SSE Stream", "Telebot", "MessageBird", "Redis", "MySQL"],
      achievements: [
        "Developed trigger management for seamless ERP integration",
        "Built robust billing mechanism based on daily usage",
        "Configured Uwsgi and Asgi servers for real-time delivery",
        "Achieved 100% notification delivery reliability"
      ]
    },
    {
      title: "Async Task Recovery System",
      duration: "May 2022 - July 2022",
      description: "Developed a comprehensive system to capture, log, and retry failed Celery tasks automatically.",
      technologies: ["Django", "Celery", "RabbitMQ", "MySQL"],
      achievements: [
        "Captured detailed failure information and tracebacks",
        "Enabled rapid debugging with clear task failure traces",
        "Implemented automated rerun mechanism",
        "Enhanced overall system reliability and performance"
      ]
    },
    {
      title: "Milk Distributor App",
      duration: "May 2021 - Oct 2021",
      description: "Developed a comprehensive Android application for large milk distributors.",
      technologies: ["Django", "PostgreSQL", "Firebase", "Flutter", "Heroku"],
      achievements: [
        "Implemented customer service and product management",
        "Built order processing and online billing systems",
        "Improved customer satisfaction with user-friendly interface",
        "Designed for high-volume transaction handling"
      ]
    },
    {
      title: "E-Commerce Platform",
      duration: "Mar 2023 - Jun 2023",
      description: "Built a full-featured e-commerce platform with advanced inventory management and payment processing.",
      technologies: ["Django", "React", "PostgreSQL", "Stripe", "Docker", "AWS"],
      achievements: [
        "Integrated multiple payment gateways",
        "Implemented real-time inventory tracking",
        "Built comprehensive admin dashboard",
        "Achieved 99.9% uptime with load balancing"
      ]
    },
    {
      title: "Data Analytics Dashboard",
      duration: "Sep 2022 - Dec 2022",
      description: "Created an interactive dashboard for business intelligence and data visualization.",
      technologies: ["Django", "Chart.js", "PostgreSQL", "Redis", "Celery"],
      achievements: [
        "Processed millions of data points efficiently",
        "Created real-time data visualization",
        "Implemented automated report generation",
        "Reduced data processing time by 80%"
      ]
    },
    {
      title: "CRM System",
      duration: "Jan 2023 - Apr 2023",
      description: "Developed a customer relationship management system for sales teams.",
      technologies: ["Django", "Angular", "MySQL", "RESTful APIs"],
      achievements: [
        "Automated lead tracking and follow-ups",
        "Integrated email marketing campaigns",
        "Built comprehensive reporting system",
        "Increased sales team productivity by 40%"
      ]
    }
  ];

  const initialProjectsCount = 3;
  const displayedProjects = showAllProjects ? allProjects : allProjects.slice(0, initialProjectsCount);

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
    <section id="projects" className="py-24 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-600 font-medium text-sm uppercase tracking-wide mb-4 block">Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions that demonstrate technical expertise and problem-solving capabilities
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                initial={index >= initialProjectsCount ? { opacity: 0, y: 30 } : false}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Project Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                      {project.duration}
                    </span>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-1">✓</span>
                        <p className="text-muted-foreground text-sm">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        {allProjects.length > initialProjectsCount && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105"
            >
              {showAllProjects ? 'View Less' : `View ${allProjects.length - initialProjectsCount} More Projects`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
