'use client';

import Image, { type StaticImageData } from 'next/image';
import { useState, type ComponentPropsWithoutRef } from 'react';

type BlogImageProps = Omit<ComponentPropsWithoutRef<typeof Image>, 'src'> & {
  src?: string | StaticImageData | null;
  containerClassName?: string;
};

export default function BlogImage({
  src,
  alt = '',
  className,
  containerClassName,
  quality = 70,
  ...props
}: BlogImageProps) {
  if (!src) {
    return null;
  }

  const imageKey = typeof src === 'string' ? src : src.src;
  return (
    <BlogImageWithState
      key={imageKey}
      src={src}
      alt={alt}
      className={className}
      containerClassName={containerClassName}
      quality={quality}
      {...props}
    />
  );
}

function BlogImageWithState({
  src,
  alt,
  className,
  containerClassName,
  quality,
  ...props
}: BlogImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (!src || hasError) {
    return null;
  }

  const imageClassName = [
    className ?? '',
    props.fill ? 'h-full w-full' : '',
    'object-cover',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span
      className={[
        'relative block overflow-hidden',
        props.fill ? 'h-full w-full' : '',
        containerClassName ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {!isLoaded ? (
        <span className="absolute inset-0 animate-pulse bg-slate-200/70 dark:bg-slate-800/70" />
      ) : null}

      <Image
        src={src}
        alt={alt}
        className={imageClassName}
        quality={quality}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        {...props}
      />
    </span>
  );
}
