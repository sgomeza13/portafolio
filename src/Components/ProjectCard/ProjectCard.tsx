"use client"
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/util";
import { Card } from "../CustomUI/Card/Card";

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
  
  const fallbackImage = "/images/fallback.png"; // Place a fallback.png in your public/images folder
  const [currentImage, setCurrentImage] = useState(imageUrl || fallbackImage);

  return (
    <Card
      hasBorder
      className={cn("bg-glass-medium glow-primary hover:scale-[1.02] transition-transform duration-300", className)}
      header={<span className="text-2xl font-bold">{title}</span>}
      footer={
        tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-sm rounded-full bg-glass-sage text-[var(--primary-400)] border border-[var(--primary-600)]"
              >
                {tag}
              </span>
            ))}
          </div>
        )
      }
    >
      <div className="relative w-full aspect-video overflow-hidden rounded-lg mb-4">
        {videoUrl && !imageUrl ? (
          <video
            src={videoUrl}
            controls
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={currentImage}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
            onError={() => setCurrentImage(fallbackImage)}
          />
        )}
      </div>
      
      <p className="text-[var(--foreground-muted)]">{description}</p>
    </Card>
  );
}
