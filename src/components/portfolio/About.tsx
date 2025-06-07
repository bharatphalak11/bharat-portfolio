
export const About = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <span className="text-blue-600 font-medium text-sm uppercase tracking-wide">About Me</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
              Building scalable systems with precision and passion
            </h2>
            
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                I'm a dedicated backend developer with over 3 years of hands-on experience 
                specializing in ERP software solutions for the textile industry. My expertise 
                lies in building robust, scalable systems using Python, Django, and modern 
                distributed architectures.
              </p>
              
              <p>
                Throughout my career, I've led cross-functional teams, optimized database 
                performance by 100%, and successfully migrated critical systems with zero 
                data loss. I believe in writing clean, maintainable code and fostering 
                collaborative development environments.
              </p>
              
              <p>
                When I'm not coding, I'm exploring new technologies like Docker and 
                Kubernetes, or mentoring fellow developers to help them grow in their careers.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">30%</div>
                <div className="text-sm text-slate-600">Team Productivity Increase</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">Zero</div>
                <div className="text-sm text-slate-600">Data Loss in Migrations</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="text-8xl text-white">👨‍💻</div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
