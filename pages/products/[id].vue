<template>
  <div>
    <Button
      severity="secondary"
      label="Back to E-shop"
      icon="pi pi-arrow-left"
      @click="router.back()"
    />
    <h1>Product {{ id }}</h1>
  </div>
</template>

<script setup lang="ts">
import Button from "primevue/button";

definePageMeta({
  pageTransition: {
    mode: "out-in",
    name: "slide-right",
  },
});

const router = useRouter();

const { id } = useRoute().params;
</script>
