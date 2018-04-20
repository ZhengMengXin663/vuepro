<template>

<div class="warp">
  <div>
    <HeaderNav titleName="全部品牌"/>
    <div class="brandList" v-if="allBrand.brand" ref="titleUl">
      <div class="items" v-for="(items,index) in allBrand.brand" :key="index">
        <div class="title">{{items.order}}</div>
        <div class="item" v-for="(item,index) in items.list" :key="index">
          <div class="logo">
            <img :src="item.logo" alt="">
          </div>
          <div class="info">
            <p class="name">{{item.name}}</p>
            <p class="address">{{item.address}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="navList">
    <span :class="{on:index===currentIndex}" v-for="(items,index) in allBrand.brand" :key="index" @click="togo(index)">{{items.order}}</span>


  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import HeaderNav from '../../components/HeaderNav/HeaderNav.vue'
import BScroll from 'better-scroll'
export default {
  data(){
    return{
      tops:[],
      scrollY:0,
    }
  },
  mounted(){
    this.$store.dispatch('getAllBrand',()=>{
      this.$nextTick(()=>{
        //
        this.scrollA=new BScroll('.warp',{
          probeType: 2,
          click:true
        })
        this.scrollA.on('scroll',(pos)=>{
          this.scrollY=Math.abs(pos.y)
        })
        this.scrollA.on('scrollEnd',(pos)=>{
          this.scrollY=Math.abs(pos.y)
        })
        //
        const tops=[]
        let top= 0
        tops.push(top)

        const topZ = this.$refs.titleUl.getElementsByClassName('items')
        console.log(topZ)
        Array.prototype.slice.call(topZ).forEach( count =>{
          top += count.clientHeight
          tops.push(top)
        })
        this.tops = tops
      })
    })



//
  },
  computed:{
    ...mapState(['allBrand']),
    currentIndex(){
      const {tops, scrollY} = this
      return tops.findIndex((top,index)=> scrollY >= top && scrollY< tops[index+1])
    }
  },
  methods:{
    togo(index){
      const y = -this.tops[index]
      this.scrollA.scrollTo(0,y,300)
    }
  },
  components:{
    HeaderNav
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .warp
    height 100%
    overflow hidden
    .brandList
      .items
        .title
          font-size 12px
          font-weight 400
          text-indent 15px
          line-height 24px
          color #999
          background #f3f4f5
        .item
          padding 10px
          border-bottom 1px solid #f3f4f5
          margin-right 20px
          clearFix()
          .logo
            width 30%
            height 50px
            border 1px solid #f3f4f5
            float left
            margin auto
            position relative
            img
              height 40px
              margin 5px auto
              position absolute
              top 0
              left 0
              right 0
          .info
            float left
            margin-left 20px
            margin-top 10px
            p
              margin-bottom 6px
            .name
              font-size 14px
            .address
              font-size 12px
              color #999
  .navList
    position fixed
    top 0
    bottom 0
    right 4px
    width 10px
    z-index 1
    text-align center
    display flex
    flex-direction column
    justify-content center
    span
      font-weight 500
      display block
      margin-top 2px
      font-size 12px
      text-align center
    .on
      color red

</style>
