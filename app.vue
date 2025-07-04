<template>
  <div class="app-layout">
    <Toolbar class="app-header">
      <template #start>
        <div class="flex items-center gap-2">
          <Button
            icon="pi pi-bars"
            @click="toggleSidebar"
            severity="secondary"
            text
            rounded
            aria-label="Toggle Menu"
          />
          <h1>PrimeVue Prototype</h1>
        </div>
      </template>
      <template #end>
        <div class="flex items-center gap-2">
          <Button
            icon="pi pi-sun"
            @click="toggleTheme"
            severity="secondary"
            text
            rounded
            aria-label="Toggle Menu"
          />
          <div class="hidden md:block">
            <LanguageSelect />
          </div>
        </div>
      </template>
    </Toolbar>

    <Sidebar v-model:visible="sidebarVisible" :modal="true" class="w-64">
      <nav class="flex flex-col gap-2">
        <NuxtLink to="/" class="nav-link" @click="sidebarVisible = false">
          <i class="pi pi-home text-xl"></i>
          <span>Home</span>
        </NuxtLink>
        <NuxtLink to="/eshop" class="nav-link" @click="sidebarVisible = false">
          <i class="pi pi-shopping-cart text-xl"></i>
          <span>E-Shop</span>
        </NuxtLink>
      </nav>
    </Sidebar>

    <div class="main-content">
      <Toast class="p-toast" />
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Button from "primevue/button";
import Toast from "primevue/toast";
import Sidebar from "primevue/sidebar";
import Toolbar from "primevue/toolbar";

const sidebarVisible = ref(false);

const toggleSidebar = () => {
  sidebarVisible.value = true;
};

const toggleTheme = () => {
  document.documentElement.classList.toggle("my-app-dark");
};
</script>

<style>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
}

.main-content {
  flex: 1;
  padding: 2rem;
  margin-top: 60px;
  background-color: var(--p-surface-ground);
  transition: margin-left 0.3s ease;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  color: var(--p-text-color);
  text-decoration: none;
  border-radius: 0.5rem;
  transition: background-color 0.2s;
}

.nav-link:hover {
  background-color: var(--p-surface-100);
}

.nav-link.router-link-active {
  background-color: var(--p-primary-50);
  color: var(--p-primary-700);
  font-weight: 600;
}

/* Slide right transition (eshop → products) */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

/* https://github.com/primefaces/primeng/issues/9930 */
.p-toast {
  max-width: calc(100vw - 40px);
}
</style>
