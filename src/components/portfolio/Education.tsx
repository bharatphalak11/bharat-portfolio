
export const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Gokhale Education Society's R. H. Sapat College",
      location: "Nashik",
      duration: "June 2019 - Aug 2022",
      grade: "8.54 CGPA",
      description: "Advanced coursework in software engineering, system design, and computer applications."
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "S.M. Arts, Commerce & Science College",
      location: "Muktainagar",
      duration: "June 2016 - May 2019",
      grade: "76%",
      description: "Foundation in computer science principles and programming languages."
    }
  ];

  return (
    <section id="education" className="py-24 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-medium text-sm uppercase tracking-wide mb-4 block">Education</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Academic Background
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Strong academic foundation in computer science and applications
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {educationData.map((education, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{education.degree}</h3>
                  <p className="text-blue-600 font-medium mb-1">{education.institution}</p>
                  <p className="text-slate-500 text-sm">{education.location}</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {education.duration}
                  </span>
                  <div className="mt-2">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      {education.grade}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-slate-600 leading-relaxed">{education.description}</p>
            </div>
          ))}
        </div>

        {/* Learning Focus */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Currently Learning</h3>
          <div className="flex justify-center gap-4">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">Docker</span>
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">Kubernetes</span>
          </div>
        </div>
      </div>
    </section>
  );
};
