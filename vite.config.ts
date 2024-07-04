import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import monkeyPlugin from 'vite-plugin-monkey'
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin(),
    monkeyPlugin({
      entry:"./src/index.tsx",
      userscript:{
        match:"https://www.wnacg.com/*"
      }
    })
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
