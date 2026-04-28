import type { Metadata } from "next";

import { PageIntro } from "@/components/ui/page-intro";
import { getSiteSettings } from "@/lib/sanity/fetchers";
import { buildMetadata } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "웨딩 사진 및 영상 상담과 예약 문의를 남겨주세요.",
  path: "/contact",
});

export default async function ContactPage() {
  const settings = await getSiteSettings();
  const contactSteps = settings.contactSteps?.filter((step) => step.text?.trim()) || [];
  const hasContactInfo = Boolean(settings.phone || settings.email || settings.address);
  const hasContactLinks = Boolean(settings.kakaoUrl || settings.instagramUrl);
  const showContactPanel = Boolean(
    settings.contactStepsTitle || contactSteps.length || hasContactLinks,
  );

  return (
    <div className="page-shell">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <PageIntro
            eyebrow="Contact"
            title={settings.contactHeading || "Contact"}
            description={settings.contactDescription}
            noWrapDesktop={false}
          />

          {hasContactInfo ? (
            <dl className="mt-10 grid gap-6">
              {settings.phone ? (
                <div className="page-panel p-6">
                  <dt className="text-xs uppercase tracking-[0.26em] text-gold">Phone</dt>
                  <dd className="mt-3 text-lg text-stone">
                    <a href={`tel:${settings.phone.replaceAll("-", "")}`}>{settings.phone}</a>
                  </dd>
                </div>
              ) : null}
              {settings.email ? (
                <div className="page-panel p-6">
                  <dt className="text-xs uppercase tracking-[0.26em] text-gold">Email</dt>
                  <dd className="mt-3 text-lg text-stone">
                    <a href={`mailto:${settings.email}`}>{settings.email}</a>
                  </dd>
                </div>
              ) : null}
              {settings.address ? (
                <div className="page-panel p-6">
                  <dt className="text-xs uppercase tracking-[0.26em] text-gold">Address</dt>
                  <dd className="mt-3 text-lg text-stone">{settings.address}</dd>
                </div>
              ) : null}
            </dl>
          ) : null}
        </div>

        {showContactPanel ? (
          <div className="page-panel p-8 sm:p-10">
            {settings.contactStepsTitle ? (
              <p className="text-xs uppercase tracking-[0.3em] text-gold">
                {settings.contactStepsTitle}
              </p>
            ) : null}
            {contactSteps.length ? (
              <div className="mt-6 grid gap-5">
                {contactSteps.map((step, index) => (
                  <div
                    key={`${step.title || "step"}-${index}`}
                    className="rounded-[1.75rem] border border-stone/10 bg-white/70 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3e2c6] text-xs uppercase tracking-[0.22em] text-gold">
                        {index + 1}
                      </span>
                      <p className="text-xs uppercase tracking-[0.24em] text-gold">
                        {step.title || `Step ${index + 1}`}
                      </p>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-stone/70">{step.text}</p>
                  </div>
                ))}
              </div>
            ) : null}

            {hasContactLinks ? (
              <div className="mt-8 flex flex-wrap gap-4">
                {settings.kakaoUrl ? (
                  <a
                    href={settings.kakaoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="gold-button"
                  >
                    Kakao Consultation
                  </a>
                ) : null}
                {settings.instagramUrl ? (
                  <a
                    href={settings.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="outline-button"
                  >
                    Instagram DM
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
