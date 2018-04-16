<template>
  <div>
    <header class="headerbox">
     <div class="headerMain">
       <div class="headerTop">
       <div class="leftInfo">
         <a href="javascript:;">
         <span>狗狗</span>
         <span class="xian">|</span>
         <span class="samll">重庆</span>
         <i></i>
         </a>
       </div>
       <p class="search-text">
         <a href="javascript:;">
         <input class="search-input" placeholder="搜索商品和品牌" disabled="disabled" />
         <span class="iconfont icon-sousuo serach-ico"></span>
         </a>
       </p>
       <img src="//static.epetbar.com/static_web/wap/src/images/mydope.png">
     </div>
     </div>
     <div class="find_nav">
       <div class="proceedVessel">
          <div class="find_nav_list">
            <ul class="menu-wrapper">
              <li class="on">
              <a href="">
                  <span>
                    <span>首页</span>
                    <i></i>
                  </span>
              </a>
            </li>
              <li>
                <a href="">
                  <span>
                    <span>狗狗主粮</span>
                    <i></i>
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>
                    <span>零食</span>
                    <i></i>
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>
                    <span>玩具</span>
                    <i></i>
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>
                    <span>外出</span>
                    <i></i>
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>
                    <span>服饰城</span>
                    <i></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
       </div>
     </div>
    </header>
    <div class="main">
      <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a href="">
                  <img src="https://img2.epetbar.com/nowater/2018-04/09/18/6a92c91bf6172f6c004debe5033e716e.jpg@!water" alt="">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="">
                  <img src="https://img2.epetbar.com/nowater/2018-04/11/21/8136c3a9e8ffcbfe1ace7ed761201173.jpg@!water" alt="">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="">
                  <img src="https://img2.epetbar.com/nowater/2018-04/16/13/b3a4a0c7a728aa7ef7537388abd6b4fb.jpg@!water" alt="">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="">
                  <img src="https://img2.epetbar.com/nowater/2018-04/16/14/90471637375c21c11d67313793bca97c.jpg@!water" alt="">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="">
                  <img src="https://img2.epetbar.com/nowater/2018-04/15/22/3f9a93b4cde5555cbca5f9e05d7dfad7.jpg@!water" alt="">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="">
                  <img src="https://img2.epetbar.com/nowater/2018-04/16/10/57af2370b7e9f5167fa1373fa665d4c6.jpg@!water" alt="">
                </a>
              </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  mounted(){
    new BScroll('.proceedVessel',{
      scrollX: true
    })
    new Swiper('.swiper-container',{
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
  @import "../../common/stylus/mixins.styl"
  .headerbox
    box-sizing border-box
    max-width 640px
    margin auto
    .headerMain
      box-sizing border-box
      padding 5px 10px
      .headerTop
        padding 8px 0
        background #fff
        text-align center
        display -webkit-box
        -webkit-box-align center
        display -moz-box
        -moz-box-align center
        width: 100%
        .leftInfo
          margin-right 20px
          position relative
          font-size 14px
          a
            color #333
            span
              color #898989
            .samll
              font-size 13px
            i
              position absolute
              top 5px
              right -11px
              border-width 4px
              font-size 0
              line-height 0
              border-style solid solid dotted
              border-color #898989 transparent transparent
        .search-text
          position: relative;
          -webkit-box-flex: 1;
          a
            color #333
            input
              width 100%
              border 0
              height 25px
              background #e9e9e9
              border-radius 4px
              color #bcbcbc
              text-indent 10px
              font-size 13px
              outline 0
            span
              width 11px
              height 11px
              position absolute
              right 10px
              top 0
              bottom 0
              margin auto 0
        img
          width 25px
          margin-left 10px
          vertical-align: middle;
    .find_nav
      width 100%
      height 35px
      min-width 320px
      .proceedVessel
        overflow hidden
        .find_nav_list
          width 140%
          ul
            white-space nowrap
            display flex
            flex-direction row
            .on
              color #459d36
              a
                color #666
                span
                  color #459d36
                  i
                    background: #459d36;

            li
              width 74.5px
              a
                display block
                width 100%
                height 100%
                line-height 36px
                font-size 14px
                text-align center
                color #666
                span
                  position relative
                  display inline-block
                  i
                    position absolute
                    bottom 1px
                    left -10%
                    width 120%
                    height 2px
  .main
    div
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
