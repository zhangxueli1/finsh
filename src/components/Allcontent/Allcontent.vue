<template>
  <div class="allcontent">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./images/slider1.jpg">
        </div>
        <div class="swiper-slide">
          <img src="./images/slider2.jpg">
        </div>
        <div class="swiper-slide">
          <img src="./images/slider3.jpg">
        </div>
        <div class="swiper-slide">
          <img src="./images/slider4.jpg">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'

export default{
  mounted(){
    var mySwiper = new Swiper ('.swiper-container', {
      loop: true,
    // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      }
  })
}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.allcontent
    max-width 640px
    margin 0px
    padding 0px
   .swiper-container
     .swiper-wrapper
       .swiper-slide
         width 375px
         >img
           width 100%


</style>
