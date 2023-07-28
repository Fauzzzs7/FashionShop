<!-- <script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script> -->

<script>
export default {
  name: 'EmptyFav'
}
</script>

<template>
  <div class="container ms-[47px] mt-[35px]">
    <img src="src/assets/bookmark.svg" alt="bookmark">
    <p class="flex ms-[50px] mt-[-32px] text-2xl font-dsc font-semibold">Favorit</p>
  </div>

  <div class="flex justify-center relative top-[38vh]">
    <router-link to="/addfav">
      <img src="src/assets/Add.svg" alt="tambah ">
      <p class="flex ms-[26px] mt-[15px]  text-2xl font-dsc font-semibold">Empty</p>
    </router-link>
  </div>
  <div>

  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
