import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/Components/UI/breadcrumb";
import { getTranslations } from "next-globe-gen";

interface ProjectsBreadcrumbProps {
  projectId?: string;
  projectTitle?: string;
}

export default async function ProjectsBreadcrumb({
  projectId,
  projectTitle,
}: ProjectsBreadcrumbProps) {
  const t = getTranslations("breadCrumbs");

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">{t("home")}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/projects">{t("projects")}</BreadcrumbLink>
        </BreadcrumbItem>
        {projectId && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/projects/${projectId}`}>
                {projectTitle ?? projectId}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
