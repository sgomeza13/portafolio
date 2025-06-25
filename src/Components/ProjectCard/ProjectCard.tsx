"use client";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/util";
import { Card, CardFooter, CardHeader } from "../CustomUI/Card/Card";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  tags?: string[];
  className?: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  videoUrl,
  tags = [],
  className,
}: ProjectCardProps) {

  const fallbackImage = "/images/fallback.png";
  const [currentImage, setCurrentImage] = useState(imageUrl || fallbackImage);

  return (
    <Card
      hasBorder
      className={cn(
        "bg-glass-medium glow-primary hover:scale-[1.02] transition-transform duration-300 flex flex-col h-full",
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
            <Image
              src={currentImage}
              alt={title}
              fill
              className="object-cover"
              onError={() => setCurrentImage(fallbackImage)}
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
              <span
                key={idx}
                className="px-2 text-sm rounded-full bg-glass-sage text-[var(--primary-400)] border border-[var(--primary-600)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
