  <!-- <script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script> -->

<script>
export default {
  name: 'AddFav'
}
</script>

<template>
  <div class="container ms-[47px] mt-[35px]">
    <img src="src/assets/bookmark.svg" alt="bookmark">
    <p class="flex ms-[50px] mt-[-38px] text-2xl font-dsc font-semibold">Favorit</p>
  </div>

  <div class="container ms-[1263px] mt-[100px]">
    <img src="src/assets/Addmini.svg" alt="bookmark">
    <p class="flex ms-[50px] mt-[-38px] text-2xl font-dsc font-semibold">Add Colase</p>
  </div>


  <div class="container">
    <div class="mt-[110px] columns-3 ms-[85px]">
      <router-link to="/detail">
        <img class="w-[390px] h-[582px] rounded-[34px] object-cover" src="src/assets/img/pav1.png" alt="content" />
      </router-link>

      <img class="w-[390px] h-[582px] rounded-[34px] object-cover" src="src/assets/img/pav2.png" />

      <img class="w-[390px] h-[582px] rounded-[34px] object-cover" src="src/assets/img/pav3.png" alt="content" />
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
