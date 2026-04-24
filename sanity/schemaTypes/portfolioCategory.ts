import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const portfolioCategoryType = defineType({
  name: "portfolioCategory",
  title: "Portfolio Category",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      title: "카테고리명",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "슬러그",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "설명",
      type: "text",
      rows: 3,
    }),
  ],
});
