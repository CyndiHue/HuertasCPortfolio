import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.html'],
})
// ssetsInclude: ['**/*.html'], when coding and ssetsInclude: ['..**/*.html'], before build in netfly