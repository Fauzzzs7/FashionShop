<script setup>
import NavBar from "../components/NavBar.vue";
import ContentLayout from "../components/ContentLayout.vue"
import DetailContent from "../components/DetailContent.vue";
</script>

<template>
  <div class="container mx-auto">
    <NavBar />
  </div>
  <div>
    <DetailContent/>
  </div>
  <p class="flex justify-center mt-11 text-[42px] font-display">Similiar Outfit</p>
  <div>
    <ContentLayout/>
  </div>
</template>

<style></style>
