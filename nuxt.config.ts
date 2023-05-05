// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src",
  modules: ["nuxt-quasar-ui", "nuxt-vitest"],
  quasar: {
    extras: {
      fontIcons: ["material-icons"],
    },
    sassVariables: "src/css/quasar.variables.scss",
    quietSassWarnings: true,
  },
});
