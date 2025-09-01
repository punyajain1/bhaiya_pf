const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "",
    url: "https://aws.amazon.com/certification/certified-cloud-practitioner/"
  },
  {
    name: "Google Project Management Professional Certificate",
    issuer: "Google",
    date: "2023",
    credentialId: "",
    url: "https://www.coursera.org/professional-certificates/google-project-management"
  },
  {
    name: "ACM ICPC Regional Qualifier",
    issuer: "ACM",
    date: "2016 & 2018",
    credentialId: "",
    url: "https://drive.google.com/file/d/1Y5QqRFMLorUSOB5uadf7b2z5bVUB4wMn/view"
  },
  {
    name: "Teaching Assistant Programming & DSA, Coding Blocks",
    issuer: "Coding Blocks",
    date: "2019",
    credentialId: "",
    url: "https://drive.google.com/file/d/1Cf0A-iSpMMK0S518V2ak0ZTM_G6W3N2M/view"
  }
];

export default function Certifications() {
  return (
    <section className="mb-8 sm:mb-12">
      <h2 className="text-xl font-bold mb-4 sm:mb-6 text-black dark:text-[#f0f6fc]">Certifications & Honors</h2>
      
      <div className="space-y-3 sm:space-y-4">
        {certifications.map((cert, index) => (
          <div key={index} className="ml-2 sm:ml-4 border-l-2 border-gray-100 dark:border-[#30363d] pl-3 sm:pl-4 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h4 className="font-medium text-black dark:text-[#f0f6fc]">{cert.name}</h4>
              <span className="text-xs sm:text-sm text-zinc-600 dark:text-[#8b949e]">{cert.date}</span>
            </div>
            <p className="text-sm text-zinc-700 dark:text-[#8b949e]">
              <strong>Issuer:</strong> {cert.issuer}
            </p>
            {cert.url && (
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Certificate →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
