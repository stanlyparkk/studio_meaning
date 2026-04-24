import type { Metadata } from "next";

import { SectionHeading } from "@/components/ui/section-heading";
import { getSiteSettings } from "@/lib/sanity/fetchers";
import { buildMetadata } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "웨딩 사진 및 영상 상담과 예약 문의를 남겨주세요.",
  path: "/contact",
});

export default async function ContactPage() {
  const settings = await getSiteSettings();

  return (
    <div className="container-shell py-14 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title={settings.contactHeading}
            description={settings.contactDescription}
          />

          <dl className="mt-10 grid gap-6">
            <div className="glass-card p-6">
              <dt className="text-xs uppercase tracking-[0.26em] text-gold">Phone</dt>
              <dd className="mt-3 text-lg text-stone">
                <a href={`tel:${settings.phone.replaceAll("-", "")}`}>{settings.phone}</a>
              </dd>
            </div>
            <div className="glass-card p-6">
              <dt className="text-xs uppercase tracking-[0.26em] text-gold">Email</dt>
              <dd className="mt-3 text-lg text-stone">
                <a href={`mailto:${settings.email}`}>{settings.email}</a>
              </dd>
            </div>
            <div className="glass-card p-6">
              <dt className="text-xs uppercase tracking-[0.26em] text-gold">Address</dt>
              <dd className="mt-3 text-lg text-stone">{settings.address}</dd>
            </div>
          </dl>
        </div>

        <div className="glass-card p-8 sm:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">How It Works</p>
          <div className="mt-6 grid gap-5">
            {[
              "예식일 / 장소 / 원하시는 촬영 구성을 전달해 주세요.",
              "가능 여부와 기본 견적, 레퍼런스 스타일을 안내해 드립니다.",
              "확정 후 촬영 전 미팅을 통해 무드와 동선을 세팅합니다.",
            ].map((step, index) => (
              <div key={step} className="rounded-[1.5rem] border border-stone/10 bg-white/70 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-gold">
                  Step {index + 1}
                </p>
                <p className="mt-3 text-sm leading-7 text-stone/70">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={settings.kakaoUrl} target="_blank" rel="noreferrer" className="gold-button">
              Kakao Consultation
            </a>
            <a
              href={settings.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="outline-button"
            >
              Instagram DM
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
