import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'pinia',
        { '@/stores/mydata': ['useDataStore'] },
        { '@/stores/mydataOptions': ['useDataStore2'] }
      ],
      eslintrc: {
        enabled: true
      }
    }),
    Components({
      resolvers: [IconsResolver()]
    }),
    Icons({ compiler: 'vue3' })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
