<template>
  <div class="app-layout">
    <!-- Topbar -->
    <div class="topbar">
      <Button
        icon="pi pi-bars"
        @click="toggleSidebar"
        severity="secondary"
        text
        rounded
        aria-label="Toggle Menu"
      />
      <h1 class="app-title">PrimeVue Prototype</h1>
      <Button
        icon="pi pi-sun"
        @click="toggleTheme"
        severity="secondary"
        text
        rounded
        aria-label="Toggle Menu"
      />
    </div>

    <!-- PrimeVue Sidebar for mobile -->
    <Sidebar v-model:visible="mobileSidebarVisible" :modal="true" class="w-64">
      <nav class="flex flex-col gap-2">
        <NuxtLink to="/" class="nav-link" @click="mobileSidebarVisible = false">
          <i class="pi pi-home text-xl"></i>
          <span>Home</span>
        </NuxtLink>
        <NuxtLink
          to="/eshop"
          class="nav-link"
          @click="mobileSidebarVisible = false"
        >
          <i class="pi pi-shopping-cart text-xl"></i>
          <span>E-Shop</span>
        </NuxtLink>
      </nav>
    </Sidebar>

    <!-- Desktop Sidebar -->
    <div v-if="desktopSidebarVisible && !isMobile" class="desktop-sidebar">
      <nav class="flex flex-col gap-2 p-4">
        <NuxtLink to="/" class="nav-link">
          <i class="pi pi-home text-xl"></i>
          <span>Home</span>
        </NuxtLink>
        <NuxtLink to="/eshop" class="nav-link">
          <i class="pi pi-shopping-cart text-xl"></i>
          <span>E-Shop</span>
        </NuxtLink>
      </nav>
    </div>

    <!-- Main Content -->
    <div
      class="main-content"
      :class="{ 'with-sidebar': desktopSidebarVisible && !isMobile }"
    >
      <NuxtPage />
    </div>

    <Toast />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import Button from "primevue/button";
import Toast from "primevue/toast";
import Sidebar from "primevue/sidebar";
import { useWindowSize } from "@vueuse/core";

const { width: windowWidth } = useWindowSize();

const desktopSidebarVisible = ref(true);
const mobileSidebarVisible = ref(false);

const isMobile = computed(() => windowWidth.value < 1024);

const toggleSidebar = () => {
  if (isMobile.value) {
    mobileSidebarVisible.value = true;
  } else {
    desktopSidebarVisible.value = !desktopSidebarVisible.value;
  }
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

.topbar {
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 60px;
  background-color: var(--p-surface-0);
  border-bottom: 1px solid var(--p-surface-200);
  gap: 1rem;
  z-index: 50;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.app-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: var(--p-text-color);
}

.desktop-sidebar {
  position: fixed;
  left: 0;
  top: 60px;
  width: 16rem;
  height: calc(100vh - 60px);
  background-color: var(--p-surface-50);
  border-right: 1px solid var(--p-surface-200);
  overflow-y: auto;
}

.main-content {
  flex: 1;
  padding: 2rem;
  margin-top: 60px;
  background-color: var(--p-surface-ground);
  transition: margin-left 0.3s ease;
}

.main-content.with-sidebar {
  margin-left: 16rem;
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
</style>
