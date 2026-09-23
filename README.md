# elementX 홈페이지

2026-09-23에 `http://172.30.1.63:3001/#features`에서 실행 중인 버전을 보관한 GitHub용 프로젝트입니다. 해당 서버가 응답한 HTML과 로컬 빌드 HTML이 일치함을 확인했습니다. 앱 소스와 이미지는 원본 그대로이며 배포 설정만 추가했습니다.

## 1. GitHub 저장

ZIP을 압축 해제한 뒤 **elementx 폴더 안의 파일 전체**를 저장소 최상위에 올리세요. 저장소를 열었을 때 `package.json`, `app`, `public`이 바로 보여야 합니다. ZIP 파일 자체만 올리면 배포할 수 없습니다. 숨김 파일(.gitignore, .npmrc, .env.example 등)도 포함하세요. GitHub Desktop에서 elementx 폴더를 저장소로 추가해 게시하면 편리합니다.

## 2. 실행

Node.js 24와 pnpm 11.19.0 기준입니다. pnpm-lock.yaml을 유지하여 같은 의존성 버전을 설치합니다.

```sh
npm install -g pnpm@11.19.0
pnpm install --frozen-lockfile
pnpm dev
```

배포 빌드 확인: `pnpm build`, 실행: `pnpm start`.

## 3. Vercel

1. GitHub 저장소를 Import 합니다.
2. Framework: Next.js, Root Directory: 저장소 최상위(위 안내대로 업로드한 경우).
3. Node.js: 24.x. 설치 및 빌드 명령은 vercel.json에 포함되어 있습니다.
4. 환경 변수 SITE_URL에 실제 배포 주소를 입력하세요. 주소를 처음 배포 후 알게 되면 입력 후 다시 배포합니다.
5. 검색 공개를 원할 때 SITE_READY=true를 설정합니다.

## 4. Netlify

1. GitHub 저장소를 연결해 배포합니다. 정적 파일 드래그 업로드 방식이 아닙니다.
2. Base directory: 비움. Build command: pnpm run build. Publish directory: .next.
3. netlify.toml의 Node.js/pnpm 설정을 사용하며 Next.js 런타임은 자동 감지합니다.
4. SITE_URL과 SITE_READY를 Vercel과 동일한 의미로 설정하세요.

## 환경 변수와 공유 이미지

- SITE_URL: 해당 서비스의 실제 공개 주소. 끝에 / 없이 입력합니다. 각 서비스에서 별도로 설정합니다.
- SITE_READY: false 또는 미설정이면 검색 수집을 차단하고 sitemap을 비웁니다. true는 검색 공개용입니다.
- SITE_URL을 설정해야 canonical, OG 이미지 URL, sitemap이 공개 주소를 사용합니다. 도메인은 아직 미확정이므로 배포 시 설정해야 합니다.
- 파비콘과 OG 이미지 파일 및 연결은 포함되어 있습니다.
- 비밀번호나 API 키는 필요하지 않습니다. 개인 .env 파일은 포함하지 않았습니다.

## 포함 범위

홈페이지, 제품 소개, 만드는 이야기, 후기, 구매 안내, 정책 페이지 및 모든 public 이미지가 포함됩니다. 실제 결제 서비스 연결은 별도 작업입니다. 원본 이미지와 현재 문구를 유지했으며, 이 ZIP을 만들면서 배너나 상세페이지 디자인을 변경하지 않았습니다.

node_modules, .next, 개발 캐시, 내부 작업 기록, 이전 ZIP, 개인 환경 파일은 제외했습니다. 소스 백업이므로 배포 서비스에서 의존성 설치와 빌드가 필요합니다.

## 공식 배포 문서

- https://vercel.com/docs/package-managers
- https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/
- https://docs.netlify.com/snippets/frameworks/nextjs-pnpm-support/
