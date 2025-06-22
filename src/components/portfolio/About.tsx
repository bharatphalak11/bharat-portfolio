
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 font-medium text-sm uppercase tracking-wide">About Me</span>
            </motion.div>
            
            <div className="space-y-4 sm:space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Dedicated Software Engineer with over 3+ years of hands-on experience specializing
                in ERP software solutions. Proficient in designing and implementing robust, scalable
                systems using Python, Django, other frameworks, and modern distributed architectures.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Throughout my career, I have led cross-functional teams, increased database performance, 
                and successfully migrated critical systems with zero data loss.
                I believe in writing clean, maintainable code and encouraging teamwork
                and productive development environments.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Outside of coding, I enjoy exploring emerging technologies such as 
                Artificial Intelligence, MCP servers, cloud services,
                as well as mentoring fellow developers to support their professional growth..
              </motion.p>
            </div>
          </motion.div>

          {/* Right Content - Image/Visual */}
          <motion.div 
            className="flex justify-center lg:justify-end mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div 
                className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl flex items-center justify-center shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="/1743609765447.webp"
                  alt="Self Image"
                  loading="lazy"
                  className="w-70 sm:w-90 rounded-3xl shadow-2xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0] 
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: 0,
                  }}
                />
              </motion.div>
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-blue-200 rounded-full opacity-50"
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-6 -left-6 w-24 h-24 sm:w-32 sm:h-32 bg-blue-100 rounded-full opacity-30"
                animate={{ 
                  y: [0, 10, 0],
                  x: [0, -5, 0],
                  scale: [1, 0.9, 1] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  repeatType: "reverse",
                  delay: 1 
                }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
