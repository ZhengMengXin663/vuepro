import Vue from 'vue'
import VueRouter from 'vue-router'
import Classify from '../pages/Classify/Classify.vue'
import HomePage from '../pages/HomePage/HomePage.vue'
import Myself from '../pages/Myself/Myself.vue'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart.vue'
import ClassifyList from '../pages/Classify/ClassifyList/ClassifyList.vue'
import Brand from '../pages/Classify/Brand/Brand.vue'
import AllBrand from '../pages/AllBrand/AllBrand.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/homepage', //主页
      component:HomePage,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/classify', //分类
      component:Classify,
      children:[
        {
          path:'/classify/classifyList',
          component:ClassifyList,
          meta: {
            showFooter: true
          }
        },
        {
          path:'/classify/brand',
          component:Brand,
          meta: {
            showFooter: true
          }
        },
        {
          path:'',
          redirect:'/classify/classifyList'
        }
      ],
      meta: {
        showFooter: true
      }
    },
    {
      path:'/shoppingcart', //购物车
      component:ShoppingCart,
      meta: {
        showFooter: false
      }
    },
    {
      path:'/myself', //我的E充页
      component:Myself,
      meta: {
        showFooter: false
      }
    },
    {
      path:'/',
      redirect:'/homepage'
    },
    {
      path:'/allbrand',
      component:AllBrand,
      meta: {
        showFooter: false
      }
    }
  ]
})
