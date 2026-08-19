나라장터 실시간 알림 서비스 구축 예정


<!-- 프론트 디렉토리 구성 -->
src/
├── components/         // 재사용 가능한 공통 컴포넌트
│   ├── common/         // Button, Input, Modal 등 범용
│   └── layout/         // Header, Sidebar, Footer
├── pages/              // 라우트 단위 페이지
│   ├── Home/
│   └── Business/
│   └── ... (추후 증가예정)
├── hooks/              // 커스텀 훅
│   └── useUser.ts
├── api/                // API 호출 함수 (DAO 역할)
│   └── userApi.ts
├── types/              // 전역 타입 정의
│   └── user.ts
├── data/               // 정적 mock 데이터
│   └── statCards.ts
├── utils/              // 순수 유틸 함수
│   └── formatDate.ts
├── store/              // 전역 상태관리 (redux, zustand 등)
├── constants/          // 상수값
└── App.tsx             // 라우터 설정 및 ...


<!-- 프론트엔드 환경 구성 -->
| 구분 | 사용 기술 |
| --- | --- |
| 언어 | TypeScript |
| 라이브러리 | React |
| 스타일링 | Tailwind CSS |
| 라우팅 | React Router (`BrowserRouter` + `Routes`/`Route`, `PageLayout` + `Outlet` 패턴) |


<!-- 버튼 라이브러리 -->
## shadcn/ui
