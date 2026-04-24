import { CogIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "brandName",
      title: "브랜드명",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "bannerTitle",
      title: "메인 배너 문구",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "bannerSubtitle",
      title: "메인 배너 보조 문구",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroImage",
      title: "메인 대표 이미지",
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
      name: "introTitle",
      title: "메인 소개 제목",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "introText",
      title: "메인 소개글",
      type: "text",
      rows: 5,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "aboutTitle",
      title: "About 제목",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "aboutBody",
      title: "About 소개글",
      type: "text",
      rows: 8,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "contactHeading",
      title: "Contact 제목",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "contactDescription",
      title: "Contact 안내 문구",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "phone",
      title: "연락처",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "이메일",
      type: "string",
      validation: (rule) => rule.email().required(),
    }),
    defineField({
      name: "address",
      title: "주소",
      type: "string",
    }),
    defineField({
      name: "instagramUrl",
      title: "인스타그램 링크",
      type: "url",
    }),
    defineField({
      name: "kakaoUrl",
      title: "카카오톡 상담 링크",
      type: "url",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Site Settings",
        subtitle: "홈 배너, 소개글, 연락처를 관리합니다.",
      };
    },
  },
});
