<template>
  <Select
    v-model="selectedLocale"
    :options="locales"
    optionValue="code"
    optionLabel="name"
  />
</template>
<script setup lang="ts">
import { en } from "primelocale/js/en.js";
import { de } from "primelocale/js/de.js";
import { cs } from "primelocale/js/cs.js";
import { usePrimeVue } from "primevue/config";
const { locales, setLocale } = useI18n();

const selectedLocale = ref("en");

const primevue = usePrimeVue();

watch(selectedLocale, () => {
  console.log("Changing locale to:", selectedLocale.value);
  if (selectedLocale.value === "de") {
    primevue.config.locale = de;
  } else if (selectedLocale.value === "cs") {
    primevue.config.locale = cs;
  } else {
    primevue.config.locale = en;
  }

  setLocale(selectedLocale.value as "en" | "de" | "cs");
});
</script>
