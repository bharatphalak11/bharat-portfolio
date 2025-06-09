
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Skills = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);

  const allSkills = [
    { name: "Python", icon: "🐍" },
    { name: "TypeScript", icon: "📘" },
    { name: "Django", icon: "🎯" },
    { name: "Django REST", icon: "🔗" },
    { name: "Angular", icon: "🅰️" },
    { name: "MySQL", icon: "🗄️" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Redis", icon: "🔴" },
    { name: "AWS", icon: "☁️" },
    { name: "Jenkins", icon: "🔧" },
    { name: "Heroku", icon: "🚀" },
    { name: "RabbitMQ", icon: "🐰" },
    { name: "Celery", icon: "🌿" },
    { name: "Elasticsearch", icon: "🔍" },
    { name: "GitHub", icon: "🐙" },
    { name: "PyCharm", icon: "💡" },
    { name: "VSCode", icon: "💻" },
    { name: "Sentry", icon: "🔍" },
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "⚙️" },
    { name: "GraphQL", icon: "📊" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "💚" },
    { name: "MongoDB", icon: "🍃" }
  ];

  const initialSkillsCount = 12;
  const displayedSkills = showAllSkills ? allSkills : allSkills.slice(0, initialSkillsCount);

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Technical Expertise
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Comprehensive skills in backend development, system architecture, and team leadership
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence>
            {displayedSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                initial={index >= initialSkillsCount ? { opacity: 0, scale: 0.8 } : false}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card rounded-xl p-3 sm:p-4 hover:shadow-md transition-all duration-300 text-center group border border-border"
              >
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="font-medium text-foreground text-xs sm:text-sm">{skill.name}</h3>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        {allSkills.length > initialSkillsCount && (
          <motion.div 
            className="text-center mt-8 sm:mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setShowAllSkills(!showAllSkills)}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105"
            >
              {showAllSkills ? 'View Less' : `View ${allSkills.length - initialSkillsCount} More Skills`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
