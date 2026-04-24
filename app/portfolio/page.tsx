import type { Metadata } from "next";
import Link from "next/link";

import { PortableImage } from "@/components/ui/portable-image";
import { SectionHeading } from "@/components/ui/section-heading";
import { getPortfolioCategories, getPortfolioItems } from "@/lib/sanity/fetchers";
import { buildMetadata, formatDate } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio",
  description: "웨딩 사진 포트폴리오 목록 페이지입니다.",
  path: "/portfolio",
});

export default async function PortfolioPage() {
  const [categories, items] = await Promise.all([
    getPortfolioCategories(),
    getPortfolioItems(),
  ]);

  return (
    <div className="container-shell py-14 lg:py-24">
      <SectionHeading
        eyebrow="Portfolio"
        title="클래식한 결부터 자연스러운 공기감까지"
        description="카테고리별 무드와 베뉴 특성을 살린 웨딩 포트폴리오를 한눈에 살펴보실 수 있습니다."
      />

      <div className="mt-10 flex flex-wrap gap-3">
        {categories.map((category) => (
          <div
            key={category._id}
            className="rounded-full border border-gold/15 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.24em] text-gold"
          >
            {category.title}
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <article key={item._id} className="group">
            <Link href={`/portfolio/${item.slug}`} className="block">
              <PortableImage
                image={item.coverImage}
                alt={item.title}
                priority={index < 2}
                className="h-[440px] transition duration-500 group-hover:-translate-y-1"
              />
              <div className="px-2 pt-5">
                <div className="flex flex-wrap gap-2">
                  {item.categories.map((category) => (
                    <span
                      key={category}
                      className="rounded-full bg-[#f6ead8] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-gold"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <h2 className="mt-4 font-serif text-3xl text-stone">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-stone/72">{item.summary}</p>
                <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-stone/55">
                  <span>{item.location}</span>
                  <span>{formatDate(item.shootDate)}</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
