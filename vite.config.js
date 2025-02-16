import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Configuração do Vite
export default defineConfig({
  // Caminho base para deploy, altere conforme necessário
  base: '/Page-Main/',
  plugins: [
    react(), // Plugin para suporte ao React
  ],
  server: {
    open: true, // Abre o navegador automaticamente
  },
});