import {
  mockCategories,
  mockPackages,
  mockPortfolioItems,
  mockSiteSettings,
  mockVideos,
} from "@/lib/sanity/mock-data";
import {
  packagesQuery,
  portfolioBySlugQuery,
  portfolioCategoriesQuery,
  portfoliosQuery,
  siteSettingsQuery,
  videosQuery,
} from "@/lib/sanity/queries";
import type {
  PackagePlan,
  PortfolioCategory,
  PortfolioItem,
  SiteSettings,
  VideoItem,
} from "@/lib/sanity/types";
import { sanityClient } from "@/lib/sanity/client";
import { isSanityConfigured } from "@/lib/sanity/env";

async function safeFetch<T>(
  query: string,
  params: Record<string, unknown>,
  fallback: T,
) {
  if (!isSanityConfigured) {
    return fallback;
  }

  try {
    const result = await sanityClient.fetch<T>(query, params, {
      next: { revalidate: 60 },
    });

    return result ?? fallback;
  } catch {
    return fallback;
  }
}

export async function getSiteSettings() {
  return safeFetch<SiteSettings>(siteSettingsQuery, {}, mockSiteSettings);
}

export async function getPortfolioCategories() {
  return safeFetch<PortfolioCategory[]>(
    portfolioCategoriesQuery,
    {},
    mockCategories,
  );
}

export async function getPortfolioItems() {
  return safeFetch<PortfolioItem[]>(portfoliosQuery, {}, mockPortfolioItems);
}

export async function getFeaturedPortfolioItems() {
  const items = await getPortfolioItems();
  return items.filter((item) => item.featured).slice(0, 3);
}

export async function getPortfolioItemBySlug(slug: string) {
  const fallback = mockPortfolioItems.find((item) => item.slug === slug) || null;

  return safeFetch<PortfolioItem | null>(
    portfolioBySlugQuery,
    { slug },
    fallback,
  );
}

export async function getVideos() {
  return safeFetch<VideoItem[]>(videosQuery, {}, mockVideos);
}

export async function getFeaturedVideos() {
  const items = await getVideos();
  return items.filter((item) => item.featured).slice(0, 2);
}

export async function getPackages() {
  return safeFetch<PackagePlan[]>(packagesQuery, {}, mockPackages);
}
