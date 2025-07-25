import H2 from "@/components/H2";
import HorizontalLine from "@/components/HorizontalLine";
import PageWrapper from "@/components/PageWrapper";
import videos from "@/data/videos";

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
        <article></article>
      </section>
    </PageWrapper>
  );
};

export default page;
