import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:5000', // <-- перенаправляет /api/... на backend
    },
  },
})

// проблема только в отсутствии настройки прокси в vite.config.js. Сейчас Vite по умолчанию 
// пытается отправить POST /api/auth/register на свой фронтенд-сервер (localhost:5173), а backend работает на localhost:5000. 
// Поэтому и ошибка 404. Нужно перенаправить на апи.