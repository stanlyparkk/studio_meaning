import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PortableImage } from "@/components/ui/portable-image";
import { getPortfolioItemBySlug } from "@/lib/sanity/fetchers";
import { buildMetadata, extractYouTubeId, formatDate } from "@/lib/utils";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const revalidate = 60;
export const dynamicParams = true;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = await getPortfolioItemBySlug(slug);

  if (!item) {
    return buildMetadata({
      title: "Portfolio",
      description: "포트폴리오 상세 페이지를 찾을 수 없습니다.",
      path: `/portfolio/${slug}`,
    });
  }

  return buildMetadata({
    title: item.title,
    description: item.summary,
    path: `/portfolio/${item.slug}`,
  });
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = await getPortfolioItemBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="page-shell">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <div className="flex flex-wrap gap-2">
            {item.primaryCategory ? (
              <span className="rounded-full border border-gold/20 bg-white/70 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-gold">
                {item.primaryCategory.title}
              </span>
            ) : null}
            {item.secondaryCategories.map((category) => (
              <span
                key={category.slug}
                className="rounded-full border border-gold/20 bg-white/70 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-gold"
              >
                {category.title}
              </span>
            ))}
          </div>
          <h1 className="mt-5 font-serif text-5xl leading-tight text-stone">{item.title}</h1>
          <p className="mt-6 text-base leading-8 text-stone/70">{item.description}</p>
          <dl className="page-panel mt-8 space-y-4 p-6 text-sm leading-7 text-stone/70">
            <div>
              <dt className="text-xs uppercase tracking-[0.26em] text-gold">Date</dt>
              <dd>{formatDate(item.shootDate)}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.26em] text-gold">Location</dt>
              <dd>{item.location}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.26em] text-gold">Type</dt>
              <dd>{item.mediaType === "video" ? "Video" : "Photo"}</dd>
            </div>
          </dl>
        </div>

        {item.mediaType === "video" && item.youtubeUrl ? (
          <div className="overflow-hidden rounded-[2rem] border border-stone/10 bg-black shadow-soft">
            <iframe
              className="aspect-video w-full"
              src={`https://www.youtube.com/embed/${extractYouTubeId(item.youtubeUrl)}`}
              title={item.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            <PortableImage
              image={item.coverImage}
              alt={item.title}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-[420px] sm:col-span-2 sm:h-[680px]"
            />
            {item.gallery.map((image, index) => (
              <PortableImage
                key={`${item._id}-${index}`}
                image={image}
                alt={`${item.title} gallery ${index + 1}`}
                className={index % 3 === 0 ? "h-[420px] sm:col-span-2" : "h-[340px]"}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
