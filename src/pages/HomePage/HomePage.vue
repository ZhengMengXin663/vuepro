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
              <li v-for="(menu,index) in mainData.menus" :key="index" >
              <a href="">
                  <span>
                    <span>{{menu.menu_name}}</span>
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
      <imageCarousel v-if="maincarousel.data" :value="maincarousel.data[1]"/>
      <div v-if="mainData.datas">
        <div class="columnnavdiv">
          <ul>
            <li v-for="(menu,index) in mainData.datas[1].menus" :key="index">
              <a href="javascript:;">
                <img :src="menu.image" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div class="banner_item">
          <a href="">
            <img src="https://img2.epetbar.com/nowater/2017-12/18/09/60c354a5d94be9fd114523ee77259c73.gif" alt="">          </a>
        </div>
      </div>
      <div>
        <div class="surprise_day" v-if="maincarousel.data">
            <div class="surprise">
              <div class="surprise-tit">
                <div class="titimg">
                  <img :src="maincarousel.data[3].surprise_icon.image" alt="">
                </div>
                <div class="nexttip">{{maincarousel.data[3].title}}</div>
                <div class="time">
                  <div class="timeWrap">
                    <span>{{maincarousel.data[3].right_image.target.param.tid}}</span>
                    <!--<span>:</span>-->
                    <!--<span>00</span>-->
                  </div>
                </div>
                <div class="more">
                  <a href="">
                    <img :src="maincarousel.data[3].right_image.image" alt="">
                  </a>
                </div>
              </div>
              <div class="surprise-pro">
                <div class="swiper-container surpriseSwiper">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(cd , index) in maincarousel.data[3].goods">
                      <div class="pro-block">
                        <a href="">
                          <div class="imgWrap">
                            <img :src="cd.image.image" alt="">
                          </div>
                          <div class="cred">
                            <span>￥{{cd.sale_price}}</span>
                          </div>
                          <p>{{cd.little_price}}</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div>
        <PageLine/>
      </div>
      <div>
        <div class="currency_ad" v-if="mainData.datas">
          <div class="currency_ad_l">
            <a href="">
              <img :src="mainData.datas[5].content_images[0][0].image" alt="">
            </a>
          </div>
          <div class="currency_ad_r">
            <a href="" v-for="(a,index) in mainData.datas[5].content_images[1]" :key="index">
              <img :src="a.image" alt="">
            </a>
            <!--<a href="">-->
              <!--<img src="https://img2.epetbar.com/nowater/2018-04/03/09/06273e732679cfcf9e4a5e98d1cc0e8c.jpg@!water" alt="">-->
            <!--</a>-->
          </div>
        </div>
      </div>
      <div>
        <PageLine/>
      </div>
      <div v-if="mainData.datas">
        <div class="banner_item" >
          <a href="">
            <img :src="mainData.datas[7].value[0].image" alt="">          </a>
        </div>
      </div>
      <div>
        <PageLine/>
      </div>
      <CustomTite v-if="mainData.datas" :vlaueData="mainData.datas[9]"/>
      <Fashion v-if="mainData.datas" :vlaueData="mainData.datas[10]"/>
      <div>
        <PageLine/>
      </div>
      <div>
          <div class="divboximg" v-if="maincarousel.data">
            <div class="divboximg_all" v-for="(ads,index) in maincarousel.data[3110].content_images" :key="index">
              <a href="" v-for="(ad,index) in ads" :key="index">
                <img :src="ad.image" alt="">
              </a>
            </div>

          </div>
        </div>
      <div>
        <PageLine/>
      </div>
      <div>
        <CustomTite v-if="mainData.datas" :vlaueData="mainData.datas[14]"/>
      </div>

        <BannerItem v-if="mainData.datas" :vlaueData="mainData.datas[15]"/>
      <div>
        <PageLine/>
      </div>
      <BannerItem v-if="mainData.datas" :vlaueData="mainData.datas[17]"/>
      <div>
        <PageLine/>
      </div>
      <BannerItem v-if="mainData.datas" :vlaueData="mainData.datas[19]"/>
      <div>
        <PageLine/>
      </div>
      <BannerItem v-if="mainData.datas" :vlaueData="mainData.datas[21]"/>
      <div>
        <PageLine/>
      </div>
      <BannerItem v-if="mainData.datas" :vlaueData="mainData.datas[23]"/>
      <div>
        <PageLine/>
      </div>
      <BannerItem v-if="mainData.datas" :vlaueData="mainData.datas[25]"/>
      <div>
        <PageLine/>
      </div>
      <BannerItem v-if="mainData.datas" :vlaueData="mainData.datas[27]"/>
      <div>
        <PageLine/>
      </div>
      <BannerItem v-if="mainData.datas" :vlaueData="mainData.datas[29]"/>
      <div>
        <PageLine/>
      </div>
      <BannerItem v-if="mainData.datas" :vlaueData="mainData.datas[31]"/>
      <div>
        <PageLine/>
      </div>
      <BannerItem v-if="mainData.datas" :vlaueData="mainData.datas[33]"/>
      <div>
        <PageLine/>
      </div>
      <BannerItem v-if="mainData.datas" :vlaueData="mainData.datas[35]"/>
      <div>
        <PageLine/>
      </div>
      <BannerItem v-if="mainData.datas" :vlaueData="mainData.datas[37]"/>
      <div>
        <PageLine/>
      </div>
      <CustomTite v-if="mainData.datas" :vlaueData="mainData.datas[43]"/>
      <div>
        <div class="smallCarousel" v-if="mainData.datas">
          <div class="small-swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(menu,index) in mainData.datas[44].value" :key="index">
                <a href="">
                  <img :src="menu.image" alt="">
                </a>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
      <div>
        <PageLine/>
      </div>
      <CustomTite v-if="mainData.datas" :vlaueData="mainData.datas[46]"/>
      <Fashion v-if="mainData.datas" :vlaueData="mainData.datas[47]"/>
      <div>
        <PageLine/>
      </div>
      <CustomTite v-if="mainData.datas" :vlaueData="mainData.datas[49]"/>
      <Fashion v-if="mainData.datas" :vlaueData="mainData.datas[50]"/>
      <div>
        <PageLine/>
      </div>
      <BannerItem v-if="mainData.datas" :vlaueData="mainData.datas[52]"/>
      </div>
    <div class="footer">
        <div class="footerTop">
          <span class="on">触屏版</span>
          <span>手机客户端</span>
          <span>关于我们</span>
          <span>联系我们</span>
        </div>
        <div class="footerBottom">
          © wap.epet.com 版权：重庆易宠科技有限公司
        </div>
    </div>



  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import PageLine from '../../components/PageLine/PageLine.vue'
import imageCarousel from '../../components/imageCarousel/imageCarousel.vue'
import BannerItem from '../../components/BannerItem/BannerItem.vue'
import CustomTite from '../../components/CustomTite/CustomTite.vue'
import Fashion from '../../components/Fashion/Fashion.vue'
import {mapState} from 'vuex'
export default {
  data(){
    return{
      ishow:show,
      dataIndex:0
    }
  },
  mounted(){
    this.$store.dispatch('getMainData')
    this.$store.dispatch('getMainCarousel')
    new BScroll('.proceedVessel',{
      scrollX: true
    })
  },
  computed:{
    ...mapState(['mainData','maincarousel'])
  },
  components:{
    PageLine,
    imageCarousel,
    BannerItem,
    CustomTite,
    Fashion
  },
  watch:{
    mainData(){
      this.$nextTick(()=>{
        new Swiper('.small-swiper-container',{
          autoplay:true,
          loop : true,
          pagination: { // 指定分页器容器
            el: '.swiper-pagination'
          }
        })
      })
    },
    maincarousel(){
      this.$nextTick(()=>{
        new Swiper('.surpriseSwiper',{
          slidesPerView : 3.5,
          spaceBetween : 10,
        })
      })
    }

  }

}
</script>


<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .headerbox
    box-sizing border-box
    max-width 640px
    margin auto
    position fixed
    top 0
    left 0
    right 0
    background #fff
    z-index 99
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
    margin-top 86px
    overflow hidden
    div
      .columnnavdiv
         ul
          clearFix()
          li
            float left
            width 20%
            height 90px
            img
              width 100%
      .banner_item
        .swiper-wrapper
          a
            img
              width 100%

      .surprise_day
        .surprise
          .surprise-tit
            position relative
            padding 10px
            clearFix()
            overflow hidden
            .titimg
              float left
              img
                width 85px
                vertical-align: middle;
            .nexttip
              float left
              position absolute
              right 107px
              margin-right 5px
              font-size 13px
              margin-left 10px
            .time
              position absolute
              right 55px
              margin-left 5px
            .more
              position absolute
              right -68px
              top 2px
              a
                text-align right
                img
                  width 50%
                  margin 0 0 0 auto
          .surprise-pro
            box-sizing border-box
            padding-left 5px
            margin-bottom 10px
            .pro-block
              a
                .cred
                  color red
                  margin-top 5px
                  text-align center
                p
                  color #999
                  font-size 12px
                  text-align center
                  margin-top 5px

      .currency_ad
        height 250px
        width 100%
        clearFix()
        .currency_ad_l
          float left
          width 50%
          img
            width 100%
            height 100%
        .currency_ad_r
          float left
          width 50%
          img
            width 100%
            height 50%

      .banner_item
        width 100%
        a
          display block
          img
            width 100%
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

      .divboximg
        width 100%
        height 200px
        clearFix()
        .divboximg_all
          width 50%
          height 100%
          float left
          a
            img
              width 100%
              height 50%
        /*.divboximg_right*/
          /*width 50%*/
          /*height 100%*/
          /*float left*/
          /*a*/
            /*img*/
              /*width 100%*/
              /*height 50%*/

      .smallCarousel

        width 100%
        .small-swiper-container
          position relative
          .swiper-wrapper img
            width 100%
  .footer
    margin-top 1em
    margin-bottom 50px
    .footerTop
      text-align center
      padding 15px 0 5px
      font-size 14px
      .on
        color red
      span
        padding-right 10px
    .footerBottom
      text-align center
      margin 0 10px 0 10px
      padding-bottom 25px
      font-size 12px

</style>
