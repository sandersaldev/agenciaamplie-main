import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // <-- ADICIONE ISSO
  plugins: [react()],
  server: {
    historyApiFallback: true,
  }
})
