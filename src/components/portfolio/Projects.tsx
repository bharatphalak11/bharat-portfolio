
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const featuredProjects = [
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
    }
  ];

  const additionalProjects = [
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
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <motion.div 
      className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
      variants={itemVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Project Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
            {project.duration}
          </span>
        </div>
      </div>

      {/* Project Description */}
      <p className="text-slate-600 mb-6 leading-relaxed text-lg">
        {project.description}
      </p>

      {/* Achievements */}
      <div className="mb-6">
        <h4 className="font-semibold text-slate-900 mb-3">Key Achievements:</h4>
        <div className="grid md:grid-cols-2 gap-3">
          {project.achievements.map((achievement: string, achIndex: number) => (
            <motion.div 
              key={achIndex} 
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: achIndex * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 mr-3 mt-1">✓</span>
              <p className="text-slate-700 text-sm">{achievement}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div>
        <h4 className="font-semibold text-slate-900 mb-3">Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string, techIndex: number) => (
            <motion.span 
              key={techIndex} 
              className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors duration-200"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: techIndex * 0.05, duration: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-slate-50">
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Featured Work
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Innovative solutions that demonstrate technical expertise and problem-solving capabilities
          </p>
        </motion.div>

        {/* Featured Projects - Always Visible */}
        <motion.div 
          className="space-y-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>

        {/* Additional Projects (Expandable) */}
        <AnimatePresence>
          {showAllProjects && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <motion.div 
                className="space-y-8 mb-8"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                {additionalProjects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} />
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* View More Button */}
        <div className="text-center">
          <motion.button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAllProjects ? "Show Less" : "View More Projects"}
          </motion.button>
        </div>
      </div>
    </section>
  );
};
