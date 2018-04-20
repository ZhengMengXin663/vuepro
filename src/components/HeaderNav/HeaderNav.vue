<template>
<div>
  <div class="externalWrapper">
    <div class="wrapTop">
      <a href="javascript:;" class="goBack" @click="$router.replace('/classify/brand')">
        <!--<img src="https://static.epetbar.com/static_web/wap/dist/images/background/img.png" alt="">-->
      </a>
      <p>{{titleName}}</p>
      <a href="javascript:;" class="menu" @click="isShow=!isShow">
        <!--<img src="" alt="">-->
      </a>
    </div>
    <transition name="navShow">
    <div class="navWrap" v-show="isShow">
      <a href="javascript:;">
        <span class="icon1"></span>
        <p>首页</p>
      </a>
      <a href="javascript:;">
        <span class="icon2"></span>
        <p>商品分类</p>
      </a>
      <a href="javascript:;">
        <span class="icon3"></span>
        <p>购物车</p>
      </a>
      <a href="javascript:;">
        <span class="icon4"></span>
        <p>我的e宠</p>
      </a>
    </div>
    </transition>
  </div>
</div>
</template>

<script>
export default {
  props:['titleName'],
  data(){
    return{
      isShow:false
    }
  }
}
</script>


<style lang="stylus" rel="stylesheet/stylus">
    .externalWrapper
      width 100%
      background #fff
      z-index 10
      .wrapTop
        box-sizing border-box
        width 100%
        height 50px
        padding 0 10px
        position relative
        border-bottom 1px solid #f3f3f3
        p
          text-align center
          line-height 50px
          font-size 18px
        .goBack
          display block
          width 11px
          height 18px
          position absolute
          top 15px
          left 10px
          background-image url("https://static.epetbar.com/static_web/wap/dist/images/background/img.png")
          background-size 234px 159px
          background-position -201px -10px
        .menu
          display block
          width 17px
          height 18px
          position absolute
          top 15px
          right 10px
          background-image url("https://static.epetbar.com/static_web/wap/dist/images/background/img.png")
          background-size 234px 159px
          background-position -217px -10px
      .navWrap
        padding 10px 0
        width 100%
        overflow hidden
        border-bottom 1px solid #f3f3f3
        a
          width 25%
          display inline-block
          float left
          text-align center
          span
            display block
            margin auto
            height 25px
            width 25px
            background-image url("https://static.epetbar.com/static_web/wap/dist/images/background/img.png")
            background-size 234px 159px
          .icon1
            background-position -172px -7px
          .icon2
            background-position -172px -49px
          .icon3
            background-position -172px -90px
          .icon4
            background-position -172px -133px
          p
            font-size 14px
            color #666
            line-height 22px
      .navShow-enter-active
        transition all 1s ease
      .navShow-leave-active
        transition: all 1s ease;
      .navShow-fade-enter, .navShow-fade-leave-to
        transform translateY(43px);


</style>
