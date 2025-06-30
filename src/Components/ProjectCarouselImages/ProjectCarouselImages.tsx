"use client";

import { useTranslations } from "next-globe-gen";
import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "../UI/carousel";
import { ImageWithFallback } from "../CustomUI/Image/ImageWithFallback";

export interface ProjectCarouselImagesProps {
    imageUrls: string[];
}

export function ProjectCarouselImages({ imageUrls }: ProjectCarouselImagesProps) {
    const t = useTranslations("project");
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) return;
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    if (!imageUrls || imageUrls.length === 0) return null;

    return (
        <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">
                {t("project_images")}
            </h2>
            <Carousel setApi={setApi} className="w-full max-w-none">
                <CarouselContent>
                    {imageUrls.map((imageUrl, index) => (
                        <CarouselItem key={index} className="w-full">
                            <div className="aspect-video w-full max-h-[480px] rounded-lg overflow-hidden shadow mx-auto">
                                <ImageWithFallback
                                    fallbackSrc="/images/fallback.png"
                                    src={imageUrl}
                                    width={1280}
                                    height={720}
                                    alt={`Project image ${index + 1}`}
                                    className="object-cover w-full h-full"
                                    priority={index === 0}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <div className="text-muted-foreground py-2 text-center text-sm">
               {  t("current_image", {
                    current: current.toString(),
                    total: count.toString()
                })}
            </div>
        </div>
    );
}