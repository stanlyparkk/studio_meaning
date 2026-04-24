import type { Metadata } from "next";
import Link from "next/link";

import { SectionHeading } from "@/components/ui/section-heading";
import { getPackages } from "@/lib/sanity/fetchers";
import { buildMetadata } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Package / Price",
  description: "웨딩 사진과 영상 패키지 및 가격 정보를 안내합니다.",
  path: "/packages",
});

export default async function PackagesPage() {
  const packages = await getPackages();

  return (
    <div className="container-shell py-14 lg:py-24">
      <SectionHeading
        eyebrow="Package / Price"
        title="필요한 구성에 맞춰 선택하는 촬영 패키지"
        description="가격과 포함 항목은 Sanity Studio에서 손쉽게 수정할 수 있으며, 시즌별 프로모션도 바로 반영할 수 있습니다."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {packages.map((pkg) => (
          <article key={pkg._id} className="glass-card flex h-full flex-col p-8">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-serif text-3xl text-stone">{pkg.title}</h2>
              {pkg.badge ? (
                <span className="rounded-full bg-[#f5e3c6] px-3 py-1 text-xs uppercase tracking-[0.24em] text-gold">
                  {pkg.badge}
                </span>
              ) : null}
            </div>
            <p className="mt-5 text-4xl font-semibold text-gold">{pkg.price}</p>
            <p className="mt-4 text-sm leading-7 text-stone/72">{pkg.description}</p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-stone/76">
              {pkg.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            {pkg.note ? <p className="mt-6 text-sm leading-7 text-stone/62">{pkg.note}</p> : null}
          </article>
        ))}
      </div>

      <div className="glass-card mt-12 flex flex-col gap-5 p-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Custom Quote</p>
          <h3 className="mt-3 font-serif text-3xl text-stone">
            예식 일정과 장소에 맞춘 맞춤 견적도 가능합니다
          </h3>
        </div>
        <Link href="/contact" className="gold-button">
          Contact
        </Link>
      </div>
    </div>
  );
}
