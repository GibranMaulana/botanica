import { defineConfig } from 'vite';
import { visualizer } from "rollup-plugin-visualizer";
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
      //   visualizer({
      //       open: true,       
      //       filename: "stats.html", 
      //       gzipSize: true,   
      //       brotliSize: true,
      //    }),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        tailwindcss(),
    ],
    server: {
      host: 'localhost', 
      port: 5173,

        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
});
