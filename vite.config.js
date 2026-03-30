import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Change 'stan-portfolio' to your GitHub repo name
  // If deploying to https://<username>.github.io/, set base: '/'
  // If deploying to https://<username>.github.io/<repo>/, set base: '/<repo>/'
  base: '/stan-portfolio/',
})
