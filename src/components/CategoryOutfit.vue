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
  <Swiper :pagination="{
    dynamicBullets: true,
  }" :modules="modules"  
  class="flex max-w-md mx-auto mt-8 container-category sm:max-w-sm">
    <swiper-slide>
      <div class="flex gap-6 px-2 category">
        <a href="#" class="absolute px-[70px] mt-2 text-sm text-white font-desc">Casual</a>
        <img src="../assets/category/image 4.jpg" alt="casual" class="object-cover h-[55px] w-full rounded-[22px] m:h-[55px]" />

        <a href="#" class="absolute mt-2 text-sm text-white px-72 font-desc">Formal</a>
        <img src="../assets/category/image 6.jpg" alt="casual"
            class="object-cover object-top h-[55px] w-full rounded-[22px]" />
      </div>
    </swiper-slide>
    
    <swiper-slide> 
      <div class="flex gap-6 px-2 category">
        <a href="#" class="absolute px-[70px] mt-2 text-sm text-white font-desc">Street</a>
        <img src="../assets/category/image 7.jpg" alt="casual" class="object-cover object-bottom h-[55px] w-full rounded-[22px]" />

        <a href="#" class="absolute mt-2 text-sm text-white px-72 font-desc">Vintage</a>
        <img src="../assets/category/image 9.jpg" alt="casual"
          class="object-cover object-top h-[55px] w-full rounded-[22px]" />
      </div>
    </swiper-slide>
  </Swiper>
</template>
