import { fetchPublicProjects } from "@/api/fetchPublicProjects";
import ProjectsBreadcrumb from "@/Components/ProjectBreadcrumbs/ProjectBreadcrumbs";
import { ProjectCarouselImages } from "@/Components/ProjectCarouselImages/ProjectCarouselImages";
import { RenderTags } from "@/Components/RenderTags/RenderTags";
import { getEmbedUrl } from "@/lib/getEmbedUrl";
import { getLocale, getTranslations } from "next-globe-gen";
export const dynamic = "force-dynamic";

export default async function ProjectDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const locale = getLocale();
  const t = getTranslations("project");
  const project = await fetchPublicProjects(locale, params.id);

  if (!project) {
    return (
      <main className="max-w-3xl mx-auto py-10">
        <h1 className="text-3xl font-bold mb-4">{t("not_found")}</h1>
      </main>
    );
  }

  return (
    <>
      <div className="mb-4 sm:mb-6">
        <ProjectsBreadcrumb projectId={params.id} projectTitle={project.name} />
      </div>

      <main className="max-w-3xl mx-auto py-10">
        <h1 className="text-3xl font-bold mb-4">{project.name}</h1>

        {/* Video */}
        {project.video_url && (
          <div className="mb-6">
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow">
              <iframe
                src={getEmbedUrl(project.video_url)}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                title="Project video"
              />
            </div>
          </div>
        )}

        {/* Description */}
        <p className="mb-6 text-lg text-gray-300">
          {project.extended_description}
        </p>

        {/* Full-width Carousel */}
        <ProjectCarouselImages imageUrls={project.image_urls} />
        
        {/* Tags */}
        {project.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            <RenderTags tags={project.tags} />
          </div>
        )}

        {/* Reference Links */}
        {project.reference_urls?.length > 0 && (
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-2">
              {t("check_source_code")}
            </h2>
            <ul className="list-disc list-inside space-y-1">
              {project.reference_urls.map((url) => (
                <li key={url}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline break-all"
                  >
                    {url}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </>
  );
}
