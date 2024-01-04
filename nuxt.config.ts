// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/main.scss"],
  modules: [
    "nuxt-primevue",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/i18n",
  ],
  primevue: {
    components: {
      include: "*",
    },
    directives: {
      include: "*",
    },
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
});
