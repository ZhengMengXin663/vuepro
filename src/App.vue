<template>
  <div>
    <router-view/>
    <footNavigation/>
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
</style>
