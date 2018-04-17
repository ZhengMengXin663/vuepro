<template>
  <div>
    <div class="custom_tite">
      <div class="leftimg">
        <img :src="vlaueData.value.left.img.image" alt="">
      </div>
      <div class="more">
        <a href="">
          <img :src="vlaueData.value.right.img.image" alt="">
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
  .custom_tite
    box-sizing border-box
    margin-top 10px
    width 100%
    padding-bottom 5px
    position relative
    .leftimg
      margin 0 auto 0 10px
      img
        width 50%
    .more
      position absolute
      text-align right
      top 1px
      right 0
      img
        width 50%
</style>
