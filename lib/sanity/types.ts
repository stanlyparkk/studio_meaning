export type SanityImage = {
  alt?: string;
  asset?: {
    _ref?: string;
    _type?: string;
  };
};

export type SiteSettings = {
  brandName: string;
  bannerTitle: string;
  bannerSubtitle: string;
  heroImage: SanityImage;
  introTitle: string;
  introText: string;
  aboutTitle: string;
  aboutBody: string;
  contactHeading: string;
  contactDescription: string;
  phone: string;
  email: string;
  address: string;
  instagramUrl: string;
  kakaoUrl: string;
};

export type PortfolioCategory = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
};

export type PortfolioItem = {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  shootDate: string;
  location: string;
  coverImage: SanityImage;
  gallery: SanityImage[];
  categories: string[];
  featured?: boolean;
};

export type VideoItem = {
  _id: string;
  title: string;
  description: string;
  youtubeUrl: string;
  coverImage: SanityImage;
  featured?: boolean;
};

export type PackagePlan = {
  _id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  note?: string;
  badge?: string;
  order?: number;
};
