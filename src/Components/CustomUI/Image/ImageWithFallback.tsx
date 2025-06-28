"use client";
import {useState} from "react";
import NextImage, {ImageProps as NextImageProps} from "next/image";
export interface ImageWithFallbackProps extends Omit<NextImageProps, "src"> {
  src: string;
  fallbackSrc: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  fallbackSrc,
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <NextImage
      src={imageSrc}
      onError={() => setImageSrc(fallbackSrc)}
      {...props}
    />
  );
};
