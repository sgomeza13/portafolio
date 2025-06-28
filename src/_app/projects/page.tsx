import ProjectsBreadcrumb from "@/Components/ProjectBreadcrumbs/ProjectBreadcrumbs";
import { projects } from "@/Components/ProjectCard/Constants";
import ProjectCard from "@/Components/ProjectCard/ProjectCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/Components/UI/pagination";

export default function ProjectsGrid({ params }: { params: { lang: string } }) {
  return (
    <div className="relative min-h-[80vh] pb-20">
      <div className="mb-4 sm:mb-6">
        <ProjectsBreadcrumb lang={params.lang} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, idx) => (
          <ProjectCard className="h-full" key={idx} {...project} />
        ))}
      </div>

      <div className="fixed bottom-0 left-0 w-full flex justify-center z-40 bg-background/80 backdrop-blur-md py-3">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="?page=1" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="?page=1" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="?page=2">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="?page=2" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
