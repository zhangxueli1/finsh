<template>
  <div class="total">
    <div class="totalheader">
      <header>
        <div>
          <i class="iconfont icon-back top" @click="goBack"></i>
          <span class="center">全部商品</span>
          <i class="iconfont icon-zhankai btu" @click="isShow"></i>
        </div>
      </header>
      <div class="close" v-show="Show">
        <a>
          <i class="iconfont icon-shouye"></i>
          <p>首页</p>
        </a>
        <a>
          <i class="iconfont icon-mulu"></i>
          <p>商品分类</p>
        </a>
        <a>
          <i class="iconfont icon-tubiaolunkuo-"></i>
          <p>购物车</p>
        </a>
        <a>
          <i class="iconfont icon-keji-"></i>
          <p>我的E宠</p>
        </a>
      </div>
    </div>
    <div class="allBrands">
      <div class="left">
        <div class="menu">
          <span v-for="(item,index) in total" :key="index" :class="{on:currindex===index}"
                @click="switchColor(index)">
            {{item.order}}
          </span>
        </div>
      </div>
      <div class="content">
          <div class="wrap" v-for="(items,index) in total" :key="index">
            <h2>{{items.order}}</h2>
            <div class="type" v-for="(item,index) in items.list" :key="index">
                <a>
                  <div class="logo">
                    <img :src="item.logo"/>
                  </div>
                  <div class="list">
                    <p class="top">{{item.name}}</p>
                    <p class="btu">{{item.address}}</p>
                  </div>
                </a>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default{
    data(){
      return{
        Show:false,
        currindex:1,
        scrollY:0,
        tops:[]
      }
    },
    mounted(){
     this.$store.dispatch('getTotalBrand',() =>{
       this.$nextTick(() =>{
         // 初始化滚动
         this._initScroll()
         // 初始化tops
         this._initTops()
       })
     })
   },
    computed:{
      ...mapState(['total']),

    },
    methods:{
      _initScroll () {
        // 左侧分类列表的BScroll
        new BScroll('.content', {
          click: true //响应点击
        })
      },
      isShow(){
           this.Show = !this.Show
      },
      goBack(){
        this.$router.back()
      },
      switchColor(index){
        this.currindex=index
      },
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.total
  .totalheader
    width 100%
    >header
      width 100%
      text-align center
      >div
        display flex
        justify-content space-between
        padding 5px 10px
        background-color white
        .top
          font-size 25px
          color: grey
        .center
          font-size 25px
          color grey
        .btu
           font-size 18px
           color grey
           margin-top 5px


    .close
      width 100%
      display flex
      justify-content space-around
      >a
        text-align center
        >i
          font-size 30px
        >p
          font-size 15px
          color #666
          margin-top -10px
  .allBrands
    width 100%
    .left
      .menu
       display flex
       flex-direction column
       justify-content center
       position fixed
       bottom 0px
       top 0px
       right 0px
       >span
         font-size 12px
         &.on
           color red
           background-color gainsboro
    .content
      width 100%
      >div
        >h2
          font-size 15px

        >div
          border-bottom 1px solid #f3f4f5
          padding 10px
          background-color white
          >a
           background-color white
           display flex
           flex-direction row
           .logo
             border 1px solid #f3f4f5
             >img
                height 40px
                width 88px

           .list
             margin-left 16px
             .top
               font-size 14px
               color black
             .btu
                font-size 12px
</style>
