import { groq } from "next-sanity";

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    brandName,
    bannerTitle,
    bannerSubtitle,
    heroImage{
      alt,
      asset
    },
    homeMoodEnabled,
    homeMoodTitle,
    homeMoodText,
    introTitle,
    introText,
    homeStatsEnabled,
    homeStats[]{
      value,
      label
    },
    aboutTitle,
    aboutBody,
    "aboutImages": coalesce(aboutImages[]{
      alt,
      asset
    }, []),
    aboutHighlights[]{
      text
    },
    portfolioTitle,
    portfolioDescription,
    packageTitle,
    packageDescription,
    packageCustomQuoteEnabled,
    packageCustomQuoteEyebrow,
    packageCustomQuoteTitle,
    contactHeading,
    contactDescription,
    contactStepsTitle,
    contactSteps[]{
      title,
      text
    },
    phone,
    email,
    address,
    instagramUrl,
    kakaoUrl
  }
`;

export const portfolioPrimaryCategoriesQuery = groq`
  *[_type == "portfolioPrimaryCategory"] | order(title asc){
    _id,
    title,
    "slug": coalesce(slug.current, _id),
    description
  }
`;

export const portfolioSecondaryCategoriesQuery = groq`
  *[_type == "portfolioSecondaryCategory"] | order(title asc){
    _id,
    title,
    "slug": coalesce(slug.current, _id),
    description,
    "primaryCategorySlug": coalesce(primaryCategory->slug.current, primaryCategory->_id),
    "primaryCategoryTitle": primaryCategory->title
  }
`;

export const portfoliosQuery = groq`
  *[_type == "portfolio"] | order(featured desc, shootDate desc){
    _id,
    title,
    "slug": coalesce(slug.current, _id),
    summary,
    description,
    shootDate,
    location,
    "mediaType": coalesce(mediaType, "photo"),
    youtubeUrl,
    coverImage{
      alt,
      asset
    },
    "gallery": coalesce(gallery[]{
      alt,
      asset
    }, []),
    "primaryCategory": primaryCategory->{
      title,
      "slug": coalesce(slug.current, _id)
    },
    "secondaryCategories": coalesce(secondaryCategories[]->{
      title,
      "slug": coalesce(slug.current, _id),
      "primaryCategorySlug": coalesce(primaryCategory->slug.current, primaryCategory->_id)
    }, []),
    featured
  }
`;

export const portfolioBySlugQuery = groq`
  *[_type == "portfolio" && (slug.current == $slug || _id == $slug)][0]{
    _id,
    title,
    "slug": coalesce(slug.current, _id),
    summary,
    description,
    shootDate,
    location,
    "mediaType": coalesce(mediaType, "photo"),
    youtubeUrl,
    coverImage{
      alt,
      asset
    },
    "gallery": coalesce(gallery[]{
      alt,
      asset
    }, []),
    "primaryCategory": primaryCategory->{
      title,
      "slug": coalesce(slug.current, _id)
    },
    "secondaryCategories": coalesce(secondaryCategories[]->{
      title,
      "slug": coalesce(slug.current, _id),
      "primaryCategorySlug": coalesce(primaryCategory->slug.current, primaryCategory->_id)
    }, []),
    featured
  }
`;

export const packagesQuery = groq`
  *[_type == "packagePlan"] | order(order asc, _createdAt asc){
    _id,
    title,
    price,
    description,
    "features": coalesce(features, []),
    note,
    badge,
    order
  }
`;
