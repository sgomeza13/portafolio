import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/Components/UI/breadcrumb";
import { getTranslations } from "next-globe-gen";

interface ProjectsBreadcrumbProps {
  lang: string;
  projectId?: string;
}

export default async function ProjectsBreadcrumb({
  projectId,
}: ProjectsBreadcrumbProps) {
  const t = getTranslations("breadCrumbs");

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>{t("home")}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href='/projects'>{t("projects")}</BreadcrumbLink>
        </BreadcrumbItem>
        {projectId && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/projects/${projectId}`}>
                {projectId}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
