<template>
  <div class="container">
    <h1 class="font-semibold text-dark mt-8 ms-6 text-xxl font-display">
      TREND FOR NOW
    </h1>
    <Swiper :slides-per-view="3" @swiper="onSwiper" @slideChange="onSlideChange" :navigation="true" :modules="modules">
      <SwiperSlide><img class="w-[130px] h-[250px] mt-[50px] rounded-3xl ms-[28px] object-cover"
          src="../assets/images/img1.jpg" alt="trending" />
      </SwiperSlide>
      <SwiperSlide><img class="w-[130px] h-[250px] ms-[18px] mt-[50px] rounded-3xl object-cover"
          src="../assets/images/img2.jpg" alt="trending" />
      </SwiperSlide>
      <SwiperSlide><img class="w-[130px] h-[250px] mt-[50px] ms-[8px] rounded-3xl object-cover"
          src="../assets/images/img3.jpeg" alt="trending" />
      </SwiperSlide>
      <SwiperSlide><img class="w-[130px] h-[250px] mt-[50px] rounded-3xl object-cover" src="../assets/images/img3.jpeg"
          alt="trending" />
      </SwiperSlide>
      <SwiperSlide><img class="w-[130px] h-[250px] mt-[50px] rounded-3xl object-cover" src="../assets/images/img3.jpeg"
          alt="trending" />
      </SwiperSlide>
    </Swiper>
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
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";

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
      modules: [Navigation],
    };
  },
};
</script>

<style>
.img-category {
  fill: #1e1e1e;
}
</style>
<!-- class="swiper_container"
            > -->
<!-- <SwiperSlide>
                <img src="src/assets/images/img1.jpg" alt="slide_image">
            </SwiperSlide>
            <SwiperSlide>
                <img src="src/assets/images/img2.jpg" alt="slide_image">
            </SwiperSlide>
            <SwiperSlide>
                <img src="src/assets/images/img3.jpg" alt="slide_image">
            </SwiperSlide>
            <div class="slider-controler">
                <div class="swiper-button-prev slider-arrow"></div>
            </div> -->
<!-- <div class="swiper-pagination"></div> -->
<!-- </Swiper>      -->
