<template>
  <div>
    <div class="banner_item">
      <div class="swiper-wrapper">
        <a href="javascript:;">
          <img :src="vlaueData.content_images[0][0].image" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['vlaueData']
}
</script>


<style lang="stylus" rel="stylesheet/stylus">
  .banner_item img
    width 100%

</style>
