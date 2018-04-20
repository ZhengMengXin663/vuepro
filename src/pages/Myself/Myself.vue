<template>
<div>
  <div class="">
  <div  class="loginW">
    <div class="headerTop">
      <a href=""></a>
      <span>注册</span>
    </div>
    <div class="moshi">
      <ul>
        <li @click="isShow=true">普通登录<i :class="{on:isShow}"></i></li>
        <li @click="isShow=false">手机动态码密码登录<i :class="{on:!isShow}"></i></li>
      </ul>
    </div>
  </div>
  <div  class="loginC">
    <div class="inputC">
      <div class="content">
        <div class="pwd" v-if="isShow">
          <ul>
            <li>
              <span class="mNameIco"></span>
              <input type="text" placeholder="手机号/邮箱/用户名" name="userName">
            </li>
            <li>
              <span class="mpasswordIco"></span>
              <input type="text" placeholder="输入密码">
            </li>
          </ul>
        </div>
        <div class="phone" v-else>
          <ul>
            <li>
              <span class="phoneImg"></span>
              <input type="text" placeholder="已注册的手机号" name="userName">
            </li>
            <li>
              <span class="mpasswordIco"></span>
              <input type="text" placeholder="请输入图片内容">
              <div class="yanzheng">
                <img src="" alt="">
              </div>
            </li>
            <li>
              <span class="mpasswordIco"></span>
              <input type="text" placeholder="动态密码">
              <div class="dongtai">获取动态密码</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="losePwd">
        <a href="">忘记密码？</a>
      </div>
      <div class="loginBtn" v-if="isShow">
        <a href="">登录</a>
      </div>
      <div class="loginBtn" v-else>
        <a href="">登录</a>
      </div>
      <div class="height"></div>
      <div class="friend">
        <span>
            合作网站登录
        </span>
      </div>
      <div class="logo">
        <ul>
          <li><img src="//static.epetbar.com/mpet/images/login/login_ico4.png" alt=""></li>
          <li><img src="//static.epetbar.com/mpet/images/login/login_ico2.png" alt=""></li>
        </ul>
      </div>
    </div>
  </div>
  </div>
</div>
</template>
<script>
export default {
  data(){
    return{
      isShow:true,
      userName:'',
      pwd:'',
      telephone:''

    }
  }
}
</script>


<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .loginW
    background-image url("https://img1.epetbar.com/2018-04/18/23/055f8106398d5089fc15be0f8a7e483d.png")
    background-size 100% 100%
    width 100%
    height 180px
    .headerTop
      height 50px
      line-height 50px
      padding 0 14px
      a
        display block
        width 22px
        height 20px
        background-image url("https://static.epetbar.com/mpet/images/personal-bico3.png")
        background-size  12px 17px
        background-repeat no-repeat
        position absolute
        top 15px
        left 10px
      span
        position absolute
        top 16px
        right 10px
        font-size 18px
        color white
        font-weight 400
        line-height 18px
    .moshi
      width 100%
      height 45px
      margin-top 85px

      ul
        clearFix()
        background rgba(255,255,255,0.3)
        li
          float left
          display block
          width 50%
          text-align center
          height 45px
          line-height 45px
          font-size 15px
          color #fff
          position relative
          .on
            width 0
            height 0
            border-left 10px solid transparent
            border-right 10px solid transparent
            border-bottom 10px solid #fff
            position absolute
            bottom 0
            left 0
            right 0
            margin auto
  .loginC
    .inputC
      margin 0 4% 10px 4%
      padding 0 1.6%
    .inputC .pwd,.phone
      list-style none
      ul
        li
          border-bottom #e2e2e2 solid 1px
          padding 12px 0 12px 30px
          position relative
          input
            display block
            height 21px
            font-size 15px
            border none
            padding 0
            color #666
            font-family "Microsoft Yahei",tahoma,arial
            outline none
          span
            height 21px
            width 17px
            display block
            position absolute
            left 2px
          .mNameIco
            background url('https://static.epetbar.com/mpet/images/ico3.png') no-repeat
            background-size contain
          .mpasswordIco
            background url("https://static.epetbar.com/mpet/images/ico4.png") no-repeat
            background-size contain
          .phoneImg
            background url("https://static.epetbar.com/mpet/images/ico1.png") no-repeat
            background-size contain
          .yanzheng
            width 85px
            height 30px
            position absolute
            background red
            right 0px
            top 8px
          .dongtai
            width 100px
            height 30px
            border 1px solid red
            border-radius 3px
            position absolute
            top 5px
            right 0px
            color red
            font-size 12px
            text-align center
            line-height 30px
    .losePwd
      text-align right
      margin-top 10px
    .loginBtn
      padding-top 10px
      a
        display block
        background #2ec975
        text-align center
        letter-spacing 5px
        padding 12px 0
        color #fff
        border-radius 5px
    .height
      height 100px
    .friend
      margin-top 10px
      text-align center
      span
        color #666
    .logo
      ul
        padding 20px 0
        li
          display inline-block
          width 33%
          padding 0 7px
          img
            width 60%

</style>
