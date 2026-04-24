import type { Metadata } from "next";

import { PortfolioBrowser } from "@/components/portfolio-browser";
import { PageIntro } from "@/components/ui/page-intro";
import {
  getPortfolioItems,
  getPortfolioPrimaryCategories,
  getPortfolioSecondaryCategories,
  getSiteSettings,
} from "@/lib/sanity/fetchers";
import { buildMetadata } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio",
  description: "사진과 영상 포트폴리오 목록 페이지입니다.",
  path: "/portfolio",
});

export default async function PortfolioPage() {
  const [settings, primaryCategories, secondaryCategories, items] = await Promise.all([
    getSiteSettings(),
    getPortfolioPrimaryCategories(),
    getPortfolioSecondaryCategories(),
    getPortfolioItems(),
  ]);

  return (
    <div className="page-shell">
      <PageIntro
        eyebrow="Portfolio"
        title={settings.portfolioTitle || "클래식한 결부터 자연스러운 공기감까지"}
        description={
          settings.portfolioDescription ||
          "카테고리별 무드와 베뉴 특성을 살린 사진과 영상 포트폴리오를 한눈에 살펴보실 수 있습니다."
        }
      />

      <PortfolioBrowser
        items={items}
        primaryCategories={primaryCategories}
        secondaryCategories={secondaryCategories}
      />
    </div>
  );
}
