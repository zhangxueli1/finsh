<template>
  <footer class="footer_guide border-1px">
    <div class="guide_item" @click="goto('/shouye')" :class="{on: isCurrent('/shouye')}">
      <span class="item_icon">
        <i class="iconfont icon-wxbmingxingdianpu"></i>
      </span>
      <span>首页</span>
    </div>
    <div class="guide_item" @click="goto('/classify')" :class="{on: isCurrent('/classify')}">
      <span class="item_icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span>分类</span>
    </div>
    <div class="guide_item" @click="goto('/car')" :class="{on: isCurrent('/car')}">
      <span class="item_icon">
        <i class="iconfont icon-tubiaolunkuo-"></i>
      </span>
      <span>购物车</span>
    </div>
    <div class="guide_item" @click="goto('/profile')" :class="{on: isCurrent('/profile')}">
      <span class="item_icon">
        <i class="iconfont icon-keji-"></i>
      </span>
      <span>我的E宠</span>
    </div>
  </footer>
</template>
<script>
  export default{
    methods: {
      goto(path) {
        this.$router.replace(path)
      },
      isCurrent(path) {
        // console.log(this.$route.path)
        return this.$route.path === path
      }
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0px
    background-color #fff
    width 100%
    height 68px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin-bottom  -25px
      height 45px
      /*line-height 45px*/
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        .iconfont
          font-size 30px

</style>
