import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        about: 'about.html',
        service: 'service.html',
        blog:'blog.html',
        contact:'contact.html',
      },
    },
  },
});