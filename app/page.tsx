import Link from "next/link";

import { PortableImage } from "@/components/ui/portable-image";
import { SectionHeading } from "@/components/ui/section-heading";
import { getSiteSettings } from "@/lib/sanity/fetchers";

export default async function HomePage() {
  const settings = await getSiteSettings();
  const showMoodCard =
    settings.homeMoodEnabled &&
    (settings.homeMoodTitle?.trim() || settings.homeMoodText?.trim());
  const homeStats =
    settings.homeStatsEnabled && settings.homeStats?.length
      ? settings.homeStats.filter((item) => item.value?.trim() && item.label?.trim())
      : [];

  return (
    <div>
      <section className="container-shell grid gap-10 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-24">
        <div>
          <p className="section-kicker">Emotional Wedding Visuals</p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.02] text-stone sm:text-6xl lg:text-7xl">
            {settings.bannerTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone/70">
            {settings.bannerSubtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/portfolio" className="gold-button">
              Portfolio View
            </Link>
            <Link href="/contact" className="outline-button">
              Reserve Now
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-10 hidden h-52 w-52 rounded-full border border-white/70 bg-white/40 blur-2xl lg:block" />
          <PortableImage
            image={settings.heroImage}
            alt={settings.brandName}
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="h-[440px] sm:h-[560px] lg:h-[700px]"
          />
          {showMoodCard ? (
            <div className="page-panel absolute bottom-6 left-6 max-w-xs p-5 sm:bottom-8 sm:left-8">
              {settings.homeMoodTitle ? (
                <p className="text-xs uppercase tracking-[0.32em] text-gold">
                  {settings.homeMoodTitle}
                </p>
              ) : null}
              {settings.homeMoodText ? (
                <p className="mt-3 text-base leading-7 text-stone/70">
                  {settings.homeMoodText}
                </p>
              ) : null}
            </div>
          ) : null}
        </div>
      </section>

      <section className="container-shell py-12 lg:py-20">
        <div
          className={`grid gap-10 lg:items-end ${
            homeStats.length ? "lg:grid-cols-[0.9fr_1.1fr]" : ""
          }`}
        >
          <SectionHeading
            eyebrow="About The Studio"
            title={settings.introTitle}
            description={settings.introText}
          />
          {homeStats.length ? (
            <div className="page-panel grid gap-6 p-8 sm:grid-cols-3">
              {homeStats.map((item) => (
                <div key={`${item.value}-${item.label}`} className="rounded-[1.5rem] bg-white/58 p-5">
                  <p className="font-serif text-4xl text-gold">{item.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.24em] text-stone/70">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
