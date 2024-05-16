import {defineConfig} from "cypress";
import viteConfig from "./vite.config.js";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  // component: {
  //   devServer: {
  //     framework: "react",
  //     bundler: "webpack",
  //   },
  // },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      // optionally pass in vite config
      viteConfig,
      // or a function - the result is merged with
      // any `vite.config` file that is detected
      // viteConfig: async () => {
      //   // ... do things ...
      //   return await injectCustomConfig(baseConfig)
      // },
    },
  },
});
