import ProjectsBreadcrumb from "@/Components/ProjectBreadcrumbs/ProjectBreadcrumbs";
import { projects } from "@/Components/ProjectCard/Constants";

export default async function ProjectDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const project = projects.find((p) => String(p.id) === params.id);

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-4 sm:mb-6">
        <ProjectsBreadcrumb
          projectId={params.id}
          projectTitle={project?.title}
        />
      </div>
      <main>
        <h1 className="text-3xl font-bold mb-4">{project?.title ?? "Project Not Found"}</h1>
        <p>{project?.description}</p>
      </main>
    </div>
  );
}
