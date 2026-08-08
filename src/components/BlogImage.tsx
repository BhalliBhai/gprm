'use client';

import Image, { type StaticImageData } from 'next/image';
import { useEffect, useState, type ComponentPropsWithoutRef } from 'react';

type BlogImageProps = Omit<ComponentPropsWithoutRef<typeof Image>, 'src'> & {
  src?: string | StaticImageData | null;
  containerClassName?: string;
};

export default function BlogImage({
  src,
  alt = '',
  className,
  containerClassName,
  ...props
}: BlogImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setHasError(false);
    setIsLoaded(false);
  }, [src]);

  if (!src || hasError) {
    return null;
  }

  return (
    <div
      className={[
        'relative overflow-hidden',
        props.fill ? 'h-full w-full' : '',
        containerClassName ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {!isLoaded ? (
        <div className="absolute inset-0 animate-pulse bg-slate-200/70 dark:bg-slate-800/70" />
      ) : null}

      <Image
        src={src}
        alt={alt}
        className={className}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        {...props}
      />
    </div>
  );
}
