import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { CmsNotice } from "@/components/sections/cms-notice";
import { getSiteSettings } from "@/lib/sanity/fetchers";
import { absoluteUrl } from "@/lib/utils";

import "@/app/globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl()),
  title: {
    default: "Atelier de Vow | Wedding Portfolio",
    template: "%s | Atelier de Vow",
  },
  description:
    "고급스럽고 감성적인 웨딩 사진과 영상을 소개하는 포트폴리오 사이트입니다.",
  keywords: [
    "웨딩 사진",
    "웨딩 영상",
    "웨딩 포트폴리오",
    "본식 스냅",
    "프리웨딩",
  ],
  openGraph: {
    title: "Atelier de Vow | Wedding Portfolio",
    description:
      "고급스럽고 감성적인 웨딩 사진과 영상을 소개하는 포트폴리오 사이트입니다.",
    url: absoluteUrl("/"),
    siteName: "Atelier de Vow",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atelier de Vow | Wedding Portfolio",
    description:
      "고급스럽고 감성적인 웨딩 사진과 영상을 소개하는 포트폴리오 사이트입니다.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();

  return (
    <html lang="ko" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans text-stone antialiased">
        <CmsNotice />
        <Header brandName={settings.brandName} />
        <main>{children}</main>
        <Footer settings={settings} />
      </body>
    </html>
  );
}
