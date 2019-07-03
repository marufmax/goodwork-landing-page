import plugin_gridsome_plugin_tailwindcss_4 from "/src/js/landing-page-src/node_modules/gridsome-plugin-tailwindcss/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_tailwindcss_4,
    options: {"config":"./tailwind.config.js","shouldPurge":true,"shouldImport":true,"shouldTimeTravel":true,"presetEnvConfig":{"stage":0},"purgeConfig":{"content":["./src/**/*.vue","./src/**/*.js","./src/**/*.jsx","./src/**/*.ts","./src/**/*.tsx","./src/**/*.html","./src/**/*.pug","./src/**/*.md","./src/**/*.svg"],"whitelist":["body","html","img","a","g-image","g-image--lazy","g-image--loaded"]}}
  }
]
