<template>
  <div class="total">
    <div class="all">
      <div>
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

          <div class="content" ref="allList">
            <div>
              <div  class="wrap" v-for="(items,index) in total" :key="index">
                <h2>{{items.order}}</h2>
                <div  class="type" v-for="(item,index) in items.list" :key="index">
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
      </div>
    </div>
    <div class="menu">
          <span v-for="(item,index) in total" :key="index" :class="{on:index===currindex}"
                @click="selectCurrent(index)">
            {{item.order}}
          </span>
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
      currindex(){
        const {tops,scrollY} = this
        return tops.findIndex((top,index)=>scrollY>=top&&scrollY<tops[index+1])
      }


    },
    methods:{
      _initScroll () {
        // 左侧分类列表的BScroll
        this.allgoods=new BScroll('.all', {
          probeType:3,
          click: true //响应点击
        })
        this.allgoods.on('scroll', (pos) => {
//          console.log(pos.y)
          // 保存y
          this.scrollY = Math.abs(pos.y)
        })
      },
      isShow(){
           this.Show = !this.Show
      },
      goBack(){
        this.$router.back()
      },
      //初始化高度
      _initTops(){
        const tops = []
        let top = 0
        //计算各个Top并将其放到tops中
        tops.push(top)
        const lis = this.$refs.allList.getElementsByClassName('wrap')
        Array.prototype.slice.call(lis).forEach((div, index) => {
          top += div.clientHeight
          tops.push(top)
        })
        // 保存tops
        this.tops = tops
//        console.log(this.tops)
      },
      // 选择当前分类
      selectCurrent (index) {
//        console.log('selectCurrent()')
        // 得到滚动目标坐标
        const top = this.tops[index]
        // 更新目标scrollY值
        this.scrollY = top
        // 平滑滚动到指定位置
        this.allgoods.scrollTo(0, -top-50, 300)
      },
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.total
  height 100%
  width 100%
  .all
    width 100%
    height 667px
    overflow hidden
    position absolute
    top 0
    left 0px
    bottom 0px
    right 0px
    div
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
        .content
          width 100%
          height 100%
          >div
            width 100%
            height 100
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
</style>
