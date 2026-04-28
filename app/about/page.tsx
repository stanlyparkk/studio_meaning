import type { Metadata } from "next";

import { PageIntro } from "@/components/ui/page-intro";
import { PortableImage } from "@/components/ui/portable-image";
import { getSiteSettings } from "@/lib/sanity/fetchers";
import { buildMetadata } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: "브랜드 철학과 촬영 스타일을 소개합니다.",
  path: "/about",
});

export default async function AboutPage() {
  const settings = await getSiteSettings();
  const aboutImages = settings.aboutImages || [];
  const aboutHighlights =
    settings.aboutHighlights?.filter((item) => item.text?.trim()) || [];

  return (
    <div className="page-shell">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <PageIntro
            eyebrow="About"
            title={settings.aboutTitle || "About"}
            description={settings.aboutBody}
            noWrapDesktop={false}
          />

          {aboutHighlights.length ? (
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {aboutHighlights.map((item, index) => (
                <div
                  key={`${item.text}-${index}`}
                  className="page-panel relative overflow-hidden p-6 text-sm leading-7 text-stone/70"
                >
                  <div className="mb-4 h-2 w-12 rounded-full bg-gradient-to-r from-gold to-[#ead3aa]" />
                  {item.text}
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {aboutImages.length ? (
          <div className="grid gap-6 sm:grid-cols-2">
            {aboutImages.map((image, index) => (
              <PortableImage
                key={`${image.asset?._ref || image.alt || "about-image"}-${index}`}
                image={image}
                alt={image.alt || `${settings.aboutTitle || "About"} image ${index + 1}`}
                priority={index === 0}
                className={
                  index === 0
                    ? "h-[420px] sm:col-span-2 sm:h-[560px]"
                    : "h-[320px] transition duration-500 hover:-translate-y-1"
                }
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
