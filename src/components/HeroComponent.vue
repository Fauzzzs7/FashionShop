<template>
  <div class="container">
    <h1 class="mt-8 font-semibold text-dark ms-6 text-xxl font-display">
      TREND FOR NOW
    </h1>
    <div class="container lg:px-32">
      <Swiper 
      :slides-per-view="3" 
      :navigation="true"
      :space-between="20"
      :loop="true"
      :effect="'coverflow'"
      :coverflowEffect="{
      rotate: 0,
      stretch: -100,
      depth: 200,
      }"
      :centered-slides="false"
      :modules="modules"
      class="w-auto mb-20 swiper_wrapp">
      
      <SwiperSlide><img
          src="../assets/images/img2.png" alt="trending" 
          class="rounded-2xl" />
      </SwiperSlide>
      <SwiperSlide><img class="rounded-2xl"
          src="../assets/images/img2.png" alt="trending" />
      </SwiperSlide>
      <SwiperSlide><img class="rounded-2xl"
          src="../assets/images/img3.png" alt="trending" />
      </SwiperSlide>
      <SwiperSlide><img class="rounded-2xl" 
        src="../assets/images/img3.png" alt="trending" />
      </SwiperSlide>
      <SwiperSlide><img class="rounded-2xl" src="../assets/images/img3.png"
          alt="trending" />
      </SwiperSlide>
      <SwiperSlide><img class="rounded-2xl" src="../assets/images/img3.png"
          alt="trending" />
      </SwiperSlide>
    </Swiper>
    </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, EffectCoverflow } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, EffectCoverflow],
    };
  },
};
</script>

<style>
.img-category {
  fill: #1e1e1e;
}

</style>

<!-- <div class="relative category ms-10">
      <div class="absolute left-0 flex mt-20">
        <span
          class="absolute font-medium text-white left-20 font-desc text-title top-3"
          >Casual</span
        >
        <button class="inline-flex items-center h-auto font-bold text-gray-800">
          <img
            class="img-category rounded-[22px] h-auto"
            src="../assets/category/image 4.jpg"
            alt="casual"
          />
        </button>
        <button class="inline-flex items-center h-auto font-bold text-gray-800">
          <span
            class="absolute font-medium text-white ms-[4rem] left-80 font-desc text-title top-3"
            >Formal</span
          >
          <img
            class="img-category rounded-[22px] h-auto ms-6"
            src="../assets/category/image 6.jpg"
            alt="casual"
          />
        </button>
        <button class="inline-flex items-center h-auto font-bold text-gray-800">
          <span
            class="absolute font-medium text-white font-desc ms-[4rem] text-title top-3"
            >Street Style</span
          >
          <img
            class="img-category rounded-[22px] h-auto ms-6"
            src="../assets/category/image 7.jpg"
            alt="casual"
          />
        </button>
        <button class="inline-flex items-center h-auto font-bold text-gray-800">
          <span
            class="absolute font-medium text-white ms-[4rem] font-desc text-title top-3"
            >vintage Style</span
          >
          <img
            class="img-category rounded-[22px] h-auto ms-6"
            src="../assets/category/image 9.jpg"
            alt="casual"
          />
        </button>
        <button class="inline-flex items-center h-auto font-bold text-gray-800">
          <span
            class="absolute font-medium text-white ms-[4rem] font-desc text-title top-3"
            >islamic Style</span
          >
          <img
            class="img-category rounded-[22px] h-auto ms-6"
            src="../assets/category/image 10.jpg"
            alt="casual"
          />
        </button>
      </div>
    </div> -->
