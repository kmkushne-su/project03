import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default {
  resolve: {
    dedupe: ['react', 'react-dom']
  }
}