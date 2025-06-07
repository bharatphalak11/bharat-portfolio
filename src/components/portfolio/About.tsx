
export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Dedicated backend developer with expertise in building robust, scalable systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center shadow-lg">
              <div className="text-6xl text-blue-600">👨‍💻</div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
              Professional Summary
            </h3>
            
            {/* Key Highlights */}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-slate-700">
                  <strong>3+ years</strong> of hands-on experience in backend development, specializing in ERP software solutions for the textile industry
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-slate-700">
                  Expertise in <strong>Python, Django, and microservices architecture</strong> with focus on scalability and performance
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-slate-700">
                  Led and mentored a team of <strong>5 backend developers</strong>, improving productivity by 30%
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-slate-700">
                  Achieved <strong>100% improvement</strong> in database query response times through optimization
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-slate-700">
                  Successfully executed ERP data migrations with <strong>zero data loss</strong>
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Core Values</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl mb-2">🚀</div>
                  <div className="text-sm font-medium text-slate-700">Innovation</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="text-sm font-medium text-slate-700">Performance</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl mb-2">👥</div>
                  <div className="text-sm font-medium text-slate-700">Leadership</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
