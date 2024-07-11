import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        news: resolve(__dirname, "about.html"),
        news: resolve(__dirname, "service.html"),
        news: resolve(__dirname, "blog.html"),
        news: resolve(__dirname, "contact.html"),
      
        
      },
    },
  },
});