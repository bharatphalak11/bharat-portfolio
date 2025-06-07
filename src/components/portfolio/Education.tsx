
export const Education = () => {
  // Education data for easy management
  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Gokhale Education Society's R. H. Sapat College of Engineering, Management Studies and Research",
      location: "Nashik",
      duration: "June 2019 - Aug 2022",
      grade: "8.54 CGPA",
      type: "Master's Degree",
      description: "Advanced coursework in software engineering, system design, and computer applications with focus on practical implementation."
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "S.M. Arts, Commerce & Science College",
      location: "Muktainagar",
      duration: "June 2016 - May 2019",
      grade: "76%",
      type: "Bachelor's Degree",
      description: "Foundation in computer science principles, programming languages, and software development methodologies."
    }
  ];

  // Additional certifications and learning
  const additionalLearning = [
    {
      title: "System Design & Architecture",
      description: "Advanced concepts in distributed systems and microservices",
      icon: "🏗️"
    },
    {
      title: "Cloud Technologies",
      description: "AWS services, deployment strategies, and cloud infrastructure",
      icon: "☁️"
    },
    {
      title: "Performance Optimization",
      description: "Database tuning, query optimization, and system performance",
      icon: "⚡"
    },
    {
      title: "Team Leadership",
      description: "Project management, mentoring, and agile methodologies",
      icon: "👥"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Education & Learning
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Strong academic foundation combined with continuous professional development
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>

          {educationData.map((education, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline Dot */}
              <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              
              {/* Education Card */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'}`}>
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg shadow-lg p-6 border border-slate-200">
                  {/* Degree and Duration */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-1">{education.degree}</h3>
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        {education.type}
                      </span>
                    </div>
                    <span className="text-slate-500 text-sm font-medium">
                      {education.duration}
                    </span>
                  </div>

                  {/* Institution Details */}
                  <div className="mb-4">
                    <p className="font-semibold text-slate-700 mb-1">{education.institution}</p>
                    <p className="text-slate-600 text-sm">{education.location}</p>
                  </div>

                  {/* Grade */}
                  <div className="mb-4">
                    <div className="flex items-center">
                      <span className="text-slate-600 mr-2">Grade:</span>
                      <span className="bg-green-100 text-green-800 text-sm font-semibold px-2 py-1 rounded">
                        {education.grade}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {education.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Learning & Skills */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">Continuous Learning & Development</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalLearning.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg shadow-lg p-6 border border-slate-200 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="font-semibold text-slate-800 mb-3">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Achievements */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 border border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 text-center mb-6">Academic Excellence</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">8.54</div>
              <div className="text-slate-600 font-medium">CGPA in MCA</div>
              <p className="text-slate-500 text-sm mt-2">Consistent high performance throughout master's program</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">76%</div>
              <div className="text-slate-600 font-medium">BCA Percentage</div>
              <p className="text-slate-500 text-sm mt-2">Strong foundation in computer applications and programming</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
