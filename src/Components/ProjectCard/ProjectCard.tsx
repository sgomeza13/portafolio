import { cn } from "@/lib/util";
import { Card, CardFooter, CardHeader } from "../CustomUI/Card/Card";
import { ImageWithFallback } from "../CustomUI/Image/ImageWithFallback";
import Link from "next/link";
import { log } from "console";
import { RenderTags } from "../RenderTags/RenderTags";

interface Tag {
  label: string;
  code: string;
  id: string;
}

interface ProjectCardProps {
  name: string;
  description: string;
  preview_image_url?: string;
  tags?: Tag[];
  className?: string;
  project_id?: string;
}

export default function ProjectCard({
  name,
  description,
  preview_image_url = "",
  tags = [],
  className,
  project_id,
}: ProjectCardProps) {
  const fallbackImage = "/images/fallback.png";
  log(preview_image_url);
  return (
    <Link href={`projects/${project_id}`} className="block h-full">
      <Card
        isClickable
        hasBorder
        className={cn(
          "bg-glass-medium glow-primary flex flex-col h-full",
          className
        )}
      >
        {/* Header */}
        <CardHeader className="px-4 pb-2">
          <h1 className="text-xl font-bold">{name}</h1>
        </CardHeader>

        {/* Media Section with Internal Padding */}
        <div className="px-4 mb-4">
          <div className="w-full rounded-lg overflow-hidden relative aspect-[4/3]">
            <ImageWithFallback
              src={preview_image_url}
              fallbackSrc={fallbackImage}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-grow px-4 text-[var(--foreground-muted)] mb-4">
          <p>{description}</p>
        </div>

        {/* Footer */}
        {tags.length > 0 && (
          <CardFooter className="px-4 pb-4">
            <div className="flex flex-wrap gap-2">
            <RenderTags tags={tags} />
            </div>
          </CardFooter>
        )}
      </Card>
    </Link>
  );
}
