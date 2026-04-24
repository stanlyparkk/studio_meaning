# Next.js 웨딩 사진/영상 포트폴리오 사이트

Next.js App Router, TypeScript, Tailwind CSS, Sanity CMS를 사용한 웨딩 사진작가/웨딩 촬영 업체용 홍보 사이트입니다.

## 구현 범위

- 메인 페이지
- About 페이지
- Portfolio 목록 페이지
- Portfolio 상세 페이지
- Video 페이지
- Package / Price 페이지
- Contact 페이지
- `/studio` Sanity Studio 관리자 페이지
- 모바일/PC 반응형 레이아웃
- `next/image` 기반 lazy loading
- 기본 SEO 메타데이터, `robots.txt`, `sitemap.xml`
- Vercel 배포 가능한 구조

## 기술 스택

- Next.js App Router
- TypeScript
- Tailwind CSS
- Sanity CMS
- Vercel

## 폴더 구조

```text
app/
  about/
  contact/
  packages/
  portfolio/
  studio/
  videos/
components/
lib/
  sanity/
sanity/
  schemaTypes/
```

## 1. 설치 방법

```bash
npm install
```

## 2. 환경변수 설정

프로젝트 루트에 `.env.local` 파일을 만들고 아래 값을 채워 주세요.

```powershell
Copy-Item .env.example .env.local
```

`.env.example`

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-02-19
SANITY_API_READ_TOKEN=
```

### 환경변수 설명

- `NEXT_PUBLIC_SITE_URL`: 사이트 기본 주소
- `NEXT_PUBLIC_SANITY_PROJECT_ID`: Sanity 프로젝트 ID
- `NEXT_PUBLIC_SANITY_DATASET`: Sanity dataset 이름
- `NEXT_PUBLIC_SANITY_API_VERSION`: Sanity API 버전 날짜
- `SANITY_API_READ_TOKEN`: private dataset을 읽을 때 사용하는 읽기 전용 토큰

공개 dataset이면 `SANITY_API_READ_TOKEN`은 비워둘 수 있습니다.

## 3. Sanity 프로젝트 연결

### 방법 A. 이미 Sanity 프로젝트가 있는 경우

1. Sanity 프로젝트의 `projectId`와 `dataset`을 확인합니다.
2. `.env.local`에 값을 입력합니다.
3. 배포 도메인과 로컬 개발 주소를 Sanity CORS 허용 목록에 등록합니다.

권장 CORS 등록 주소:

- `http://localhost:3000`
- `https://your-domain.vercel.app`
- 커스텀 도메인을 사용할 경우 그 도메인도 추가

### 방법 B. 새 Sanity 프로젝트 생성

1. [Sanity](https://www.sanity.io/)에서 프로젝트를 생성합니다.
2. dataset을 `production`으로 생성하거나 원하는 이름으로 만듭니다.
3. 생성된 `projectId`와 `dataset`을 `.env.local`에 넣습니다.
4. 필요하면 read token을 발급해 `SANITY_API_READ_TOKEN`에 넣습니다.

## 4. 로컬 실행 방법

```bash
npm run dev
```

브라우저에서 아래 경로를 확인합니다.

- 메인: `http://localhost:3000`
- 관리자: `http://localhost:3000/studio`

Sanity 환경변수가 아직 없으면 프론트는 샘플 콘텐츠로 보이고, `/studio`에서는 설정 안내 메시지가 표시됩니다.

## 5. 배포 방법

### Vercel 배포

1. 이 프로젝트를 GitHub 저장소에 업로드합니다.
2. Vercel에서 해당 GitHub 저장소를 Import 합니다.
3. Framework Preset은 `Next.js`를 선택합니다.
4. Environment Variables에 아래 값을 등록합니다.

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `SANITY_API_READ_TOKEN` 필요 시

권장값 예시:

- `NEXT_PUBLIC_SANITY_API_VERSION=2025-02-19`

5. Deploy를 실행합니다.
6. 배포 후 `https://your-domain.vercel.app/studio`로 접속해 관리자 로그인을 확인합니다.

### 배포 후 꼭 확인할 것

- Sanity CORS에 Vercel 도메인이 등록되어 있는지
- private dataset이면 read token이 Vercel에 등록되었는지
- `/studio` 접속 및 로그인 가능한지
- 포트폴리오 상세 페이지가 정상 열리는지

## 6. 콘텐츠 관리 방법

운영자 상세 가이드는 [README-admin.md](./README-admin.md)에서 확인할 수 있습니다.

### Studio에서 관리 가능한 항목

- 메인 배너 문구
- 메인 대표 이미지
- 소개글
- 포트폴리오 카테고리
- 포트폴리오 사진 여러 장
- 포트폴리오 제목/설명/촬영일/장소
- 유튜브 영상 URL
- 가격/패키지 정보
- 연락처
- 인스타그램 링크
- 카카오톡 상담 링크

## 7. Sanity 문서 구성

### Site Settings

사이트 공통 정보 관리용 문서입니다.

- 브랜드명
- 메인 배너 제목 / 설명
- 대표 이미지
- 소개 제목 / 본문
- About 본문
- 연락처 / 이메일 / 주소
- 인스타그램 / 카카오톡 링크

### Portfolio Category

- 카테고리명
- 슬러그
- 설명

### Portfolio

- 제목
- 슬러그
- 목록 설명
- 상세 설명
- 촬영일
- 장소
- 대표 이미지
- 갤러리 이미지 배열
- 카테고리 참조
- 메인 노출 여부

### Video

- 제목
- 설명
- 유튜브 URL
- 대표 이미지
- 메인 노출 여부

### Package / Price

- 패키지명
- 가격
- 설명
- 포함 항목
- 안내 문구
- 뱃지
- 정렬 순서

## 8. 개발 메모

- Sanity 연동이 아직 없을 때도 샘플 데이터로 UI를 먼저 확인할 수 있도록 구성했습니다.
- 이미지 출력은 `next/image`를 사용하므로 기본적으로 lazy loading이 적용됩니다.
- 동적 SEO를 위해 공통 메타데이터와 상세 페이지 메타데이터를 함께 설정했습니다.
- `app/studio/[[...tool]]/page.tsx` 경로에 Sanity Studio를 붙였습니다.

## 9. 추천 운영 순서

1. Sanity 환경변수 연결
2. `/studio` 로그인
3. `Site Settings` 문서 1개 생성
4. 카테고리 생성
5. 포트폴리오 업로드
6. 영상 URL 등록
7. 패키지/가격 등록
8. 연락처와 SNS 링크 최종 점검
9. Vercel 배포

## 10. 추후 확장 아이디어

- 문의 폼 + 이메일 전송
- 카테고리 필터 인터랙션
- 다국어 지원
- 예약 가능 일정 캘린더
- 리뷰/후기 섹션 추가
