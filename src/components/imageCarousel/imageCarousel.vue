<template>
  <div>
    <div class="swiper-container bannerSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(img, index) in value.value" :key="index">
          <a href="">
            <img :src="img.image" alt="">
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
  props:['value'],
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
