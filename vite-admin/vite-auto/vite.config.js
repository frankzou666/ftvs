import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
//其他有还有什么配置呢？
export default defineConfig({
  plugins: [react()],
  server:{
    port: 5000,
    open:"/"
  },
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src'),
    }
  }
})
