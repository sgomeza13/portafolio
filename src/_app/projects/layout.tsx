import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/Components/UI/breadcrumb";
import { useTranslations } from "next-globe-gen";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations("breadCrumbs");
  return (
    <div className="flex flex-col max-w-7xl mx-auto w-full ">
      <div className="mb-4 sm:mb-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">{t("home")}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/projects">{t("projects")}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <main>{children}</main>
    </div>
  );
}
