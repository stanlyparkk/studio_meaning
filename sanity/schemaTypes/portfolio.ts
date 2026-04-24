import { ImageIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const portfolioType = defineType({
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "title",
      title: "포트폴리오 제목",
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
      name: "summary",
      title: "목록용 짧은 설명",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "상세 설명",
      type: "text",
      rows: 8,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shootDate",
      title: "촬영일",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "촬영 장소",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "대표 이미지",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "대체 텍스트",
          type: "string",
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "포트폴리오 사진 여러 장",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: "alt",
              title: "대체 텍스트",
              type: "string",
            }),
          ],
        }),
      ],
      validation: (rule) => rule.min(2).required(),
    }),
    defineField({
      name: "categories",
      title: "포트폴리오 카테고리",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "portfolioCategory" }],
        }),
      ],
    }),
    defineField({
      name: "featured",
      title: "메인 노출 여부",
      type: "boolean",
      initialValue: true,
    }),
  ],
});
