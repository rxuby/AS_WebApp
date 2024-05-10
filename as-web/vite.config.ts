import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // base : "/home",
  plugins: [react()],
  resolve:{
    alias:{
      "@components": path.resolve(__dirname, "src/components"),
      "@functions": path.resolve(__dirname, "src/functions"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@services": path.resolve(__dirname, "src/services"),
      "@store": path.resolve(__dirname, "src/store"),
      "@data": path.resolve(__dirname, "src/data")
    },
    extensions: ['.ts', '.tsx', '.js']
  },
  server: {
    open: true 
  },
})
