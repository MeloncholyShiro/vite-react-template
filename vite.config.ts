import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // vite server configs, for details see [vite doc](https://vitejs.dev/config/#server-host)
    port: 3000,
  },

  esbuild: {
    jsxInject: `import React from 'react'`, // automatically import React in jsx files
  },

  plugins: [react()],
});
