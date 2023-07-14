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
  <div class="container">
    <Swiper :slidesPerView="2" :breakpoints="{
      '640': {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      '1024': {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    }" :modules="modules" class="swiper_category">
      <swiper-slide class="">
        <a href="#" class="absolute sm:px-24 px-[80px] mt-2 text-sm text-white font-desc lg:px-24 lg:mx-4">Casual</a>
        <img src="../assets/category/image 4.jpg" alt="casual" class="object-cover h-[55px] w-full rounded-[22px]" />
      </swiper-slide>
      <swiper-slide>
        <a href="#" class="absolute px-16 mt-2 text-sm text-white sm:px-20 font-desc lg:px-28">Formal</a>
        <img src="../assets/category/image 6.jpg" alt="casual"
          class="object-cover object-top h-[55px] w-full rounded-[22px]" />
      </swiper-slide>
      <Swiper-slide>
        <a href="#" class="absolute sm:px-24 px-[70px] mt-2 text-sm text-white lg:px-28 font-desc">Street</a>
        <img src="../assets/category/image 7.jpg" alt="casual"
          class="object-cover object-bottom h-[55px] w-full rounded-[22px]" />
      </Swiper-slide>
      <Swiper-slide>
        <a href="#" class="absolute mt-2 text-sm text-white px-28 font-desc">Islamic</a>
        <img src="../assets/category/image 10.jpg" alt="casual"
          class="object-cover object-center h-[55px] w-full rounded-[22px]" />
      </Swiper-slide>
      <Swiper-slide>
        <a href="#" class="absolute mt-2 text-sm text-white px-28 font-desc">Vintage</a>
        <img src="../assets/category/image 9.jpg" alt="casual"
          class="object-cover object-top h-[55px] w-full rounded-[22px]" />
      </Swiper-slide>
      <Swiper-slide>
        <a href="#" class="absolute mt-2 text-sm text-white px-72 font-desc">Vintage</a>
        <img src="../assets/category/image 9.jpg" alt="casual"
          class="object-cover object-top h-[55px] w-full rounded-[22px]" />
      </Swiper-slide>
    </Swiper>
  </div>
</template>

<style></style>
