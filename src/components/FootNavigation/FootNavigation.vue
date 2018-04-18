<template>
  <div class="footernav">
    <a href="javascript:;" class="guide_item" :class="{on:'/homepage'===$route.path}" @click="goto('/homepage')">
      <span class="item_icon">
        <i class="iconfont icon-wxbmingxingdianpu"></i>
      </span>
      <span>主页</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:'/classify'===$route.path.substr(0,9)}" @click="goto('/classify')">
      <span class="item_icon">
        <i class="iconfont icon-icon04"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:'/shoppingcart'===$route.path}" @click="goto('/shoppingcart')">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:'/myself'===$route.path}" @click="goto('/myself')">
      <span class="item_icon">
        <i class="iconfont icon-xiaolian"></i>
      </span>
      <span>我的E宠</span>
    </a>
  </div>
</template>

<script>
export default {
  methods:{
    goto (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footernav  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      &.on
        color #7bce5b
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>

