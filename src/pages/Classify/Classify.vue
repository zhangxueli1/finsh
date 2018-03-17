<template>
  <div class="classify">
    <header>
      <div class="left">
        <a>
          <router-link tag="span" to="/classify/fenlei">分类</router-link>
        </a>
      </div>
      <div class="right">
        <a>
          <router-link tag="span" to="/classify/pinpai">品牌</router-link>
        </a>
      </div>
      <div class="search">
        <i class="iconfont icon-search "></i>
      </div>
    </header>
    <router-view/>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import 'swiper/dist/css/swiper.css'
export default{
  computed: {
    ...mapState(['fenlei']),
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .classify
    width 100%
    background-color white
    >header
      width 100%
      display flex
      border-bottom solid 1px #cbcbcb
      position fixed
      left 0px
      right 0px
      top  0
      height 40px
      line-height 40px
      padding 0 15px
      z-index 11
      background-color white
      .left
        width 50%
        text-align center
        margin-left 80px
        >a
          width 100%
          >span
            font-size 14px
            font-weight 700
      .right
        width 50%
        text-align center
        margin-right 80px
        >a
          width 100%
          >span
            font-size 14px
            font-weight 700
      .search
        margin-right 15px
        >i
          margin-right 10px
</style>
