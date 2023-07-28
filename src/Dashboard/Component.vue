<template>
  <div class="flex app">
    <!-- Headbar -->
    

    <!-- Sidebar -->
    <Sidebar />

    <!-- Content -->
    
    <main>
      <router-view />
				<Table />
    </main>
  </div>
</template>

<script setup>
import Sidebar from './Sidebar2.vue'
import Table from './TableComponent.vue'
</script>

<style>
.app main {
  flex: 1 1 0;
  padding: 2rem;

  @media (max-width: 1024px) {
    padding-left: 6rem;
  }
}
</style>
