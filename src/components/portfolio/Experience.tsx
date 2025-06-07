
export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Building scalable backend systems and leading development teams
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>

          {/* Experience Item */}
          <div className="relative mb-12">
            {/* Timeline Dot */}
            <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
            
            {/* Experience Card */}
            <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border border-slate-200">
                {/* Company and Duration */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">TECHstile</h3>
                    <p className="text-blue-600 font-medium">Backend Developer & Site Reliability Engineer</p>
                    <p className="text-slate-500 text-sm">Surat, India</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    Nov 2021 - Present
                  </span>
                </div>

                {/* Key Responsibilities */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-800 mb-3">Key Responsibilities & Achievements:</h4>
                  
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <p className="text-slate-700 text-sm">
                        Understanding and implementing complex requirements for business-critical features
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <p className="text-slate-700 text-sm">
                        Building scalable and robust system architectures and APIs using Python Django & REST framework
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <p className="text-slate-700 text-sm">
                        Managing server infrastructure to ensure seamless deployment and uptime
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <p className="text-slate-700 text-sm">
                        Implementing distributed locking for files and critical code using caching, ensuring data integrity
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <p className="text-slate-700 text-sm">
                        Developing dynamic PDF generation system for invoices with accuracy and customization
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <p className="text-slate-700 text-sm">
                        Designing and implementing secure file upload system for Amazon S3
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="mt-6">
                  <h4 className="font-semibold text-slate-800 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Django", "REST API", "MySQL", "PostgreSQL", "Redis", "RabbitMQ", "AWS", "Celery"].map((tech) => (
                      <span key={tech} className="bg-slate-100 text-slate-700 text-xs font-medium px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-slate-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-slate-600 font-medium">Query Performance Improvement</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-slate-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">30%</div>
            <div className="text-slate-600 font-medium">Team Productivity Increase</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-slate-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">0</div>
            <div className="text-slate-600 font-medium">Data Loss in Migrations</div>
          </div>
        </div>
      </div>
    </section>
  );
};
