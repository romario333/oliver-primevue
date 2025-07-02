import Aura from "@primeuix/themes/aura";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },

  modules: ["@primevue/nuxt-module"],
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
});
