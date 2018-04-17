<template>
  <div>
    <div class="swiper-container bannerSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="">
            <img src="https://img2.epetbar.com/nowater/2018-04/09/18/6a92c91bf6172f6c004debe5033e716e.jpg@!water" alt="">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="">
            <img src="https://img2.epetbar.com/nowater/2018-04/11/21/8136c3a9e8ffcbfe1ace7ed761201173.jpg@!water" alt="">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="">
            <img src="https://img2.epetbar.com/nowater/2018-04/16/13/b3a4a0c7a728aa7ef7537388abd6b4fb.jpg@!water" alt="">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="">
            <img src="https://img2.epetbar.com/nowater/2018-04/16/14/90471637375c21c11d67313793bca97c.jpg@!water" alt="">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="">
            <img src="https://img2.epetbar.com/nowater/2018-04/15/22/3f9a93b4cde5555cbca5f9e05d7dfad7.jpg@!water" alt="">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="">
            <img src="https://img2.epetbar.com/nowater/2018-04/16/10/57af2370b7e9f5167fa1373fa665d4c6.jpg@!water" alt="">
          </a>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  mounted(){
    new Swiper('.bannerSwiper',{
      autoplay:true,
      loop : true,
      pagination: { // 指定分页器容器
        el: '.swiper-pagination'
      }
    })
  }
}
</script>


<style lang="stylus" rel="stylesheet/stylus">
  .swiper-container
    width 100%
    height 100%
    margin 0 auto
    position relative
    overflow hidden
    z-index 1
    img
      width 100%
</style>
