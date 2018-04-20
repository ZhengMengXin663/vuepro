<template>
  <div class="abc">
    <router-view/>
    <footNavigation v-if="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FootNavigation from './components/FootNavigation/FootNavigation.vue'
export default {
  components:{
    FootNavigation
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  body
    background #fff
    .abc
      height 100%
</style>
