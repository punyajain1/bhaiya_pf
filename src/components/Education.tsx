const education = [
  {
    institution: "Purdue University, Daniels School of Business",
    degree: "Master of Business and Technology",
    period: "2019—2026",
    expectedGraduation: "Expected May 2026",
    cgpa: "Academic foundation in AI/ML and tech-driven business strategy through MS coursework",
    location: "West Lafayette, IN"
  },
  {
    institution: "Guru Gobind Singh Indraprastha University",
    degree: "Bachelor of Technology in Information Technology",
    period: "June 2015 - May 2019",
    expectedGraduation: "Completed May 2019",
    cgpa: "8.08/10",
    location: "Delhi, India"
  }
];

export default function Education() {
  return (
    <section className="mb-8 sm:mb-12">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-black dark:text-[#f0f6fc]">Education</h2>
      
      <div className="space-y-3 sm:space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="ml-2 sm:ml-4 border-l-2 border-gray-100 dark:border-[#30363d] pl-3 sm:pl-4 space-y-2">
            <h4 className="font-bold text-base sm:text-lg text-black dark:text-[#f0f6fc]">{edu.institution}</h4>
            <p className="text-sm sm:text-md font-medium text-zinc-900 dark:text-[#f0f6fc]">{edu.degree}</p>
            <div className="text-xs sm:text-sm text-zinc-600 dark:text-[#8b949e] space-y-1">
              <p><strong>Period:</strong> {edu.period}</p>
              {edu.expectedGraduation.includes("Expected") ? (
                <p><strong>Expected Graduation:</strong> {edu.expectedGraduation}</p>
              ) : (
                <p><strong>Graduation:</strong> {edu.expectedGraduation}</p>
              )}
              <p><strong>CGPA/Details:</strong> {edu.cgpa}</p>
              <p><strong>Location:</strong> {edu.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
