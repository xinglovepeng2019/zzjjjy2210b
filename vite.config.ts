import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://shop_api.chaohua-sxx.cn/', // 将其替换为你的后端服务器地址
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''), // 如果你的后端API的URL有一个统一的前缀，可以在此处进行替换
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
