import type {
  PackagePlan,
  PortfolioCategory,
  PortfolioItem,
  SiteSettings,
  VideoItem,
} from "@/lib/sanity/types";

const placeholder = (seed: string) => ({
  alt: seed,
});

export const mockSiteSettings: SiteSettings = {
  brandName: "Atelier de Vow",
  bannerTitle: "당신의 가장 아름다운 하루를, 오래 남을 장면으로",
  bannerSubtitle:
    "감도 높은 웨딩 사진과 시네마틱 영상을 통해 두 사람의 온도와 공기를 섬세하게 기록합니다.",
  heroImage: placeholder("hero wedding couple"),
  introTitle: "부드러운 결, 고급스러운 톤, 자연스러운 감정",
  introText:
    "예식의 긴장과 설렘, 가족의 미소, 두 사람만의 작은 시선까지 놓치지 않고 담아내는 웨딩 비주얼 스튜디오입니다. 사진과 영상이 함께 어우러져 하나의 영화처럼 기억되도록 디렉팅합니다.",
  aboutTitle: "사진보다 오래 남는 분위기를 기록합니다",
  aboutBody:
    "Atelier de Vow는 인위적인 포즈보다 두 사람의 결을 우선합니다. 자연광이 머무는 순간, 손끝의 떨림, 하객의 눈빛처럼 시간이 지나도 다시 꺼내 보고 싶은 장면을 정교한 색감과 구성으로 완성합니다. 본식 스냅, 프리웨딩, 브라이덜 샤워, 하이라이트 필름까지 브랜드 톤을 일관되게 설계해 드립니다.",
  contactHeading: "상담과 예약은 편한 채널로 남겨주세요",
  contactDescription:
    "예식일, 장소, 희망 촬영 구성만 보내주셔도 빠르게 가능 여부와 맞춤 견적을 안내해 드립니다.",
  phone: "010-1234-5678",
  email: "hello@atelierdevow.com",
  address: "서울 강남구 도산대로 000, 4F",
  instagramUrl: "https://instagram.com/atelierdevow",
  kakaoUrl: "https://pf.kakao.com/_atelierdevow",
};

export const mockCategories: PortfolioCategory[] = [
  {
    _id: "category-1",
    title: "Wedding Day",
    slug: "wedding-day",
    description: "본식 스냅과 하객, 디테일 장면을 담는 메인 카테고리",
  },
  {
    _id: "category-2",
    title: "Pre-Wedding",
    slug: "pre-wedding",
    description: "야외, 스튜디오, 제주 스냅 등 감성적인 프리웨딩",
  },
  {
    _id: "category-3",
    title: "Bridal Session",
    slug: "bridal-session",
    description: "드레스 피팅, 브라이덜 샤워, 리허설 촬영",
  },
];

export const mockPortfolioItems: PortfolioItem[] = [
  {
    _id: "portfolio-1",
    title: "햇살이 번진 가든 웨딩",
    slug: "sunlit-garden-wedding",
    summary:
      "부드러운 오후 빛과 크림 톤 플라워 데코가 어우러진 가든 웨딩 스토리",
    description:
      "서울 외곽의 프라이빗 가든에서 진행된 웨딩입니다. 하객 동선과 공간의 결을 넓게 담고, 두 사람의 감정선은 가까운 프레임으로 깊이 있게 풀어냈습니다.",
    shootDate: "2026-03-14",
    location: "서울 라움 아트가든",
    coverImage: placeholder("garden wedding cover"),
    gallery: [
      placeholder("garden wedding 1"),
      placeholder("garden wedding 2"),
      placeholder("garden wedding 3"),
      placeholder("garden wedding 4"),
    ],
    categories: ["Wedding Day", "Bridal Session"],
    featured: true,
  },
  {
    _id: "portfolio-2",
    title: "도심 속 클래식 호텔 웨딩",
    slug: "classic-hotel-wedding",
    summary: "샴페인 골드 톤으로 정리한 고급스러운 호텔 예식 기록",
    description:
      "샹들리에와 우드 톤이 매력적인 호텔 베뉴였습니다. 클래식한 무드를 살리기 위해 빛과 대칭 구도를 중심으로 사진과 영상 컷을 구성했습니다.",
    shootDate: "2026-02-01",
    location: "서울 중구 헤리티지 호텔",
    coverImage: placeholder("hotel wedding cover"),
    gallery: [
      placeholder("hotel wedding 1"),
      placeholder("hotel wedding 2"),
      placeholder("hotel wedding 3"),
      placeholder("hotel wedding 4"),
    ],
    categories: ["Wedding Day"],
    featured: true,
  },
  {
    _id: "portfolio-3",
    title: "제주 바람을 담은 프리웨딩",
    slug: "jeju-prewedding",
    summary: "해변과 억새밭 사이, 자연스러운 움직임으로 만든 프리웨딩",
    description:
      "정적인 포즈보다 함께 걷고 웃는 흐름을 살려 제주 특유의 공기감이 느껴지도록 촬영했습니다. 필름 룩에 가까운 부드러운 색감으로 보정했습니다.",
    shootDate: "2025-11-22",
    location: "제주 애월 해안",
    coverImage: placeholder("jeju prewedding cover"),
    gallery: [
      placeholder("jeju prewedding 1"),
      placeholder("jeju prewedding 2"),
      placeholder("jeju prewedding 3"),
      placeholder("jeju prewedding 4"),
    ],
    categories: ["Pre-Wedding"],
    featured: true,
  },
];

export const mockVideos: VideoItem[] = [
  {
    _id: "video-1",
    title: "Garden Wedding Highlight Film",
    description:
      "잔잔한 음악과 함께 두 사람의 리허설, 본식, 애프터파티까지 이어지는 하이라이트 필름",
    youtubeUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    coverImage: placeholder("garden wedding video"),
    featured: true,
  },
  {
    _id: "video-2",
    title: "Jeju Pre-Wedding Teaser",
    description:
      "바람과 햇빛, 옷자락의 움직임을 중심으로 편집한 감성 티저 영상",
    youtubeUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
    coverImage: placeholder("jeju teaser video"),
    featured: true,
  },
];

export const mockPackages: PackagePlan[] = [
  {
    _id: "package-1",
    title: "Signature Photo",
    price: "1,890,000원",
    description: "본식 스냅 중심의 시그니처 패키지",
    features: [
      "대표 촬영 1인 + 서브 촬영 1인",
      "예식 전후 스냅 포함 6시간",
      "보정본 80장 / 원본 전체 제공",
      "온라인 갤러리 전달",
    ],
    note: "서울 기준, 지방 및 섬 지역은 별도 출장비가 추가됩니다.",
    badge: "Best",
    order: 1,
  },
  {
    _id: "package-2",
    title: "Photo + Film",
    price: "2,790,000원",
    description: "사진과 하이라이트 영상을 함께 담는 인기 패키지",
    features: [
      "포토그래퍼 2인 + 비디오그래퍼 1인",
      "하이라이트 필름 3-5분",
      "대표 보정본 100장 / 원본 전체 제공",
      "1분 세로형 릴스 편집본 추가",
    ],
    note: "브랜드 톤에 맞춘 필름 룩 컬러 그레이딩이 포함됩니다.",
    badge: "Popular",
    order: 2,
  },
  {
    _id: "package-3",
    title: "Pre-Wedding Story",
    price: "1,290,000원",
    description: "자연광 또는 야외 중심의 프리웨딩 촬영 패키지",
    features: [
      "단독 촬영 4시간",
      "2개 로케이션 구성",
      "보정본 50장 / 원본 전체 제공",
      "무드보드 사전 미팅 1회",
    ],
    note: "드레스, 메이크업, 장소 대관은 별도입니다.",
    order: 3,
  },
];
