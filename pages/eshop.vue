<template>
  <DataView :value="products" layout="list">
    <template #header>
      <h1>Products</h1>
    </template>

    <template #list="slotProps">
      <div v-for="item in slotProps.items" :key="item.id">
        <NuxtLink :to="`/products/${item.id}`" class="">
          <div
            class="flex items-center p-3 product-list-item transition-colors duration-200 ease-in-out"
          >
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
import Avatar from "primevue/avatar";

definePageMeta({
  pageTransition: {
    mode: "out-in",
  },
});

const { fetchProducts } = useProducts();

const products = ref<Product[]>([]);

products.value = await fetchProducts();
</script>

<style scoped>
.product-list-item:hover {
  background-color: var(--p-surface-100);
}

.my-app-dark .product-list-item:hover {
  background-color: var(--p-surface-900);
}
</style>
