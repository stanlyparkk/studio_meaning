import Link from "next/link";

import { PortableImage } from "@/components/ui/portable-image";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  getFeaturedPortfolioItems,
  getFeaturedVideos,
  getPackages,
  getSiteSettings,
} from "@/lib/sanity/fetchers";
import { formatDate } from "@/lib/utils";

export default async function HomePage() {
  const [settings, portfolioItems, videos, packages] = await Promise.all([
    getSiteSettings(),
    getFeaturedPortfolioItems(),
    getFeaturedVideos(),
    getPackages(),
  ]);

  return (
    <div>
      <section className="container-shell grid gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
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
          <div className="glass-card absolute bottom-6 left-6 max-w-xs p-5 sm:bottom-8 sm:left-8">
            <p className="text-xs uppercase tracking-[0.32em] text-gold">Signature Mood</p>
            <p className="mt-3 text-base leading-7 text-stone/70">
              영화처럼 흐르는 장면과 은은한 필름 톤으로 두 사람의 서사를 담아냅니다.
            </p>
          </div>
        </div>
      </section>

      <section className="container-shell py-12 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="About The Studio"
            title={settings.introTitle}
            description={settings.introText}
          />
          <div className="glass-card grid gap-6 p-8 sm:grid-cols-3">
            <div>
              <p className="font-serif text-4xl text-gold">10+</p>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-stone/70">
                Years Capturing
              </p>
            </div>
            <div>
              <p className="font-serif text-4xl text-gold">250+</p>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-stone/70">
                Wedding Stories
              </p>
            </div>
            <div>
              <p className="font-serif text-4xl text-gold">Seoul / Jeju</p>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-stone/70">
                Available Region
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-12 lg:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Featured Portfolio"
            title="사진이 크게 숨 쉬는, 갤러리 중심 포트폴리오"
            description="본식, 프리웨딩, 브라이덜 세션까지 다양한 무드를 감성적인 컷 구성으로 소개합니다."
          />
          <Link href="/portfolio" className="outline-button">
            All Portfolio
          </Link>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <article key={item._id} className="group">
              <Link href={`/portfolio/${item.slug}`} className="block">
                <PortableImage
                  image={item.coverImage}
                  alt={item.title}
                  priority={index === 0}
                  className="h-[420px] transition duration-500 group-hover:-translate-y-1 sm:h-[480px]"
                />
                <div className="px-2 pt-5">
                  <div className="flex flex-wrap gap-2">
                    {item.categories.map((category) => (
                      <span
                        key={category}
                        className="rounded-full border border-gold/20 bg-white/60 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-gold"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-4 font-serif text-3xl text-stone">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone/70">{item.summary}</p>
                  <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-stone/60">
                    <span>{item.location}</span>
                    <span>{formatDate(item.shootDate)}</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell py-12 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="glass-card p-8 sm:p-10">
            <SectionHeading
              eyebrow="Highlight Film"
              title="움직임과 숨결까지 담는 웨딩 영상"
              description="유튜브 링크만 Sanity에서 바꿔도 즉시 페이지에 반영되도록 구성했습니다."
            />
            <div className="mt-8 grid gap-5">
              {videos.map((video) => (
                <div key={video._id} className="rounded-[1.5rem] border border-stone/10 bg-white/70 p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-gold">Video</p>
                  <h3 className="mt-3 font-serif text-2xl text-stone">{video.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone/70">{video.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {videos.map((video) => (
              <div key={video._id} className="glass-card p-4">
                <PortableImage image={video.coverImage} alt={video.title} className="h-[280px]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-12 lg:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Package / Price"
            title="선택하기 쉬운 구성, 조정 가능한 견적"
            description="패키지와 가격 정보는 Sanity에서 수정하면 즉시 반영되며, 상담 링크도 함께 운영할 수 있습니다."
          />
          <Link href="/packages" className="outline-button">
            View Packages
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article key={pkg._id} className="glass-card flex h-full flex-col p-8">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-serif text-3xl text-stone">{pkg.title}</h3>
                {pkg.badge ? (
                  <span className="rounded-full bg-[#f3e2c6] px-3 py-1 text-xs uppercase tracking-[0.24em] text-gold">
                    {pkg.badge}
                  </span>
                ) : null}
              </div>
              <p className="mt-4 text-3xl font-semibold text-gold">{pkg.price}</p>
              <p className="mt-4 text-sm leading-7 text-stone/70">{pkg.description}</p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-stone/75">
                {pkg.features.slice(0, 3).map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell py-16 lg:py-24">
        <div className="glass-card overflow-hidden p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="section-kicker">Contact</p>
              <h2 className="mt-4 font-serif text-4xl text-stone sm:text-5xl">
                {settings.contactHeading}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-stone/70">
                {settings.contactDescription}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href={settings.kakaoUrl} target="_blank" rel="noreferrer" className="gold-button">
                KakaoTalk
              </a>
              <a
                href={settings.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="outline-button"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
