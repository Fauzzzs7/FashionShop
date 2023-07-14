<script setup>
import Sidebar from './Sidebar.vue'
import Add from './FormInputStyle.vue'
</script>

<template>
  <div class="app flex">
    <!-- Headbar -->
    

    <!-- Sidebar -->
    <Sidebar />

    <!-- Content -->
    
    <main>
      <router-view />
      <Add />
    </main>
  </div>
</template>

<style>
.app main {
  flex: 1 1 0;
  padding: 2rem;

  @media (max-width: 1024px) {
    padding-left: 6rem;
  }
}
</style>