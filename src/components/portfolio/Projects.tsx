
export const Projects = () => {
  // Project data array for easy management
  const projects = [
    {
      title: "Notification System",
      duration: "Jan 2024 - Mar 2024",
      description: "Built a scalable, independent notification system supporting multiple channels (Telegram, WhatsApp, email, In-ERP notifications) with 100% reliability to prevent cascading failures.",
      technologies: ["Celery", "RabbitMQ", "AWS (EC2, S3)", "SSE Stream", "Telebot", "MessageBird", "Redis", "MySQL"],
      achievements: [
        "Developed trigger management screen for seamless ERP integration",
        "Built robust billing mechanism based on daily usage",
        "Configured Uwsgi and Asgi servers for real-time SSE stream delivery",
        "Achieved 100% notification delivery reliability"
      ],
      type: "Backend System"
    },
    {
      title: "Capture Async Failed Task System",
      duration: "May 2022 - July 2022",
      description: "Developed a comprehensive system to capture, log, and automatically retry failed Celery asynchronous tasks, significantly improving system reliability and debugging capabilities.",
      technologies: ["Django", "Celery", "RabbitMQ", "MySQL"],
      achievements: [
        "Captured detailed failure information including exceptions and tracebacks",
        "Enabled rapid debugging with clear task failure traces",
        "Implemented automated rerun mechanism for failed tasks",
        "Enhanced overall system reliability and performance"
      ],
      type: "Error Handling"
    },
    {
      title: "Milk Distributor Application",
      duration: "May 2021 - Oct 2021",
      description: "Developed a comprehensive Android application for large milk distributors to enhance customer relationships and streamline business operations through mobile technology.",
      technologies: ["Django", "PostgreSQL", "Firebase", "Flutter", "Heroku"],
      achievements: [
        "Implemented customer service and product management modules",
        "Built order processing and online billing systems",
        "Improved customer satisfaction through user-friendly interface",
        "Designed for high-volume transaction handling"
      ],
      type: "Mobile Application"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Key Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Innovative solutions that demonstrate technical expertise and problem-solving capabilities
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg shadow-lg border border-slate-200 overflow-hidden">
              <div className="p-8">
                {/* Project Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{project.title}</h3>
                    <div className="flex items-center space-x-4">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        {project.duration}
                      </span>
                      <span className="bg-slate-100 text-slate-700 text-sm font-medium px-3 py-1 rounded-full">
                        {project.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-slate-700 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Achievements */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-3">Key Achievements:</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {project.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">✓</span>
                        <p className="text-slate-700 text-sm">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Used */}
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-white text-slate-700 text-sm font-medium px-3 py-1 rounded-md border border-slate-200 shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">
            Interested in learning more about these projects or discussing new opportunities?
          </p>
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
};
