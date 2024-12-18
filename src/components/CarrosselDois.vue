<script>
// import Swiper core and required modules
import { Pagination } from 'swiper/modules'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

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
      modules: [ Pagination],
    }
  },
}
  
</script>

<template>
    <swiper :loop="true">
    <swiper-slide><img src="https://image.tmdb.org/t/p/original//3V4kLQg0kSqPLctI5ziYWabAZYF.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="https://image.tmdb.org/t/p/original//tElnmtQ6yz1PjN1kePNl8yMSb59.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="https://image.tmdb.org/t/p/original//au3o84ub27qTZiMiEc9UYzN74V3.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="https://image.tmdb.org/t/p/original//m2hs6YPVrzjvRC21SE9BeXtgqFW.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="https://image.tmdb.org/t/p/original//rOmUuQEZfPXglwFs5ELLLUDKodL.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="https://tm.ibxk.com.br/2022/05/04/04181551056727.jpg?ims=750x" alt=""></swiper-slide>
    <swiper-slide><img src="https://files.tecnoblog.net/wp-content/uploads/2022/04/batman.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="https://s2-techtudo.glbimg.com/Y31IleO9-WcicKisptrvUChLCws=/0x0:1920x1080/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2024/x/g/1sBrOaRtARQCoJZyXWnA/3q01acg0mwm0dekhvkpfcxypzsu.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/01/Panico-5-filmes-terror.jpg?w=1200&h=675&crop=1" alt=""></swiper-slide>
    <swiper-slide><img src="https://s2-techtudo.glbimg.com/ONiJPmodjbUYs6dVbSJJ_OJq3RY=/0x0:680x453/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/E/b/eTPAyRQm2iiGzRwvdShQ/coringa.jpg" alt=""></swiper-slide>
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
  height: 700px;
  object-fit: cover;
}
</style>
