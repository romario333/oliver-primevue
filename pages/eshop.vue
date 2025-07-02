<template>
  <DataView :value="products" layout="list">
    <template #header>
      <h1>Products</h1>
    </template>

    <template #list="slotProps">
      <div v-for="item in slotProps.items" :key="item.id" class="p-3">
        <NuxtLink
          :to="`/products/${item.id}`"
          class="text-gray-900 no-underline hover:bg-gray-50 block rounded-lg transition-colors"
        >
          <div class="flex items-center">
            <Avatar
              :image="`https://picsum.photos/200/300?random=${item.id}`"
              class="mr-4"
              size="xlarge"
              shape="circle"
            />
            <div>{{ item.name }}</div>
          </div>
        </NuxtLink>
      </div>
    </template>
  </DataView>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Product } from "~/composables/useProducts";
import DataView from "primevue/dataview";

definePageMeta({
  pageTransition: {
    mode: "out-in",
  },
});

const { fetchProducts } = useProducts();

const products = ref<Product[]>([]);

products.value = await fetchProducts();
</script>
