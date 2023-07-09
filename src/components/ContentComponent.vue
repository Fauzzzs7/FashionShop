<script>
import axios from "axios";
export default {
  name: "ContentComponent",
  data(){
    return{
      style:[],
      gambar_url:''
    };
  },

  mounted() {
    axios.get("http://127.0.0.1:8000/api/style")
    .then(Response => {
      this.style= Response.data;
      console.log(Response)
    })
    .catch(err => {
      console.error('Error:', err);
    })
  },
  
  
};
</script>

<template>
  <!-- <div class="grid grid-flow-col grid-rows-4 gap-4">
  <div >
    <img src="src/assets/images/img1.jpg" alt="content">
  </div>
  <div>09</div>
</div> -->
  <div class="container">
    <p class="mt-[250px] ms-20 font-display font-semibold text-[34px]">
      Casual
    </p>
    <div class="mt-8 columns-3 ms-20">
      <div v-if="style">
        <div v-for="style in style" :key="style.id"  >
          <router-link  :to="{ name: 'detail', params: { id: style.id } }">
          <img
            class="w-[390px] h-[582px] rounded-[34px] object-cover"
            :src="`${style.gambar_url}`"
            alt="content"
          />
        </router-link>
        </div>
        
      </div>
    </div>
  </div>
</template>

<style></style>
