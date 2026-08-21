/**
 * [vite.config.ts] 
 * - Vite 빌드 도구의 설정파일
 * - Vite > 빌드/개발서버 실행 시
 */

import { defineConfig } from 'vite'
import path from "path";
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@images": path.resolve(__dirname, "./src/assets/images"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
})
