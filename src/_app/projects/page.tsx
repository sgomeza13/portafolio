import { projects } from "@/Components/ProjectCard/Constants";
import ProjectCard from "@/Components/ProjectCard/ProjectCard";

export default function ProjectsGrid() {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </div>
  );
}