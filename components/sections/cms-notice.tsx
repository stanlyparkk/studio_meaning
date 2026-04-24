"use client";

import { usePathname } from "next/navigation";

import { isSanityConfigured } from "@/lib/sanity/env";

export function CmsNotice() {
  const pathname = usePathname();

  if (isSanityConfigured || pathname.startsWith("/studio")) {
    return null;
  }

  return (
    <div className="border-b border-gold/20 bg-[#f2e6d0]/80 px-6 py-3 text-center text-sm text-stone/70 backdrop-blur">
      현재 샘플 콘텐츠로 표시 중입니다. 실제 운영 전에는 `.env`에 Sanity 환경변수를 입력하고 `/studio`에서 콘텐츠를 등록해 주세요.
    </div>
  );
}
