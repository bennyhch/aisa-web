"use client";

import H2 from "@/components/H2";
import HorizontalLine from "@/components/HorizontalLine";
import PageWrapper from "@/components/PageWrapper";
import publications from "@/data/pulbications";
import videos from "@/data/videos";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <PageWrapper>
      <section>
        <H2 heading="EVENTS HIGHLIGHTS" />
        <HorizontalLine />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-8 lg: gap-y-15 py-20 px-10">
          {videos.map((video) => (
            <article
              key={video.id}
              className="bg-white rounded-lg overflow-hidden transform transition-transform hover:shadow-lg"
            >
              {/* YouTube iframe */}
              <div className="relative w-full pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={video.src}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

              {/* Title */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <H2 heading="PUBLICATIONS" />
        <HorizontalLine />
        <div className="flex justify-center items-center flex-col">
          {publications.map((publication, i) => (
            <Link
              key={publication.id}
              href={publication.link}
              className="block py-10"
            >
              <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 gap-4">
                {/* Left side - Title and Description */}
                {/* <div className="md:flex-1 w-full border-2"> */}
                <div className=" w-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 underline">
                    {publication.title}
                  </h3>
                  <p
                    className={` ${
                      i === 0
                        ? "font-bold underline text-xl text-gray-800"
                        : "text-gray-600 text-sm leading-relaxed"
                    }`}
                  >
                    {publication.description}
                  </p>
                </div>

                {/* Right side - Image */}
                {/* <div className="w-[192px] h-[128px] flex-shrink-0 border-2"> */}
                <div className="">
                  <Image
                    src={publication.imageUrl}
                    alt={publication.title}
                    width={192}
                    height={128}
                    className="object-cover w-full h-full rounded-lg border border-gray-200"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};

export default page;
