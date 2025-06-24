import { useTranslations } from "next-globe-gen";
import { techStack } from "./Constants";

export default function TechStack() {
  const t = useTranslations("techStack");
  return (
    <div className="space-y-8">
      {/* Languages Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-primary-400 font-heading">
          {t("languages")}
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.languages.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center space-y-2 p-3 rounded-lg bg-glass-light hover:bg-glass-sage hover:scale-105 transition-all duration-300 cursor-pointer min-w-[70px]"            >
              <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <span className="text-foreground-muted group-hover:text-primary-400 group-hover:scale-105 text-xs font-medium transition-all text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Frameworks Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-secondary-400 font-heading">
          {t("frameworks")}
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.frameworks.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center space-y-2 p-3 rounded-lg bg-glass-light hover:bg-glass-medium hover:scale-105 transition-all duration-300 cursor-pointer min-w-[70px]"
            >
              <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <span className="text-foreground-muted group-hover:text-secondary-400 text-xs font-medium transition-colors text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-accent-400 font-heading">
          {t("tools")}
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.tools.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center space-y-2 p-3 rounded-lg bg-glass-light hover:bg-glass-medium hover:scale-105 transition-all duration-300 cursor-pointer min-w-[70px]"
            >
              <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <span className="text-foreground-muted group-hover:text-accent-400 text-xs font-medium transition-colors text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
