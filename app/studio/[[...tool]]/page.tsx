import { isSanityConfigured } from "@/lib/sanity/env";
import { StudioClient } from "@/components/studio-client";

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <div className="container-shell flex min-h-[70vh] items-center justify-center py-20">
        <div className="glass-card max-w-2xl p-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Sanity Studio</p>
          <h1 className="mt-4 font-serif text-4xl text-stone">
            환경변수를 먼저 설정해 주세요
          </h1>
          <p className="mt-5 text-base leading-8 text-stone/70">
            `.env.local`에 `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`,
            `NEXT_PUBLIC_SANITY_API_VERSION` 값을 입력한 뒤 새로고침하면 `/studio`에서 로그인 후
            콘텐츠를 관리할 수 있습니다.
          </p>
        </div>
      </div>
    );
  }

  return <StudioClient />;
}
