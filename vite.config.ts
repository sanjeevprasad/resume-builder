import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'node_modules/monaco-editor/min', dest: 'monaco' },
      ]
    }),
    svelte()
  ],
  base: '/resume-builder'
})
