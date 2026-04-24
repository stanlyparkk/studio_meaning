import { packagePlanType } from "./packagePlan";
import { portfolioType } from "./portfolio";
import { portfolioPrimaryCategoryType } from "./portfolioPrimaryCategory";
import { portfolioSecondaryCategoryType } from "./portfolioSecondaryCategory";
import { siteSettingsType } from "./siteSettings";

export const schemaTypes = [
  siteSettingsType,
  portfolioPrimaryCategoryType,
  portfolioSecondaryCategoryType,
  portfolioType,
  packagePlanType,
];
