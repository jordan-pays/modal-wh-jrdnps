import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    loader: "tsx",
    include: /src\/.*\.[tj]sx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: "load-js-files-as-jsx",
          setup(build) {
            build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
              loader: "jsx",
              contents: await fs.readFile(args.path, "utf8"),
            }));
          },
        },
      ],
    },
  },
  plugins: [react()],
  build:{
    lib : {
      entry: resolve(__dirname, "src/modal/Modal.js"),
      name: "Modal",
      fileName:"modal-wh-jrdnps"
    }
  }
})
