import { Slide } from "../animation/Slide";
import PhotoSwipeGallery from '../components/pages/PhotoSwipeGallery';
import { Metadata } from "next";
import PageHeading from "@/app/components/shared/PageHeading";
import { photosQuery } from "@/lib/sanity.query";
import type { PhotoType } from "@/types";
import { sanityFetch } from "@/lib/sanity.client";

export const metadata: Metadata = {
  title: "Photos | Muhammad Abulmagd",
  metadataBase: new URL("https://magd.dev/photos"),
  description: "Explore photos taken by Muhammad Abulmagd",
  openGraph: {
    title: "Photos | Muhammad Abulmagd",
    url: "https://magd.dev/photos",
    description: "Explore photos taken by Muhammad Abulmagd",
    images:
      "https://res.cloudinary.com/magd/image/upload/v1767974078/photos.png",
  },
};

export default async function Page() {
  const photos: PhotoType[] = await sanityFetch({
    query: photosQuery,
    tags: ["photos"],
  });

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <PageHeading
        title="Photos"
        description={`A collection of ${photos.length} photos`}
      />
      <figure className="my-6">
        <Slide delay={0.14}>
          <PhotoSwipeGallery photos={photos} />
        </Slide>
      </figure>
    </main>
  );
}