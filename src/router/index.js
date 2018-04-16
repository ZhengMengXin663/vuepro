import Vue from 'vue'
import VueRouter from 'vue-router'
import Classify from '../pages/Classify/Classify.vue'
import HomePage from '../pages/HomePage/HomePage.vue'
import Myself from '../pages/Myself/Myself.vue'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/homepage', //主页
      component:HomePage
    },
    {
      path:'/classify', //分类
      component:Classify
    },
    {
      path:'/shoppingcart', //购物车
      component:ShoppingCart
    },
    {
      path:'/myself', //我的E充页
      component:Myself
    },
    {
      path:'/',
      redirect:'/homepage'
    }
  ]
})
