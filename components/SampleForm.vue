<template>
  <div class="flex flex-col gap-4 w-full max-w-md">
    <InputText
      placeholder="First name"
      v-model="r$.$value.firstName"
      :invalid="r$.firstName.$errors[0] !== undefined"
    />
    <Message severity="error" variant="simple" v-if="r$.firstName.$errors[0]">
      {{ r$.firstName.$errors[0] }}
    </Message>
    <InputText
      placeholder="Last name"
      v-model="r$.$value.lastName"
      :invalid="r$.lastName.$errors[0] !== undefined"
    />
    <Message severity="error" variant="simple" v-if="r$.lastName.$errors[0]">
      {{ r$.lastName.$errors[0] }}
    </Message>
    <InputText
      placeholder="Email"
      v-model="r$.$value.email"
      :invalid="r$.email.$errors[0] !== undefined"
    />
    <Message severity="error" variant="simple" v-if="r$.email.$errors[0]">
      {{ r$.email.$errors[0] }}
    </Message>

    <DatePicker placeholder="Date of birth" v-model="r$.$value.dateOfBirth" />
    <DatePicker
      placeholder="Time of birth"
      v-model="r$.$value.timeOfBirth"
      timeOnly
    />

    <Button
      type="submit"
      severity="secondary"
      label="Submit"
      :loading="submitting"
      @click="submit"
    />
  </div>

  <pre class="mt-10">{{ JSON.stringify(person, null, 2) }}</pre>
</template>

<script setup lang="ts">
import { useRegle } from "@regle/core";
import { required, minLength, email } from "@regle/rules";
import DatePicker from "primevue/datepicker";
import Message from "primevue/message";

interface Person {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth?: Date;
  timeOfBirth?: Date;
}

const person = ref<Person>({
  id: "test-id",
  firstName: "",
  lastName: "",
  email: "",
  dateOfBirth: undefined,
  timeOfBirth: undefined,
});
const submitting = ref(false);

const { r$ } = useRegle(person, {
  firstName: { required, minLength: minLength(3) },
  lastName: { required, minLength: minLength(3) },
  email: { required, email, minLength: minLength(4) },
});

watch(
  person,
  (newValue) => {
    console.log("person changed:", newValue);
  },
  { deep: true }
);

async function submit() {
  if (r$.$invalid) {
    r$.$touch();
    return;
  }

  submitting.value = true;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  submitting.value = false;
}
</script>
