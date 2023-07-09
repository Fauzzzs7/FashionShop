<script>
import axios from "axios";
export default {
  
  
  
  data() {
    return {
      style: [],
      link_gambar: [],
      gambar_url: '',
      Products:[]
    };
  },
  mounted() {
    const id = this.$route.params.id;
    const styleId = this.$route.params.id;
    axios
      .get(`http://127.0.0.1:8000/api/products/${styleId}`)
      .then((Response) => {
        this.Products = Response.data;
        console.log(Response);
      })
      .catch((err) => {
        console.error("Error:", err);
      }),
      
      axios
        .get(`http://127.0.0.1:8000/api/style/${id}`)
        .then((Response) => {
          this.style = Response.data;
          console.log(Response);
        })
        .catch((err) => {
          console.error("Error:", err);
        });
  },
};
</script>

<template>
  <div class="container w-[86rem] h-[727px] mt-[74px] bg-white">
    <p class="relative leading-6 font-display ms-40 top-3 text-6">Casual Style</p>
    <div class="container w-[720px] relative right-[10.5rem] drop-shadow-2xl h-[613px] mt-[44px] bg-white">
      <div v-if="style">
        <div v-for="style in style" >
          <img
            class="relative left-[165px] top-[25px] w-[390px] h-[562px] object-cover rounded-[34px]"
            :src="`${style.gambar_url}`"
            alt="style"
          />
        </div>
      </div>
    </div>
    <div class="relative grid justify-items-end detail-content">
    <div class="detail relative w-[170px] h-[170px] my-2 right-36 bottom-[36rem] bg-secondGrey" v-for="Product in Products" :key="Product.id">
        <div >
            <img
          class="w-[127px] relative top-5 left-5"
          :src="`${Product.link_gambar}`"
          :alt="Product.deskripsi"
          :product-id="this.$route.params.id"
        />
        </div>
    </div>
  </div>
    
    
  </div>
  
</template>

<style></style>

<!-- <div class="container w-[720px] relative top-[-50px] right-[10.5rem] drop-shadow-2xl h-[613px] mt-[74px] bg-white">
  <div class="relative grid justify-items-end right-[300px] detail-content">
    <div class="detail relative w-[170px] h-[170px] top-[256px] bg-dark" v-for="Product in Products" :key="Product.id">
        <div>
            <img
          class="w-[127px] relative top-5 left-5"
          :src="`${Product.link_gambar}`"
          :alt="Product.deskripsi"
        />
        </div>
    </div>
  </div>
</div> -->