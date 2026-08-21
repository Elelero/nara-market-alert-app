# 나라장터 실시간 알림 서비스

> 나라장터 입찰공고를 실시간으로 알려주는 알리미 서비스 구축 예정

---

## 📁 프론트엔드 디렉토리 구성

```
src/
├── components/          // 재사용 가능한 공통 컴포넌트
│   ├── common/           // Button, Input, Modal 등 범용
│   └── layout/           // Header, Sidebar, Footer
├── pages/                // 라우트 단위 페이지
│   ├── Home/
│   ├── Business/
│   └── ...                // (추후 증가 예정)
├── hooks/                // 커스텀 훅
│   └── useUser.ts
├── api/                  // API 호출 함수 (DAO 역할)
│   └── userApi.ts
├── types/                // 전역 타입 정의
│   └── user.ts
├── data/                 // 정적 mock 데이터
│   └── statCards.ts
├── utils/                // 순수 유틸 함수
│   └── formatDate.ts
├── store/                // 전역 상태관리 (redux, zustand 등)
├── constants/            // 상수값
└── App.tsx               // 라우터 설정 및 진입점
```

---

## ⚙️ 프론트엔드 환경 구성

| 구분 | 사용 기술 |
| :--- | :--- |
| 언어 | TypeScript |
| 라이브러리 | React |
| 스타일링 | Tailwind CSS |
| 라우팅 | React Router (`BrowserRouter` + `Routes`/`Route`, `PageLayout` + `Outlet` 패턴) |

---

## 🧩 UI 컴포넌트 라이브러리

### shadcn/ui

- Radix UI + Tailwind CSS 기반의 헤드리스 컴포넌트 모음
- `npm install`로 패키지를 통째로 설치하는 방식이 아니라, **필요한 컴포넌트 소스 코드를 프로젝트에 직접 복사**해서 사용
- 설치한 컴포넌트는 `node_modules`가 아닌 `src/components/ui/` 경로에 남아 자유롭게 커스터마이징 가능
