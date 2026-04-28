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
    }),
    defineField({
      name: "bannerTitle",
      title: "메인 배너 문구",
      type: "string",
    }),
    defineField({
      name: "bannerSubtitle",
      title: "메인 배너 보조 문구",
      type: "text",
      rows: 3,
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
    }),
    defineField({
      name: "homeMoodEnabled",
      title: "메인 이미지 위 분위기 카드 표시",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "homeMoodTitle",
      title: "분위기 카드 제목",
      type: "string",
      hidden: ({ document }) => !document?.homeMoodEnabled,
    }),
    defineField({
      name: "homeMoodText",
      title: "분위기 카드 설명",
      type: "text",
      rows: 3,
      hidden: ({ document }) => !document?.homeMoodEnabled,
    }),
    defineField({
      name: "introTitle",
      title: "메인 소개 제목",
      type: "string",
    }),
    defineField({
      name: "introText",
      title: "메인 소개글",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "homeStatsEnabled",
      title: "메인 통계 영역 표시",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "homeStats",
      title: "메인 통계 항목",
      type: "array",
      hidden: ({ document }) => !document?.homeStatsEnabled,
      of: [
        {
          type: "object",
          name: "homeStat",
          fields: [
            defineField({
              name: "value",
              title: "큰 텍스트",
              type: "string",
            }),
            defineField({
              name: "label",
              title: "보조 문구",
              type: "string",
            }),
          ],
          preview: {
            select: {
              title: "value",
              subtitle: "label",
            },
          },
        },
      ],
      validation: (rule) => rule.max(4),
    }),
    defineField({
      name: "aboutTitle",
      title: "About 제목",
      type: "string",
    }),
    defineField({
      name: "aboutBody",
      title: "About 소개글",
      type: "text",
      rows: 8,
    }),
    defineField({
      name: "aboutImages",
      title: "About 전용 이미지",
      type: "array",
      description: "About 페이지 오른쪽에 표시할 이미지를 등록합니다. 포트폴리오 이미지와 별도로 관리됩니다.",
      of: [
        {
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
        },
      ],
    }),
    defineField({
      name: "aboutHighlights",
      title: "About 하단 강조 문구 카드",
      type: "array",
      of: [
        {
          type: "object",
          name: "aboutHighlight",
          fields: [
            defineField({
              name: "text",
              title: "문구",
              type: "string",
            }),
          ],
          preview: {
            select: {
              title: "text",
            },
          },
        },
      ],
    }),
    defineField({
      name: "portfolioTitle",
      title: "Portfolio 페이지 제목",
      type: "string",
    }),
    defineField({
      name: "portfolioDescription",
      title: "Portfolio 페이지 설명",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "packageTitle",
      title: "Package 페이지 제목",
      type: "string",
    }),
    defineField({
      name: "packageDescription",
      title: "Package 페이지 설명",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "packageCustomQuoteEnabled",
      title: "Package 하단 맞춤 견적 영역 표시",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "packageCustomQuoteEyebrow",
      title: "맞춤 견적 영역 상단 문구",
      type: "string",
      hidden: ({ document }) => !document?.packageCustomQuoteEnabled,
    }),
    defineField({
      name: "packageCustomQuoteTitle",
      title: "맞춤 견적 영역 제목",
      type: "string",
      hidden: ({ document }) => !document?.packageCustomQuoteEnabled,
    }),
    defineField({
      name: "contactHeading",
      title: "Contact 제목",
      type: "string",
    }),
    defineField({
      name: "contactDescription",
      title: "Contact 안내 문구",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "contactStepsTitle",
      title: "Contact 진행 안내 제목",
      type: "string",
    }),
    defineField({
      name: "contactSteps",
      title: "Contact 진행 안내 단계",
      type: "array",
      of: [
        {
          type: "object",
          name: "contactStep",
          fields: [
            defineField({
              name: "title",
              title: "단계 제목",
              type: "string",
            }),
            defineField({
              name: "text",
              title: "설명",
              type: "text",
              rows: 3,
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "text",
            },
          },
        },
      ],
    }),
    defineField({
      name: "phone",
      title: "연락처",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "이메일",
      type: "string",
      validation: (rule) => rule.email(),
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
        subtitle: "홈 배너, 소개글, 통계, 연락처를 관리합니다.",
      };
    },
  },
});
