<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    return {
      modules: [Pagination],

    };
  },
};
</script>

<template>
  <Swiper 
  :slidesPerView="2" 
  :breakpoints="{
    '640': {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    '1024':{
      slidesPerView: 5,
      spaceBetween: 20,
    },
  }" 
  :modules="modules"
  class="mt-8 swiper_category">
    <swiper-slide>
        <a href="#" class="absolute sm:px-24 px-[80px] mt-2 text-sm text-white font-desc lg:px-28 lg:mx-4">Casual</a>
        <img src="../assets/category/image 4.jpg" alt="casual"
          class="object-cover h-[55px] w-full rounded-[22px]"/>
    </swiper-slide>
    <swiper-slide>
      <a href="#" class="absolute px-16 mt-2 text-sm text-white sm:px-20 font-desc lg:px-28">Formal</a>
        <img src="../assets/category/image 6.jpg" alt="casual"
          class="object-cover object-top h-[55px] w-full rounded-[22px]" />
    </swiper-slide>
    <Swiper-slide>
      <a href="#" class="absolute sm:px-24 px-[70px] mt-2 text-sm text-white lg:px-32 font-desc">Street</a>
        <img src="../assets/category/image 7.jpg" alt="casual"
          class="object-cover object-bottom h-[55px] w-full rounded-[22px]" />
    </Swiper-slide>
    <Swiper-slide>
      <a href="#" class="absolute mt-2 text-sm text-white px-72 font-desc">Vintage</a>
        <img src="../assets/category/image 9.jpg" alt="casual"
          class="object-cover object-top h-[55px] w-full rounded-[22px]" />
    </Swiper-slide>
    <Swiper-slide>
      <a href="#" class="absolute mt-2 text-sm text-white px-72 font-desc">Vintage</a>
        <img src="../assets/category/image 9.jpg" alt="casual"
          class="object-cover object-top h-[55px] w-full rounded-[22px]" />
    </Swiper-slide>
    <Swiper-slide>
      <a href="#" class="absolute mt-2 text-sm text-white px-72 font-desc">Vintage</a>
        <img src="../assets/category/image 9.jpg" alt="casual"
          class="object-cover object-top h-[55px] w-full rounded-[22px]" />
    </Swiper-slide>
  </Swiper>
</template>
