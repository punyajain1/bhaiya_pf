'use client';

import Image from 'next/image';
import { GitHubLight, GitHubDark } from '../../icons/github';
import { LinkedinLight, LinkedinDark } from '../../icons/linkedin';
import { Xdark, Xlight } from '../../icons/x';
import { useTheme } from '@/context/ThemeContext';

export default function Header() {
  const { isDarkMode } = useTheme();

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ujjwlj",
      icon: isDarkMode ? <LinkedinLight />:<LinkedinDark /> ,
      username: "/ujjwlj"
    },
    // {
    //   name: "GitHub", 
    //   url: "https://github.com/ujjwal451",
    //   icon: isDarkMode ? <GitHubLight />: <GitHubDark /> ,
    //   username: "/ujjwal451"
    // },
    // {
    //   name: "X (Twitter)",
    //   url: "https://x.com/ujjwal_jain",
    //   icon: isDarkMode ? <Xlight /> : <Xdark />,
    //   username: "/ujjwal_jain"
    // }
  ];
  return (
    <header className="mb-8 sm:mb-12">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 dark:bg-[#21262d] rounded-full overflow-hidden flex-shrink-0">
          <Image src="/ujjwal.jpg" alt="Ujjwal" width={128} height={128} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-[#f0f6fc] mb-2">Hi!! Ujjwal Here</h1>
          <p className="text-zinc-600 dark:text-[#8b949e] mb-3">Software Engineer from West Lafayette, USA</p>
          <p className="text-zinc-600 dark:text-[#8b949e] text-sm leading-relaxed mb-4 px-2 sm:px-0">
            5+ years building distributed systems and cloud-native applications. I specialize in low-latency, 
            high-throughput backend services delivering platforms used by 2M+ users with 99.9% reliability ⚡
          </p>
          
          {/* Available to work indicator & Resume */}
          <div className="flex items-center justify-center sm:justify-start gap-3 flex-wrap"
          >
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 px-3 py-1.5 rounded-full text-sm font-medium shadow-[0_0_20px_rgba(34,197,94,0.5)] dark:shadow-[0_0_20px_rgba(34,197,94,0.4)] ring-2 ring-green-400/30 dark:ring-green-400/40">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
              Available to work
            </div>
            
            {/* Resume Link */}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-slate-700 hover:bg-slate-800 dark:bg-[#21262d] dark:hover:bg-[#30363d] text-white dark:text-[#f0f6fc] text-sm font-medium rounded-full hover:scale-105 transition-all duration-200 flex items-center gap-2"
              title="View Resume"
            >
              <svg 
                className="w-3 h-3 flex-shrink-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              View Resume
            </a>
          </div>
        </div>
      </div>
      
      {/* Social Links */}
      <div className="flex flex-wrap gap-2 sm:gap-3 items-center justify-center ">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 sm:gap-3 bg-slate-100 hover:bg-slate-200 dark:bg-[#21262d] dark:hover:bg-[#30363d] rounded-lg hover:scale-105 transition-all duration-200 px-2 sm:px-3 py-2 border border-slate-200 dark:border-[#30363d] group"
            title={link.name}
          >
            <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center flex-shrink-0">
              {link.icon}
            </div>
            <span className="text-xs sm:text-sm text-slate-700 dark:text-[#f0f6fc] font-medium group-hover:text-slate-900 dark:group-hover:text-white">
              {link.username}
            </span>
          </a>
        ))}
      </div>
    </header>
  );
}