<template>
  <div class="fenlei" v-if="fenlei.length">
    <div class="list" >
      <div>
        <div class="left wrapper">
          <ul class="content" v-if="fenlei[0]">
            <li class="type" :class="{on:currindex===index}"
                v-for="(item,index) in fenlei[0]" @click="switchColor(index)" :key="index">{{item.name}}</li>
          </ul>
        </div>
        <div class="right" v-if="fenlei[1]" >
            <div class="top" v-if="fenlei[1]">
              <a>
                <span>{{fenlei[1][currindex][0].title}}</span>
                <img src="../images/cate_right_img.png">
              </a>
              <div class="goods-wrapper">
                <ul ref="goods" v-if="fenlei[1][currindex][0]">
                  <li class="good"  v-for="(item,index) in fenlei[1][currindex][0].list" :key="index">
                    <a>
                      <img :src="item.photo">
                      <span>{{item.name}}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="btu" v-if="fenlei[1][currindex][1]">
              <a>{{fenlei[1][currindex][1].title}}</a>
              <ul v-if="fenlei[1][currindex][1]">
                <li v-for="(item,index) in fenlei[1][currindex][1].list" :key="index">
                  <a>
                    <img :src="item.logo">
                    <span>{{item.name}}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import 'swiper/dist/css/swiper.css'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
 export default{
    data(){
      return{
        currindex:1,
      }
    },

   computed: {
     ...mapState(['fenlei']),
   },
   mounted(){
     this.$store.dispatch('getFenlei',() => {// goods更新了, 界面还没有更新
       this.$nextTick(() => {
         // 初始化滚动
         this._initScroll()
       })
     })
   },
   methods: {
     _initScroll () {
       // 左侧分类列表的BScroll
       new BScroll('.wrapper', {
         click: true //响应点击
       })
     },
     switchColor(index){
       this.currindex=index
     }

   }

 }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .fenlei
    width 100%
    background-color white
    .list
      >div
        .left
          background-color white
          position fixed
          top 46px
          bottom 46px
          overflow hidden
          left 0
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
              &.on
                color red
                background-color gainsboro
        .right
          margin-top 46px
          margin-left 90px
          .top
            width 100%
            border-bottom 1px solid gainsboro
            >a
              display flex
              justify-content space-between
              >span
                color #999
                font-size 12px
                margin-left 10px
              >img
                display block
                height: 10px;
                margin-top: 5px;
                margin-right 10px
            >div
              padding 5px
              >ul
                width 100%
                display flex
                flex-wrap wrap
                >li
                  /*width 33.333%*/
                  padding 5px 0
                  >a
                    display block
                    text-align center
                    >img
                      display block
                      width 86px
                    >span
                      font-size 12px
                      color black

          .btu
            padding 5px
            >a
              font-size 12px
              color #7e8c8d
            >ul
               width 100%
               display flex
               flex-wrap wrap
               margin-top 8px
               >li
                 width 45%
                 margin-right 11px
                 >a
                   display block
                   text-align center
                   margin-bottom 10px
                   >img
                     width 109px
                     height 45px
                     border 1px solid #e2e2e2
                     padding 7px
                   >span
                     font-size 12px
                     color black

</style>
