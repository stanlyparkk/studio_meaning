import { PlayIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const videoEntryType = defineType({
  name: "videoEntry",
  title: "Video",
  type: "document",
  icon: PlayIcon,
  fields: [
    defineField({
      name: "title",
      title: "영상 제목",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "영상 설명",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "youtubeUrl",
      title: "유튜브 영상 URL",
      type: "url",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "영상 썸네일용 이미지",
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
      name: "featured",
      title: "메인 노출 여부",
      type: "boolean",
      initialValue: true,
    }),
  ],
});
