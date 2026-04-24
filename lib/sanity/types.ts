export type SanityImage = {
  alt?: string;
  asset?: {
    _ref?: string;
    _type?: string;
  };
};

export type HomeStat = {
  value: string;
  label: string;
};

export type SimpleTextCard = {
  text: string;
};

export type StepItem = {
  title?: string;
  text: string;
};

export type PortfolioPrimaryCategory = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
};

export type PortfolioSecondaryCategory = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  primaryCategorySlug?: string;
  primaryCategoryTitle?: string;
};

export type SiteSettings = {
  brandName: string;
  bannerTitle: string;
  bannerSubtitle: string;
  heroImage: SanityImage;
  homeMoodEnabled?: boolean;
  homeMoodTitle?: string;
  homeMoodText?: string;
  introTitle: string;
  introText: string;
  homeStatsEnabled?: boolean;
  homeStats?: HomeStat[];
  aboutTitle: string;
  aboutBody: string;
  aboutHighlights?: SimpleTextCard[];
  portfolioTitle?: string;
  portfolioDescription?: string;
  packageTitle?: string;
  packageDescription?: string;
  packageCustomQuoteEnabled?: boolean;
  packageCustomQuoteEyebrow?: string;
  packageCustomQuoteTitle?: string;
  contactStepsTitle?: string;
  contactSteps?: StepItem[];
  contactHeading: string;
  contactDescription: string;
  phone: string;
  email: string;
  address: string;
  instagramUrl: string;
  kakaoUrl: string;
};

export type PortfolioItem = {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  shootDate: string;
  location: string;
  mediaType: "photo" | "video";
  youtubeUrl?: string;
  coverImage?: SanityImage;
  gallery: SanityImage[];
  primaryCategory?: {
    title: string;
    slug: string;
  };
  secondaryCategories: {
    title: string;
    slug: string;
    primaryCategorySlug?: string;
  }[];
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
