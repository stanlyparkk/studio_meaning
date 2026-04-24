"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { SiteSettings } from "@/lib/sanity/types";

export function Footer({ settings }: { settings: SiteSettings }) {
  const pathname = usePathname();

  if (pathname.startsWith("/studio")) {
    return null;
  }

  return (
    <footer className="border-t border-stone/10 bg-[#f7f0e6]/60">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="text-[1.25rem] font-semibold tracking-[0.24em] text-stone">
            {settings.brandName}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-stone/72">
            {settings.bannerSubtitle}
          </p>
        </div>

        <div className="grid gap-3 text-sm text-stone/72">
          <a href={`tel:${settings.phone.replaceAll("-", "")}`} className="hover:text-stone">
            {settings.phone}
          </a>
          <a href={`mailto:${settings.email}`} className="hover:text-stone">
            {settings.email}
          </a>
          <p>{settings.address}</p>
          <div className="flex flex-wrap gap-4 pt-2 uppercase tracking-[0.22em]">
            <Link href="/portfolio" className="hover:text-stone">
              Portfolio
            </Link>
            <Link href="/packages" className="hover:text-stone">
              Package
            </Link>
            <a href={settings.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-stone">
              Instagram
            </a>
            <a href={settings.kakaoUrl} target="_blank" rel="noreferrer" className="hover:text-stone">
              KakaoTalk
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
