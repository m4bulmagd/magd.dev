import Image from "next/image";
import { educationQuery } from "@/lib/sanity.query";
import type { EducationType } from "@/types";
import { formatDate } from "../../utils/date";
import { Slide } from "../../animation/Slide";
import { sanityFetch } from "@/lib/sanity.client";
import RefLink from "../shared/RefLink";
import EmptyState from "../shared/EmptyState";
import { RiBriefcase3Fill } from "react-icons/ri";

export default async function Education() {
  const educations: EducationType[] = await sanityFetch({
    query: educationQuery,
    tags: ["education"],
  });

  return (
    <section className="mt-32">
      <Slide delay={0.16}>
        <div className="mb-16">
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            Education
          </h2>
        </div>
      </Slide>

      {educations.length > 0 ? (
        <Slide delay={0.18}>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10">
            {educations.map((education) => (
              <div
                key={education._id}
                className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[5rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)] dark:before:bg-zinc-800 before:bg-zinc-200"
              >
                <Image
                  src={education.logo}
                  className="object-cover duration-300"
                  alt={`${education.name} logo`}
                  width={50}
                  height={50}
                />
                <div className="flex flex-col items-start">
                  <h3 className="text-xl font-semibold">{education.name}</h3>
                  <p>{education.degree}</p>
                  <time className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                    {formatDate(education.startDate)} -{" "}
                    {education.endDate ? (
                      formatDate(education.endDate)
                    ) : (
                      <span className="dark:text-primary-color text-tertiary-color">
                        Present
                      </span>
                    )}
                  </time>
                  {/* 
                  <p className="tracking-tight dark:text-zinc-400 text-zinc-600 my-4">
                    {education.description}
                  </p> 
                  */}
                </div>
              </div>
            ))}
          </div>
        </Slide>
      ) : (
        <EmptyState
          icon={<RiBriefcase3Fill />}
          title="Education Not Provided"
          message="We could not find any education at the moment. To add one, visit the Sanity studio to start editing the content."
        />
      )}
    </section>
  );
}
