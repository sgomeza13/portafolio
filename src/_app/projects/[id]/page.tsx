import ProjectsBreadcrumb from "@/Components/ProjectBreadcrumbs/ProjectBreadcrumbs";

export default async function ProjectDetailsPage({
  params,
}: {
  params: { lang: string; id: string };
}) {
  return (
    <>
      <div className="mb-4 sm:mb-6">
        <ProjectsBreadcrumb lang={params.lang} projectId={params.id} />
      </div>
      <main>
        {/* Project details */}
      </main>
    </>
  );
}
