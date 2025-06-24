import { FaReact, FaDocker, FaJava } from "react-icons/fa";
import { 
  SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiSpringboot, 
  SiMysql, SiPostgresql, SiGit, SiAmazon, SiGooglecloud, 
  SiExpress,
  SiPython,
  SiDjango
} from "react-icons/si";

export const techStack = {
  languages: [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" size={28} /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" size={28} /> },
    { name: "Java", icon: <FaJava className="text-red-500" size={28} /> },
    { name: "Python", icon: <SiPython className="text-blue-400" size={28} /> },
  ],
  
  frameworks: [
    { name: "React", icon: <FaReact className="text-sky-400" size={32} /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-sand-400" size={28} /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-300" size={28} /> },
    { name: "Express.js", icon: <SiExpress className="text-green-500" size={28} /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" size={28} /> },
    { name: "Django", icon: <SiDjango className="text-green-600" size={28} /> }
  ],
  
  tools: [
    { name: "MySQL", icon: <SiMysql className="text-sky-500" size={28} /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" size={28} /> },
    { name: "Docker", icon: <FaDocker className="text-blue-400" size={28} /> },
    { name: "Git", icon: <SiGit className="text-orange-500" size={28} /> },
    { name: "AWS", icon: <SiAmazon size={28} /> },
    { name: "Google Cloud", icon: <SiGooglecloud className="text-blue-500" size={28} /> }
  ]
};
