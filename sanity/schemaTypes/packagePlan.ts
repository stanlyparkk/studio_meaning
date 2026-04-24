import { DocumentsIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const packagePlanType = defineType({
  name: "packagePlan",
  title: "Package / Price",
  type: "document",
  icon: DocumentsIcon,
  fields: [
    defineField({
      name: "title",
      title: "패키지명",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "price",
      title: "가격",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "설명",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "features",
      title: "포함 항목",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (rule) => rule.min(2).required(),
    }),
    defineField({
      name: "note",
      title: "추가 안내",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "badge",
      title: "뱃지 문구",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "정렬 순서",
      type: "number",
      initialValue: 1,
    }),
  ],
});
