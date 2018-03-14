<template>
  <div id="app">
   <shou-ye/>
  </div>
</template>

<script>
//  import XiazaiApp from './components/XiazaiApp/XiazaiApp.vue'
  import ShouYe from './pages/ShouYe/ShouYe.vue'
export default {
components:{
  ShouYe,
}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  *
    margin 0
    padding 0
   body
    line-height 1.6
    font-family 'Microsoft Yahei',-apple-system-font,Helvetica Neue,sans-serif;

</style>
