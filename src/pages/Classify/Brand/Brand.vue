<template>
 <div class="brandWrap">
   <div v-if="brandlist.brand">
   <div class="brandList" v-for="(items,index) in brandlist.brand" :key="index">
      <div class="brandtitle">
        <span>——{{items.title}}——</span>
      </div>
      <div class="list">
        <ul>
          <li v-for="(item,index) in items.list" :key="index">
            <a href="">
              <div><img :src="item.logo" alt=""></div>
              <p class="name">{{item.name}}</p>
              <p class="address">{{item.address}}</p>
            </a>
          </li>
        </ul>
      </div>
   </div>
   <a href="" class="all">全部</a>
   </div>
 </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  mounted(){
    this.$store.dispatch('getbrandList')
  },
  computed:{
    ...mapState(['brandlist'])
  }
}
</script>


<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .brandWrap
    width 100%
    height 100%
    padding-top 40px
    padding-bottom 45px
    .brandList
      border-top 10px solid #f3f4f5
      padding-bottom 15px
      margin-bottom 10px
      .brandtitle
        width 100%
        margin-top 20px
        text-align center
        span
          color #999
          font-size 12px
      .list
        padding 0 5px
        ul
          clearFix()
          li
            box-sizing border-box
            width 33%
            margin-top 20px
            padding 0 5px
            float left
            a
              display block
              div
                height 60px
                border 1px solid #e2e2e2
                text-align center
                img
                  height 40px
                  margin 10px auto 0
              span
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
              .name
                height 20px
                margin-top 5px
                text-align center
                font-size 13px
                color black
              .address
                text-align center
                font-size 12px
                color #999
    .all
      display inline-block
      width 40px
      height 40px
      right 6px
      bottom 65px
      position fixed
      z-index 10
      background rgba(0,0,0,.4)
      line-height 40px
      border-radius 50%
      color #fff
      text-align center
      font-size 12px
</style>
