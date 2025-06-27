import { cn } from "@/lib/util";
import { Card, CardFooter, CardHeader } from "../CustomUI/Card/Card";
import { Chip } from "../CustomUI/Chip/Chip";
import { ImageWithFallback } from "../CustomUI/Image/ImageWithFallback";
import Link from 'next/link'

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  tags?: string[];
  className?: string;
  id?: number;
}

export default function ProjectCard({
  title,
  description,
  imageUrl="",
  videoUrl,
  tags = [],
  className,
  id
}: ProjectCardProps) {

  const fallbackImage = "/images/fallback.png";

  return (
    <Link href={`projects/${id}`} className="block h-full">
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
        <h1 className="text-xl font-bold">{title}</h1>
      </CardHeader>

      {/* Media Section with Internal Padding */}
      <div className="px-4 mb-4">
        <div className="relative w-full aspect-video overflow-hidden rounded-lg">
          {videoUrl && !imageUrl ? (
            <video src={videoUrl} controls className="w-full h-full object-cover" />
          ) : (
            <ImageWithFallback
              src={imageUrl}
              fallbackSrc={fallbackImage}
              alt={title}
              fill
              className="object-cover"
            />
          )}
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
            {tags.map((tag, idx) => (
              <Chip key={idx} tag={tag} color="primary"/>
            ))}
          </div>
        </CardFooter>
      )}
    </Card>
    </Link>
  );
}
