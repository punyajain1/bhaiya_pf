const programmingLanguages = [
  { name: "Python", url: "https://www.python.org/" },
  { name: "Java", url: "https://www.java.com/" },
  { name: "C/C++", url: "https://isocpp.org/" },
  { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "TypeScript", url: "https://www.typescriptlang.org/" },
];

const frameworksAndLibraries = [
  { name: "Node.js", url: "https://nodejs.org/" },
  { name: "React", url: "https://react.dev/" },
  { name: "Spring Boot", url: "https://spring.io/projects/spring-boot" },
  { name: "TensorFlow", url: "https://www.tensorflow.org/" },
  { name: "PyTorch", url: "https://pytorch.org/" },
  { name: "LangChain", url: "https://js.langchain.com/" },
  { name: "Express", url: "https://expressjs.com/" },
  { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
];

const toolsAndTechnologies = [
  { name: "AWS", url: "https://aws.amazon.com/" },
  { name: "GCP", url: "https://cloud.google.com/" },
  { name: "Azure", url: "https://azure.microsoft.com/" },
  { name: "Docker", url: "https://www.docker.com/" },
  { name: "Kubernetes", url: "https://kubernetes.io/" },
  { name: "Git", url: "https://git-scm.com/" },
  { name: "GitHub", url: "https://github.com/" },
  { name: "Jenkins", url: "https://www.jenkins.io/" },
  { name: "GitHub Actions", url: "https://github.com/features/actions" },
  { name: "Jira", url: "https://www.atlassian.com/software/jira" },
  { name: "Confluence", url: "https://www.atlassian.com/software/confluence" },
  { name: "JUnit", url: "https://junit.org/" },
  { name: "CloudWatch", url: "https://aws.amazon.com/cloudwatch/" }
];

const databases = [
  { name: "PostgreSQL", url: "https://www.postgresql.org/" },
  { name: "MySQL", url: "https://www.mysql.com/" },
  { name: "MongoDB", url: "https://www.mongodb.com/" },
  { name: "DynamoDB", url: "https://aws.amazon.com/dynamodb/" },
  { name: "Redis", url: "https://redis.io/" },
];

export default function Stack() {
  const renderTechSection = (title: string, technologies: { name: string; url: string }[]) => (
    <div className="mb-4 sm:mb-6">
      <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-700 dark:text-[#f0f6fc]">{title}</h3>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {technologies.map((tech) => (
          <a
            key={tech.name}
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm bg-gray-100 hover:bg-gray-200 dark:bg-[#21262d] dark:hover:bg-[#30363d] dark:text-[#f0f6fc] rounded-full transition-colors"
          >
            {tech.name}
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <section className="mb-8 sm:mb-12">
      <h2 className="text-xl font-bold mb-4 sm:mb-6 text-black dark:text-[#f0f6fc]">Stack</h2>
      
      {renderTechSection("Programming Languages", programmingLanguages)}
      {renderTechSection("Frameworks & Libraries", frameworksAndLibraries)}
      {renderTechSection("Databases", databases)}
      {renderTechSection("Tools & Technologies", toolsAndTechnologies)}
    </section>
  );
}
