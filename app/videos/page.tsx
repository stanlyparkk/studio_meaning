import type { Metadata } from "next";

import { PortableImage } from "@/components/ui/portable-image";
import { SectionHeading } from "@/components/ui/section-heading";
import { getVideos } from "@/lib/sanity/fetchers";
import { buildMetadata, extractYouTubeId } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Video",
  description: "웨딩 하이라이트 영상과 시네마틱 필름을 소개합니다.",
  path: "/videos",
});

export default async function VideosPage() {
  const videos = await getVideos();

  return (
    <div className="container-shell py-14 lg:py-24">
      <SectionHeading
        eyebrow="Video"
        title="순간의 공기와 리듬까지 담아내는 웨딩 필름"
        description="Sanity에서 유튜브 링크를 수정하면 이 페이지의 영상 임베드가 자동으로 갱신됩니다."
      />

      <div className="mt-12 grid gap-8">
        {videos.map((video, index) => {
          const youtubeId = extractYouTubeId(video.youtubeUrl);

          return (
            <section
              key={video._id}
              className="glass-card grid gap-8 overflow-hidden p-5 sm:p-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center"
            >
              <PortableImage
                image={video.coverImage}
                alt={video.title}
                priority={index === 0}
                className="h-[280px] lg:h-[420px]"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold">Highlight Film</p>
                <h2 className="mt-4 font-serif text-4xl text-stone">{video.title}</h2>
                <p className="mt-5 text-base leading-8 text-stone/70">{video.description}</p>
                {youtubeId ? (
                  <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-stone/10">
                    <iframe
                      className="aspect-video w-full"
                      src={`https://www.youtube.com/embed/${youtubeId}`}
                      title={video.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : null}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
