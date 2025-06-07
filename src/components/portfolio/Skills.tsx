
export const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "TypeScript"],
      icon: "💻"
    },
    {
      category: "Frameworks",
      skills: ["Django", "Django REST", "Angular"],
      icon: "🛠️"
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL", "Redis"],
      icon: "🗄️"
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Jenkins", "Heroku"],
      icon: "☁️"
    },
    {
      category: "Message Queues",
      skills: ["RabbitMQ", "Celery", "Elasticsearch"],
      icon: "⚡"
    },
    {
      category: "Tools",
      skills: ["GitHub", "PyCharm", "VSCode", "Sentry"],
      icon: "🔧"
    }
  ];

  const coreCompetencies = [
    { skill: "Backend Development", level: 95 },
    { skill: "System Architecture", level: 90 },
    { skill: "Database Optimization", level: 92 },
    { skill: "API Development", level: 94 },
    { skill: "Team Leadership", level: 88 },
    { skill: "Performance Tuning", level: 91 }
  ];

  return (
    <section id="skills" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-medium text-sm uppercase tracking-wide mb-4 block">Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Technical Expertise
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive skills in backend development, system architecture, and team leadership
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-6 hover:bg-slate-100 transition-colors">
              <div className="text-center mb-4">
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-4">{category.category}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-white text-slate-700 text-center py-2 px-3 rounded-lg text-sm font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies */}
        <div className="bg-slate-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Core Competencies</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {coreCompetencies.map((competency, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-800">{competency.skill}</span>
                  <span className="text-blue-600 font-semibold">{competency.level}%</span>
                </div>
                
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${competency.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
