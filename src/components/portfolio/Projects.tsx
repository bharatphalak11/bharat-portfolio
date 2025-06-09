
export const Projects = () => {
  const projects = [
    {
      title: "Notification System",
      duration: "Jan 2024 - Mar 2024",
      description: "Built a scalable, independent notification system supporting multiple channels with 100% reliability.",
      technologies: ["Celery", "RabbitMQ", "AWS", "SSE Stream", "Telebot", "MessageBird", "Redis", "MySQL"],
      achievements: [
        "Developed trigger management for seamless ERP integration",
        "Built robust billing mechanism based on daily usage",
        "Configured Uwsgi and Asgi servers for real-time delivery",
        "Achieved 100% notification delivery reliability"
      ]
    },
    {
      title: "Async Task Recovery System",
      duration: "May 2022 - July 2022",
      description: "Developed a comprehensive system to capture, log, and retry failed Celery tasks automatically.",
      technologies: ["Django", "Celery", "RabbitMQ", "MySQL"],
      achievements: [
        "Captured detailed failure information and tracebacks",
        "Enabled rapid debugging with clear task failure traces",
        "Implemented automated rerun mechanism",
        "Enhanced overall system reliability and performance"
      ]
    },
    {
      title: "Milk Distributor App",
      duration: "May 2021 - Oct 2021",
      description: "Developed a comprehensive Android application for large milk distributors.",
      technologies: ["Django", "PostgreSQL", "Firebase", "Flutter", "Heroku"],
      achievements: [
        "Implemented customer service and product management",
        "Built order processing and online billing systems",
        "Improved customer satisfaction with user-friendly interface",
        "Designed for high-volume transaction handling"
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-medium text-sm uppercase tracking-wide mb-4 block">Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Featured Work
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Innovative solutions that demonstrate technical expertise and problem-solving capabilities
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              {/* Project Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {project.duration}
                  </span>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                {project.description}
              </p>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 mb-3">Key Achievements:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {project.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">✓</span>
                      <p className="text-slate-700 text-sm">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
