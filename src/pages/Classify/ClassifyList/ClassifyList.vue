<template>
<div>
  <div class='classifyListsCon'>
    <div class="left">
      <ul v-if="classifyLists.categorys">
        <li :class="{on:index===listIndex}" v-for="(list,index) in classifyLists.categorys" :key="index" @click="changeIndex(index)">{{list.name}}</li>
      </ul>
    </div>
    <div class="right" v-if="classifyLists.categorys">
      <div class="reghtWrap" v-for="(items,index) in classifyLists.categorys[listIndex].cate_list" :key="index">
        <a href="">{{items.title}}
          <img v-if="items.list.length>6" class="allImg" src="http://static.epetht.com/static_wap/appmall/lib/goods/cate_right_img.png" alt="">
        </a>
        <ul>
          <li v-for="(item,index) in items.list" :key="index" :class="{logo:item.logo ? true:false}">
            <a href="" >
              <img :src="item.photo||item.logo" alt="">
              <p>{{item.name}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll'

export default {
  data(){
    return{
      listIndex:0
    }
  },
  mounted(){
    this.$store.dispatch('getClassifyList')
  },
  computed:{
    ...mapState(['classifyLists'])
  },
  methods:{
    changeIndex(index){
      this.listIndex=index
    }
  },
  watch:{
    classifyLists(){
      this.$nextTick(()=>{
        new BScroll('.left',{
          click:true,
          scrollY: true
        })
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .classifyListsCon
    box-sizing border-box
    width 100%
    height 100%
    padding-top 40px
    padding-bottom 45px
    overflow hidden
    .left
      width 70px
      border-right 5px solid #f3f4f5
      position fixed
      height 100%
      top 40px
      left 0
      ul
        padding-bottom 90px
        li
          box-sizing border-box
          width 70px
          height 50px
          padding 15px 0
          text-align center
          font-size 13px
          text-overflow ellipsis
          white-space nowrap
          border-bottom 1px solid #f3f4f5
          line-height 20px
        .on
          background #f3f4f5
          color #ed4044
    .right
      margin-left 70px
      width 300px
      border-top 5px solid #f3f4f5
      .reghtWrap
        border-top 1px solid #f3f4f5
        box-sizing border-box
        padding 5px 5px 20px
        clearFix()
        a
          font-size 12px
          display block
          margin-top 10px
          padding-left 5px
          .allImg
            height 10px
            float right
            margin 5px 5px 0 0
        ul
          clearFix()
          li
            box-sizing border-box
            float left
            width 33%
            padding 0 5px
            margin-top 10px
            a
              display block
              img
                width 100%
              p
                text-align center
                color black
                font-size 13px
                margin-top 10px
          .logo
            width 50%
</style>
