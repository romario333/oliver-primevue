<template>
  <Form
    :initialValues="formData"
    :resolver="resolver"
    @submit="onFormSubmit"
    class="flex flex-col gap-4 w-full sm:w-80"
    ref="form"
  >
    <FormField v-slot="$field" name="firstname" class="flex flex-col gap-1">
      <InputText type="text" placeholder="First name" />
      <Message
        v-if="$field?.invalid"
        severity="error"
        size="small"
        variant="simple"
        >{{ $field.error?.message }}</Message
      >
    </FormField>
    <FormField v-slot="$field" name="lastname" class="flex flex-col gap-1">
      <InputText type="text" placeholder="Last name" />
      <Message
        v-if="$field?.invalid"
        severity="error"
        size="small"
        variant="simple"
        >{{ $field.error?.message }}</Message
      >
    </FormField>
    <FormField v-slot="$field" name="email" class="flex flex-col gap-1">
      <InputText type="text" placeholder="Email" />
      <Message
        v-if="$field?.invalid"
        severity="error"
        size="small"
        variant="simple"
        >{{ $field.error?.message }}</Message
      >
    </FormField>

    <Button
      type="submit"
      severity="secondary"
      label="Submit"
      :loading="submitting"
    />

    <Button
      icon="pi pi-heart"
      aria-label="Like"
      :loading="liking"
      @click="like"
    />

    <DatePicker placeholder="Date of birth" v-model="formData.dateOfBirth" />
    <DatePicker
      placeholder="Time of birth"
      v-model="formData.timeOfBirth"
      timeOnly
    />
  </Form>

  <div class="flex flex-row gap-2 mt-10">
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

  <pre class="mt-10">{{ JSON.stringify(formData, null, 2) }}</pre>
</template>

<script setup lang="ts">
import { Form, type FormInstance, type FormSubmitEvent } from "@primevue/forms";
import DatePicker from "primevue/datepicker";
import { z } from "zod";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { useToast } from "primevue/usetoast";

const toast = useToast();

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  dateOfBirth?: Date;
  timeOfBirth?: Date;
}

const form = ref<FormInstance>();

const formData = ref<FormData>({
  firstname: "",
  lastname: "",
  email: "",
  dateOfBirth: undefined,
  timeOfBirth: undefined,
});
const submitting = ref(false);
const liking = ref(false);

const onFormSubmit = async (e: FormSubmitEvent) => {
  if (!form.value?.valid) {
    console.log("form is invalid");
    return;
  }

  submitting.value = true;

  await new Promise((resolve) => setTimeout(resolve, 1000));

  submitting.value = false;
};

async function like() {
  liking.value = true;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  liking.value = false;
}

const resolver = zodResolver(
  z.object({
    firstname: z.string().min(1, { message: "First name is required." }),
    lastname: z.string().min(1, { message: "Last name is required." }),
    email: z.string().email({ message: "Invalid email address." }),
  })
);

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

watch(
  formData,
  (newValue) => {
    console.log("formData changed:", newValue);
  },
  { deep: true }
);
</script>
