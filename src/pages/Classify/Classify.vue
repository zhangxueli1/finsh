<template>
  <div class="classify">
    <header>
      <div class="left">
        <a>
          <span>分类</span>
        </a>
      </div>
      <div class="right">
        <a>
          <span>品牌</span>
        </a>
      </div>
      <div class="search">
        <i class="iconfont icon-search "></i>
      </div>
    </header>
    <div class="list">
      <div>
        <div class="left">
          <ul>
            <li>为您推荐</li>
            <li>狗狗主粮</li>
            <li>狗狗主粮</li>
            <li>狗狗主粮</li>
            <li>狗狗主粮</li>
            <li>狗狗主粮</li>
            <li>狗狗主粮</li>
            <li>狗狗主粮</li>
            <li>狗狗主粮</li>
            <li>狗狗主粮</li>
            <li>狗狗主粮</li>
            <li>狗狗主粮</li>
            <li>狗狗主粮</li>
          </ul>
        </div>
        <div class="right"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default{

}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.classify
  width 100%
  background-color gainsboro
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
  .list
    margin-top 40px
    >div
      .left
        background-color white
        overflow-y scroll
        >ul
          list-style none
          float left
          border-right 5px solid #f3f4f5
          >li
            padding 15px 0
            text-align center
            width 70px
            height 50px
            border-bottom solid 1px #f3f4f5
            font-size 13px
            line-height 50px

</style>
