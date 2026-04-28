import type { Metadata } from "next";
import Link from "next/link";

import { PageIntro } from "@/components/ui/page-intro";
import { getPackages, getSiteSettings } from "@/lib/sanity/fetchers";
import { buildMetadata } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Package / Price",
  description: "웨딩 사진과 영상 패키지 및 가격 정보를 안내합니다.",
  path: "/packages",
});

export default async function PackagesPage() {
  const [settings, packages] = await Promise.all([getSiteSettings(), getPackages()]);
  const showCustomQuote =
    settings.packageCustomQuoteEnabled &&
    (settings.packageCustomQuoteEyebrow?.trim() || settings.packageCustomQuoteTitle?.trim());
  const visiblePackages = packages.filter((pkg) => pkg.title?.trim());

  return (
    <div className="page-shell">
      <PageIntro
        eyebrow="Package / Price"
        title={settings.packageTitle || "필요한 구성에 맞춰 선택하는 촬영 패키지"}
        description={
          settings.packageDescription ||
          "가격과 포함 항목은 Sanity Studio에서 손쉽게 수정할 수 있으며, 시즌별 프로모션도 바로 반영할 수 있습니다."
        }
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {visiblePackages.map((pkg) => {
          const features = pkg.features?.filter((feature) => feature?.trim()) || [];

          return (
            <article
              key={pkg._id}
              className="page-panel flex h-full flex-col overflow-hidden p-8 transition duration-300 hover:-translate-y-1"
            >
              <div className="mb-6 h-px w-full bg-gradient-to-r from-gold/70 via-[#edd7b0] to-transparent" />
              <div className="flex items-center justify-between gap-4">
                <h2 className="font-serif text-3xl text-stone">{pkg.title}</h2>
                {pkg.badge ? (
                  <span className="rounded-full bg-[#f5e3c6] px-3 py-1 text-xs uppercase tracking-[0.24em] text-gold">
                    {pkg.badge}
                  </span>
                ) : null}
              </div>
              {pkg.price ? (
                <p className="mt-5 text-4xl font-semibold text-gold">{pkg.price}</p>
              ) : null}
              {pkg.description ? (
                <p className="mt-4 text-sm leading-7 text-stone/70">{pkg.description}</p>
              ) : null}
              {features.length ? (
                <ul className="mt-6 space-y-3 text-sm leading-7 text-stone/75">
                  {features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              ) : null}
              {pkg.note ? (
                <p className="mt-6 text-sm leading-7 text-stone/60">{pkg.note}</p>
              ) : null}
            </article>
          );
        })}
      </div>

      {showCustomQuote ? (
        <div className="page-panel mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            {settings.packageCustomQuoteEyebrow ? (
              <p className="text-xs uppercase tracking-[0.3em] text-gold">
                {settings.packageCustomQuoteEyebrow}
              </p>
            ) : null}
            {settings.packageCustomQuoteTitle ? (
              <h3 className="mt-3 font-serif text-3xl text-stone">
                {settings.packageCustomQuoteTitle}
              </h3>
            ) : null}
          </div>
          <Link href="/contact" className="gold-button">
            Contact
          </Link>
        </div>
      ) : null}
    </div>
  );
}
