<template>
<div>
  <header>
    <div class="wrap">
      <div class="leftC">
        <span :class="{on:'/classify/classifyList'===$route.path}" @click="$router.replace('/classify/classifyList')">分类</span>
      </div>
      <div class="rightC">
        <span :class="{on:'/classify/brand'===$route.path}" @click="$router.replace('/classify/brand')">品牌</span>
      </div>
      <span class="seacher">
        <img src="//static.epetbar.com/static_web/wap/src/images/background/search-ico.png" alt="">
      </span>
    </div>
  </header>
  <router-view/>
</div>
</template>

<script>
export default {}
</script>


<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
    .wrap
      box-sizing border-box
      bottom-border-1px(#cbcbcb)
      position fixed
      width 100%
      height 40px
      top 0
      right 0
      background #fff
      z-index 10
      &:after
        content ''
        display block
        clear both
        position initial
      div
        height 40px
        width 50%
        box-sizing border-box
        float left
        span
          display inline-block
          line-height 40px
          font-size 13px
          font-weight 700
          height 40px
        .on
          color red
          border-bottom 2px solid red
      .leftC
        text-align right
        padding-right 5%
      .rightC
        text-align left
        padding-left 5%
      .seacher
        position absolute
        width 14px
        height 14px
        top 13px
        right 15px
        img
          width 100%
</style>
