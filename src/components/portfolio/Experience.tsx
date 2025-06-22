
export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-medium text-sm uppercase tracking-wide mb-4 block">Experience</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Professional Journey
          </h2>
        </div>

        {/* Experience Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            {/* Company Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">TECHstile</h3>
                <p className="text-xl text-blue-600 font-medium mb-1">Backend Developer & Site Reliability Engineer</p>
                <p className="text-slate-500">Surat, India</p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  Nov 2021 - Present
                </span>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-slate-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
                <div className="text-sm text-slate-600">Query Performance Boost</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600 mb-1">30%</div>
                <div className="text-sm text-slate-600">Team Productivity Increase</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600 mb-1">5</div>
                <div className="text-sm text-slate-600">Developers Mentored</div>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-slate-900 mb-4">Key Responsibilities:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Building scalable system architectures using Python Django & REST framework",
                  "Managing server infrastructure for seamless deployment and uptime",
                  "Implementing distributed locking using caching for data integrity",
                  "Developing dynamic PDF generation systems for invoices",
                  "Designing secure file upload systems for Amazon S3",
                  "Leading and mentoring a team of 5 backend developers"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1 text-sm">▶</span>
                    <p className="text-slate-700 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-4">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {["Python", "Django", "REST API", "MySQL", "PostgreSQL", "Redis", "RabbitMQ", "AWS", "Celery"].map((tech) => (
                  <span key={tech} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
