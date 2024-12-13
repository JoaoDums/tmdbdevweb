<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    }
  },
}
</script>

<template>
    <swiper>
    <swiper-slide><img src="https://image.tmdb.org/t/p/original//3V4kLQg0kSqPLctI5ziYWabAZYF.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="https://image.tmdb.org/t/p/original//tElnmtQ6yz1PjN1kePNl8yMSb59.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="https://image.tmdb.org/t/p/original//au3o84ub27qTZiMiEc9UYzN74V3.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="https://image.tmdb.org/t/p/original//m2hs6YPVrzjvRC21SE9BeXtgqFW.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="https://image.tmdb.org/t/p/original//rOmUuQEZfPXglwFs5ELLLUDKodL.jpg" alt=""></swiper-slide>
    </swiper>
</template>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  width: 150px;
  background: #fff;


  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
