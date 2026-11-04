import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  define: {
    __CAMPUSGO_DEV_SESSION__: JSON.stringify(command === 'serve' ? `dev-${Date.now()}` : 'build'),
  },
}))
