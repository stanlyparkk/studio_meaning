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
    introTitle,
    introText,
    aboutTitle,
    aboutBody,
    contactHeading,
    contactDescription,
    phone,
    email,
    address,
    instagramUrl,
    kakaoUrl
  }
`;

export const portfolioCategoriesQuery = groq`
  *[_type == "portfolioCategory"] | order(title asc){
    _id,
    title,
    "slug": slug.current,
    description
  }
`;

export const portfoliosQuery = groq`
  *[_type == "portfolio"] | order(featured desc, shootDate desc){
    _id,
    title,
    "slug": slug.current,
    summary,
    description,
    shootDate,
    location,
    coverImage{
      alt,
      asset
    },
    gallery[]{
      alt,
      asset
    },
    "categories": categories[]->title,
    featured
  }
`;

export const portfolioBySlugQuery = groq`
  *[_type == "portfolio" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    summary,
    description,
    shootDate,
    location,
    coverImage{
      alt,
      asset
    },
    gallery[]{
      alt,
      asset
    },
    "categories": categories[]->title,
    featured
  }
`;

export const videosQuery = groq`
  *[_type == "videoEntry"] | order(featured desc, _createdAt desc){
    _id,
    title,
    description,
    youtubeUrl,
    coverImage{
      alt,
      asset
    },
    featured
  }
`;

export const packagesQuery = groq`
  *[_type == "packagePlan"] | order(order asc, _createdAt asc){
    _id,
    title,
    price,
    description,
    features,
    note,
    badge,
    order
  }
`;
