"use client";
import { useEffect, useRef } from 'react';
import 'photoswipe/style.css';
import type { PhotoType } from "@/types";
import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/sanity/lib/client';

const builder = imageUrlBuilder(client);

interface PhotoSwipeGalleryProps {
  photos: PhotoType[];
}

export default function PhotoSwipeGallery({ photos }: PhotoSwipeGalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null);

  // Helper to generate Sanity image URLs with specific dimensions
  function urlFor(source: string) {
    return builder.image(source);
  }

  useEffect(() => {
    if (!photos.length || !galleryRef.current) return;

    let cleanup: (() => void) | undefined;

    const initPhotoSwipe = async () => {
      const PhotoSwipeModule = await import('photoswipe');
      const PhotoSwipeLightboxModule = await import('photoswipe/lightbox');

      const PhotoSwipe = PhotoSwipeModule.default;
      const PhotoSwipeLightbox = PhotoSwipeLightboxModule.default;

      const lightbox = new PhotoSwipeLightbox({
        gallery: galleryRef.current,
        children: 'a',
        pswpModule: PhotoSwipe,
        paddingFn: (viewportSize) => {
          return {
            top: 30,
            bottom: 30,
            left: 30,
            right: 30
          };
        }
      });

      lightbox.init();

      cleanup = () => {
        lightbox.destroy();
      };
    };

    initPhotoSwipe();

    return () => {
      cleanup?.();
    };
  }, [photos]);

  if (!photos.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">No photos yet. Add some in Sanity!</p>
      </div>
    );
  }

  return (
    <div
      ref={galleryRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      {photos.map((photo) => {
        const imageUrl = urlFor(photo.image).width(1200).quality(90).url();
        const thumbnailUrl = urlFor(photo.image).width(400).height(300).fit('crop').quality(80).url();

        return (
          <a
            key={photo._id}
            href={imageUrl}
            data-pswp-width={photo.metadata.dimensions.width}
            data-pswp-height={photo.metadata.dimensions.height}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={thumbnailUrl}
              alt={photo.alt || photo.title}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold">{photo.title}</p>
                {photo.location && (
                  <p className="text-white/80 text-sm mt-1 line-clamp-2">
                    {photo.location}
                  </p>
                )}
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}