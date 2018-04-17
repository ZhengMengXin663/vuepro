<template>
  <div>
    <div class="fashion" v-if="vlaueData">
      <div class="fashionImg">
        <a href="">
          <img :src="vlaueData.value[0].cover.image" alt="">
          <span class="palyButton"></span>
        </a>
      </div>
      <div class="fashionInfo">
        <div class="fashionInfoText">{{vlaueData.value[0].title}}</div>
        <div class="fashionInfoStar">
              <span class="eyes">
                <img src="https://static.epetbar.com/static_web/wap/dist/images/background/view-black.png" alt="">
              </span>
          <i>{{vlaueData.value[0].visit}}</i>
          <span>丨</span>
          <i>{{vlaueData.value[0].time}}</i>
        </div>
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
  .fashion
    .fashionImg
      a
        img
          width 100%
    .fashionInfo
      box-sizing border-box
      padding 10px
      text-align center
      color #999
      font-size 12px
      .fashionInfoText
        color #333


    .fashionInfoStar
      margin-top 8px
      .eyes
        display inline-block
        width 10px
        height 9px
        img
          width 100%

</style>
