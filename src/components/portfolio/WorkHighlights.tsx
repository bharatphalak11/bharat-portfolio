
import { motion } from "framer-motion";

export const WorkHighlights = () => {
  const highlights = [
    {
      icon: "💻",
      title: "Building High-Performance Applications ",
      description: "Specialized in developing responsive and secure applications using frameworks like \
      Django, Flask, and FastAPI. Each project is engineered for performance, scalability, and long-term maintainability. Built end-to-end REST APIs designed to support high-demand, distributed systems."
    },
    {
      icon: "🔧",
      title: "Backend & Automation Engineering", 
      description: "Built AI-powered automation systems, engineered task scheduling scripts, \
      and worked extensively with data cleaning, data visualizations, and end-to-end data \
      engineering workflows. I also design efficient ETL processes to streamline data movement \
      and transformation ensuring your backend is not just functional, but intelligent \
      and future-ready."
    },
    {
      icon: "☁️",
      title: "Deployment & DevOps",
      description: "Managed end-to-end deployment of applications on AWS and Azure using \
      Docker, Gunicorn, and Nginx for production-grade performance. I implement CI/CD pipelines \
      to enable seamless, zero-downtime updates and ensure rapid, reliable delivery across environments."
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="work-highlights" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
            Work Highlights
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
            Specialized in backend development and designing scalable, efficient system architectures.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="bg-slate-50 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                {highlight.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">
                {highlight.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
