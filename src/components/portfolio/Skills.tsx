
export const Skills = () => {
  const technicalSkills = [
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
    { name: "Sentry", icon: "🔍" }
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-blue-600 font-medium text-sm uppercase tracking-wide mb-4 block">Skills</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
            Technical Expertise
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
            Comprehensive skills in backend development, system architecture, and team leadership
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {technicalSkills.map((skill, index) => (
            <div key={index} className="bg-slate-50 rounded-xl p-3 sm:p-4 hover:bg-slate-100 hover:shadow-md transition-all duration-300 text-center group">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="font-medium text-slate-900 text-xs sm:text-sm">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
