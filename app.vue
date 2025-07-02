<template>
  <div class="app-layout">
    <!-- Topbar -->
    <div class="topbar">
      <Button
        icon="pi pi-bars"
        @click="sidebarVisible = !sidebarVisible"
        severity="secondary"
        text
        rounded
        aria-label="Toggle Menu"
      />
      <h1 class="app-title">My Application</h1>
    </div>

    <!-- Sidebar -->
    <div class="sidebar" :class="{ 'sidebar-collapsed': !sidebarVisible }">
      <nav class="nav-menu">
        <NuxtLink to="/" class="nav-item">
          <i class="pi pi-home"></i>
          <span v-if="sidebarVisible">Home</span>
        </NuxtLink>
        <NuxtLink to="/eshop" class="nav-item">
          <i class="pi pi-shopping-cart"></i>
          <span v-if="sidebarVisible">E-Shop</span>
        </NuxtLink>
      </nav>
    </div>

    <!-- Main Content -->
    <div class="main-content" :class="{ 'content-expanded': !sidebarVisible }">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Button from "primevue/button";

const sidebarVisible = ref(true);
</script>

<style scoped>
.app-layout {
  display: grid;
  grid-template-rows: 60px 1fr;
  grid-template-columns: 250px 1fr;
  grid-template-areas:
    "topbar topbar"
    "sidebar content";
  height: 100vh;
  overflow: hidden;
}

.topbar {
  grid-area: topbar;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  background-color: var(--p-surface-0);
  border-bottom: 1px solid var(--p-surface-200);
  gap: 1rem;
  z-index: 100;
}

.app-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: var(--p-text-color);
}

.sidebar {
  grid-area: sidebar;
  background-color: var(--p-surface-50);
  border-right: 1px solid var(--p-surface-200);
  transition: width 0.3s ease, transform 0.3s ease;
  overflow: hidden;
  width: 250px;
}

.sidebar-collapsed {
  width: 60px;
}

.nav-menu {
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  color: var(--p-text-color);
  text-decoration: none;
  transition: background-color 0.2s;
  white-space: nowrap;
}

.nav-item:hover {
  background-color: var(--p-surface-100);
}

.nav-item.router-link-active {
  background-color: var(--p-primary-50);
  color: var(--p-primary-color);
  font-weight: 600;
}

.nav-item i {
  font-size: 1.25rem;
  width: 1.25rem;
  text-align: center;
}

.main-content {
  grid-area: content;
  padding: 2rem;
  overflow-y: auto;
  background-color: var(--p-surface-ground);
  transition: margin-left 0.3s ease;
}

.content-expanded {
  grid-column: 1 / -1;
  margin-left: 60px;
}

@media (max-width: 768px) {
  .app-layout {
    grid-template-columns: 1fr;
    grid-template-areas:
      "topbar"
      "content";
  }

  .sidebar {
    position: fixed;
    left: 0;
    top: 60px;
    height: calc(100vh - 60px);
    z-index: 99;
    transform: translateX(0);
  }

  .sidebar-collapsed {
    transform: translateX(-100%);
  }

  .main-content {
    grid-column: 1;
  }

  .content-expanded {
    margin-left: 0;
  }
}
</style>
