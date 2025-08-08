import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// For extension building:
// import { crx } from 'vite-plugin-crx-mv3'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), 
    tailwindcss(), 
    // crx( './manifest.json')
  ],
})
