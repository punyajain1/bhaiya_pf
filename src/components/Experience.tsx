const experiences = [
  {
    company: "Starportal Software LLP",
    positions: [
      {
        title: "Engineering Lead (Founder Role)",
        type: "Full-time",
        period: "Dec 2023 - July 2024",
        current: false,
        description: [
          "Designed and implemented distributed transaction infrastructure across 10+ networks, enabling fault-tolerant messaging and high-throughput APIs that processed 1M+ reqs/day",
          "Achieved sub-100ms latency by engineering a WebSocket-based streaming layer for high-frequency trading data, enabling traders to execute orders faster and improve profitability",
          "Implemented secure authentication and platform hardening using TOTP, short-lived JWTs with RBAC, encrypted secrets, audit trails, and rate limits/abuse controls protecting trading actions and APIs end-to-end",
          "Architected cloud-native microservices on AWS, scaling to 250K+ and 50K+ MAU users, with real-time data pipelines"
        ],
        technologies: [
          "Python", "Java", "JavaScript", "TypeScript", "Node.js", "React", "AWS", "WebSocket", "Microservices"
        ]
      }
    ]
  },
  {
    company: "Trark Software Pvt Ltd",
    positions: [
      {
        title: "Lead Software Engineer",
        type: "Full-time", 
        period: "Nov 2022 - Dec 2023",
        current: false,
        description: [
          "Led the core backend architecture of a global guest platform for 2M+ users, building services with Node.js, Redis, Docker, and Kafka-based infrastructure to load 1B records and process 30K+ events/sec concurrently",
          "Engineered scalable onboarding flows and integration pipelines for 50+ apps as B2B partner, enabling a 6-week campaign that onboarded 1M+ users and drove $3M+ in quarterly revenue through fault-tolerant pipelines",
          "Built low-latency-based rewards system with eligibility checks, fraud/abuse controls, rate limits, and auditable payout workflows to improve guest completion and retention during peak traffic"
        ],
        technologies: [
          "Node.js", "Redis", "Docker", "Kafka", "PostgreSQL", "Microservices"
        ]
      }
    ]
  },
  {
    company: "Syndr LLC",
    positions: [
      {
        title: "Senior Software Developer",
        type: "Full-time",
        period: "Oct 2021 - Nov 2022", 
        current: false,
        description: [
          "Architected distributed backend systems in Python and Java, implementing service orchestration with Kubernetes, gRPC-based inter-service communication, and load balancing to support large concurrent users with high availability",
          "Implemented event-driven automation services, leveraging cron jobs, WebSockets, and cloud functions to execute 50K+ users and increase participation rates by 52%"
        ],
        technologies: [
          "Python", "Java", "Kubernetes", "gRPC", "WebSockets", "Cloud Functions"
        ]
      }
    ]
  },
  {
    company: "Ion Group",
    positions: [
      {
        title: "Software Developer",
        type: "Full-time",
        period: "June 2019 - Oct 2021",
        current: false,
        description: [
          "Enhanced low-latency trading systems by evolving TCP-based recovery protocol in C++, reducing master-slave sync time by 89%, and improved trading online for 2K+ per-session across for global banks",
          "Built an automated Linux benchmarking tool to compare and validate new system releases against previous versions by feeding high-volume log data, leveraging multithreading for parallel parsing, reducing manual analysis time by 80%",
          "Delivered 100+ CI/CD releases and automated pipelines for global banks, cutting incident response time by 60%"
        ],
        technologies: [
          "C++", "Linux", "TCP", "CI/CD", "Multithreading", "Performance Optimization"
        ]
      }
    ]
  }
];

export default function Experience() {
  return (
    <section className="mb-8 sm:mb-12">
      <h2 className="text-xl font-bold mb-4 sm:mb-6 text-black dark:text-[#f0f6fc]">Experience</h2>
      
      <div className="space-y-6 sm:space-y-8">
        {experiences.map((exp) => (
          <div key={exp.company} className="space-y-3 sm:space-y-4">
            <h3 className="text-lg font-semibold text-black dark:text-[#f0f6fc]">{exp.company}</h3>
            {exp.positions.map((position, index) => (
              <div key={index} className="ml-2 sm:ml-4 border-l-2 border-gray-200 dark:border-[#30363d] pl-3 sm:pl-4 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <h4 className="font-medium text-black dark:text-[#f0f6fc]">{position.title}</h4>
                  {position.current && (
                    <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-full w-fit">
                      Current
                    </span>
                  )}
                </div>
                <div className="text-sm text-zinc-600 dark:text-[#8b949e] space-y-1">
                  <p><strong>Employment Type:</strong> {position.type}</p>
                  <p><strong>Employment Period:</strong> {position.period}</p>
                </div>
                
                {position.description.length > 0 && (
                  <ul className="text-sm text-zinc-700 dark:text-[#8b949e] space-y-1 pl-2 sm:pl-0">
                    {position.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-zinc-400 dark:text-[#656d76] mr-3 mt-1">*</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {position.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-3">
                    {position.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
