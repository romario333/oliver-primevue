<template>
  <SampleForm />

  <Button
    class="mt-8"
    icon="pi pi-heart"
    aria-label="Like"
    :loading="liking"
    @click="like"
  />

  <div class="flex flex-col md:flex-row gap-2 mt-10">
    <Button
      label="Success"
      severity="success"
      @click="showSuccess('success')"
    />
    <Button label="Info" severity="info" @click="showSuccess('info')" />
    <Button label="Warn" severity="warn" @click="showSuccess('warn')" />
    <Button label="Error" severity="danger" @click="showSuccess('error')" />
    <Button
      label="Secondary"
      severity="secondary"
      @click="showSuccess('secondary')"
    />
    <Button
      label="Contrast"
      severity="contrast"
      @click="showSuccess('contrast')"
    />
  </div>
</template>

<script setup lang="ts">
import { useToast } from "primevue/usetoast";
import SampleForm from "~/components/SampleForm.vue";
import Button from "primevue/button";

const toast = useToast();

const liking = ref(false);

async function like() {
  liking.value = true;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  liking.value = false;
}

const showSuccess = (
  severity: "success" | "info" | "warn" | "error" | "secondary" | "contrast"
) => {
  toast.add({
    severity,
    summary: "Toast Message",
    detail: "Message Content",
    life: 3000,
  });
};
</script>
