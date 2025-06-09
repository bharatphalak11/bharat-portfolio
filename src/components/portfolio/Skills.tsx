
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Skills = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);

  const coreSkills = [
    { name: "Python", icon: "🐍" },
    { name: "Django", icon: "🎯" },
    { name: "TypeScript", icon: "📘" },
    { name: "Django REST", icon: "🔗" },
    { name: "Angular", icon: "🅰️" },
    { name: "MySQL", icon: "🗄️" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "AWS", icon: "☁️" }
  ];

  const additionalSkills = [
    { name: "Redis", icon: "🔴" },
    { name: "Jenkins", icon: "🔧" },
    { name: "Heroku", icon: "🚀" },
    { name: "RabbitMQ", icon: "🐰" },
    { name: "Celery", icon: "🌿" },
    { name: "Elasticsearch", icon: "🔍" },
    { name: "GitHub", icon: "🐙" },
    { name: "PyCharm", icon: "💡" },
    { name: "VSCode", icon: "💻" },
    { name: "Sentry", icon: "🔍" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  const additionalVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-600 font-medium text-sm uppercase tracking-wide mb-4 block">Skills</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
            Technical Expertise
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
            Comprehensive skills in backend development, system architecture, and team leadership
          </p>
        </motion.div>

        {/* Core Skills Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {coreSkills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="bg-slate-50 rounded-xl p-3 sm:p-4 hover:bg-slate-100 hover:shadow-md transition-all duration-300 text-center group cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="font-medium text-slate-900 text-xs sm:text-sm">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills (Expandable) */}
        <AnimatePresence>
          {showAllSkills && (
            <motion.div
              variants={additionalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="overflow-hidden"
            >
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 mb-8"
                variants={containerVariants}
              >
                {additionalSkills.map((skill, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-slate-50 rounded-xl p-3 sm:p-4 hover:bg-slate-100 hover:shadow-md transition-all duration-300 text-center group cursor-pointer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="font-medium text-slate-900 text-xs sm:text-sm">{skill.name}</h3>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* View More Button */}
        <div className="text-center">
          <motion.button
            onClick={() => setShowAllSkills(!showAllSkills)}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAllSkills ? "Show Less" : "View More Skills"}
          </motion.button>
        </div>
      </div>
    </section>
  );
};
