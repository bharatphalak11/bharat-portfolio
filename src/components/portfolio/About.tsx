
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span className="text-blue-600 font-medium text-sm uppercase tracking-wide">About Me</span>
            </div>
            
            <div className="space-y-4 sm:space-y-6 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                I'm a dedicated software engineer with over 3 years of hands-on experience 
                specializing in ERP software solutions for the textile industry. My expertise 
                lies in building robust, scalable systems using Python, Django, and modern 
                distributed architectures.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Throughout my career, I've led cross-functional teams, optimized database 
                performance by 100%, and successfully migrated critical systems with zero 
                data loss. I believe in writing clean, maintainable code and fostering 
                collaborative development environments.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                When I'm not coding, I'm exploring new technologies like Docker and 
                Kubernetes, or mentoring fellow developers to help them grow in their careers.
              </motion.p>
            </div>
          </motion.div>

          {/* Right Content - Image/Visual */}
          <motion.div 
            className="flex justify-center lg:justify-end mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div 
                className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl flex items-center justify-center shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-6xl sm:text-8xl text-white">👨‍💻</div>
              </motion.div>
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-blue-200 dark:bg-blue-800 rounded-full opacity-50"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-6 -left-6 w-24 h-24 sm:w-32 sm:h-32 bg-blue-100 dark:bg-blue-900 rounded-full opacity-30"
                animate={{ scale: [1, 1.1, 1], rotate: [360, 180, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
