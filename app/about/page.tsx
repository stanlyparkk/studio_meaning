import type { Metadata } from "next";

import { PortableImage } from "@/components/ui/portable-image";
import { SectionHeading } from "@/components/ui/section-heading";
import { getPortfolioItems, getSiteSettings } from "@/lib/sanity/fetchers";
import { buildMetadata } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: "브랜드 철학과 촬영 스타일을 소개합니다.",
  path: "/about",
});

export default async function AboutPage() {
  const [settings, portfolios] = await Promise.all([
    getSiteSettings(),
    getPortfolioItems(),
  ]);

  const highlighted = portfolios.slice(0, 2);

  return (
    <div className="container-shell py-14 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="About"
            title={settings.aboutTitle}
            description={settings.aboutBody}
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {[
              "자연광 중심의 부드러운 톤앤매너",
              "사진과 영상의 브랜드 무드를 일관되게 설계",
              "예식 흐름을 방해하지 않는 섬세한 디렉팅",
              "모바일에서도 보기 좋은 전달형 갤러리 구성",
            ].map((item) => (
              <div key={item} className="glass-card p-5 text-sm leading-7 text-stone/70">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {highlighted.map((item, index) => (
            <PortableImage
              key={item._id}
              image={item.coverImage}
              alt={item.title}
              priority={index === 0}
              className={index === 0 ? "h-[420px] sm:col-span-2 sm:h-[520px]" : "h-[320px]"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
