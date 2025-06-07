
export const Skills = () => {
  // Organized skill categories for better presentation
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "TypeScript"],
      icon: "💻"
    },
    {
      category: "Frameworks & Libraries",
      skills: ["Django", "Django REST Framework", "Angular"],
      icon: "🛠️"
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL", "Redis"],
      icon: "🗄️"
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS (EC2, RDS, S3)", "Jenkins", "Heroku"],
      icon: "☁️"
    },
    {
      category: "Message Queues & Caching",
      skills: ["RabbitMQ", "Celery", "Redis", "Elasticsearch"],
      icon: "⚡"
    },
    {
      category: "Development Tools",
      skills: ["GitHub", "PyCharm", "VSCode", "Sentry"],
      icon: "🔧"
    },
    {
      category: "Currently Learning",
      skills: ["Docker", "Kubernetes (k8s)"],
      icon: "📚"
    },
    {
      category: "Practices & Methodologies",
      skills: ["Code Review", "Agile", "Performance Optimization", "System Design"],
      icon: "📋"
    }
  ];

  // Core competencies with proficiency levels
  const coreCompetencies = [
    { skill: "Backend Development", level: 95 },
    { skill: "System Architecture", level: 90 },
    { skill: "Database Optimization", level: 92 },
    { skill: "API Development", level: 94 },
    { skill: "Team Leadership", level: 88 },
    { skill: "Performance Tuning", level: 91 }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive expertise in backend development, system architecture, and team leadership
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              {/* Category Header */}
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="font-semibold text-slate-800 text-sm leading-tight">
                  {category.category}
                </h3>
              </div>
              
              {/* Skills List */}
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-slate-50 text-slate-700 text-center py-2 px-3 rounded text-sm font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies with Progress Bars */}
        <div className="bg-white rounded-lg shadow-lg p-8 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">Core Competencies</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {coreCompetencies.map((competency, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-700">{competency.skill}</span>
                  <span className="text-blue-600 font-semibold">{competency.level}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${competency.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills Highlights */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-slate-200">
            <div className="text-3xl mb-4">🚀</div>
            <h4 className="font-semibold text-slate-800 mb-2">Performance Expert</h4>
            <p className="text-slate-600 text-sm">
              Achieved 100% improvement in database query response times through optimization techniques
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-slate-200">
            <div className="text-3xl mb-4">👥</div>
            <h4 className="font-semibold text-slate-800 mb-2">Team Leadership</h4>
            <p className="text-slate-600 text-sm">
              Led and mentored 5 backend developers, improving team productivity by 30%
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-slate-200">
            <div className="text-3xl mb-4">🔧</div>
            <h4 className="font-semibold text-slate-800 mb-2">System Architecture</h4>
            <p className="text-slate-600 text-sm">
              Designed and implemented scalable microservices architectures for high-volume applications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
