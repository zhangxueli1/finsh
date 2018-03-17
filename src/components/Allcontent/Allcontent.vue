<template>
  <div class="allcontent" v-if="shouye.dog_banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in shouye.dog_banner" :key="index">
          <img :src="item">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="bigimg">
      <div class="bigdog">
        <img :src="shouye.dog_img">
      </div>
    </div>
    <div class="small-list">
      <ul>
        <li v-for="(item,index) in shouye.menu_list" :key="index">
        <a>
          <img :src="item">
        </a>
      </li>
      </ul>
    </div>
    <div class="miao-sha">
     <div>
        <img :src="shouye.miaosha">
      </div>
    </div>
    <div class="surprise">
      <div class="top">
         <div class="top_left">
           <img src="./images/feng.png">
         </div>
         <div class="top_right">
           <span>下一场开始</span>
           <div class="timer">
             <span>21</span>
             <span>:</span>
             <span>00</span>
           </div>
           <div class="add">
             <span>更多</span>
             <i class="iconfont icon-gengduo"></i>
           </div>
         </div>
      </div>
      <div class="swiper-container2">
        <ul class="swiper-wrapper">
          <li class="swiper-slide">
          <a>
            <img src="./images/milk1.jpg">
            <p>￥10.30</p>
            <p>省92.70</p>
          </a>
          </li>
          <li class="swiper-slide">
            <a>
              <img src="./images/milk2.jpg">
              <p>￥10.30</p>
              <p>省92.70</p>
            </a>
          </li>
          <li class="swiper-slide">
            <a>
              <img src="./images/milk3.jpg">
              <p>￥10.30</p>
              <p>省92.70</p>
            </a>
          </li>
          <li class="swiper-slide">
            <a>
              <img src="./images/milk4.jpg">
              <p>￥10.30</p>
              <p>省92.70</p>
            </a>
          </li>
          <li class="swiper-slide">
            <a>
              <img src="./images/milk5.jpg">
              <p>￥10.30</p>
              <p>省92.70</p>
            </a>
          </li>
          <li class="swiper-slide">
            <a>
              <img src="./images/milk6.jpg">
              <p>￥10.30</p>
              <p>省92.70</p>
            </a>
          </li>
          <li class="swiper-slide">
            <a>
              <img src="./images/milk7.jpg">
              <p>￥10.30</p>
              <p>省92.70</p>
            </a>
          </li>
          <li class="swiper-slide">
            <a>
              <img src="./images/milk8.jpg">
              <p>￥10.30</p>
              <p>省92.70</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="ping-pan">
      <img :src="shouye.brand_power">
    </div>
    <div class="dong-tu">
      <a>
        <img :src="shouye.gif">
      </a>
    </div>
    <div class="vip">
      <img :src="shouye.vip">
    </div>
    <div class="ling-yuan">
      <div class="left">
        <a v-for="(i) in list.left">
          <img :src="i">
        </a>
      </div>
      <div class="right">
        <a v-for="(i) in list.right">
          <img :src="i">
        </a>
      </div>
    </div>
    <div class="dapai">
      <img :src="shouye.dapaituan">
    </div>
    <div class="tejia">
      <a>
        <img src="./images/tejia.jpg">
      </a>
    </div>
    <div class="haohuo">
      <img :src="shouye.haohuo">
    </div>
    <div class="list">
      <div class="one" v-for="(items) in goods">
        <div :class="items">
          <div class="left">
            <a>
              <img src="./images/list/1.jpg">
            </a>
            <a>
              <img src="./images/list/2.jpg">
            </a>
            <a>
              <img src="./images/list/3.jpg">
            </a>
            <a>
              <img src="./images/list/6.jpg">
            </a>
          </div>
          <div class="right">
            <a>
              <img src="./images/list/first.jpg">
            </a>
            <a>
              <img src="./images/list/5.jpg">
            </a>
            <a>
              <img src="./images/list/4.jpg">
            </a>
            <a>
              <img src="./images/list/7.jpg">
            </a>
          </div>
        </div>
      </div>
      <div class="two">
        <div>
          <div class="left">
            <a>
              <img src="./images/list/8.jpg">
            </a>
            <a>
              <img src="./images/list/9.jpg">
            </a>
            <a>
              <img src="./images/list/10.jpg">
            </a>
            <a>
              <img src="./images/list/14.jpg">
            </a>
          </div>
          <div class="right">
            <a>
              <img src="./images/list/two.jpg">
            </a>
            <a>
              <img src="./images/list/11.jpg">
            </a>
            <a>
              <img src="./images/list/12.jpg">
            </a>
            <a>
              <img src="./images/list/13.jpg">
            </a>
          </div>
        </div>
      </div>
      <div class="three">
        <div>
          <div class="left">
            <a>
              <img src="./images/list/15.jpg">
            </a>
            <a>
              <img src="./images/list/16.jpg">
            </a>
            <a>
              <img src="./images/list/17.jpg">
            </a>
            <a>
              <img src="./images/list/20.jpg">
            </a>
          </div>
          <div class="right">
            <a>
              <img src="./images/list/three.jpg">
            </a>
            <a>
              <img src="./images/list/19.jpg">
            </a>
            <a>
              <img src="./images/list/18.jpg">
            </a>
            <a>
              <img src="./images/list/21.jpg">
            </a>
          </div>
        </div>
      </div>
      <div class="fore">
        <div>
          <div class="left">
            <a>
              <img src="./images/list/22.jpg">
            </a>
            <a>
              <img src="./images/list/23.jpg">
            </a>
            <a>
              <img src="./images/list/24.jpg">
            </a>
            <a>
              <img src="./images/list/27.jpg">
            </a>
          </div>
          <div class="right">
            <a>
              <img src="./images/list/fore.jpg">
            </a>
            <a>
              <img src="./images/list/25.jpg">
            </a>
            <a>
              <img src="./images/list/26.jpg">
            </a>
            <a>
              <img src="./images/list/28.jpg">
            </a>
          </div>
        </div>
      </div>
      <div class="five">
        <div>
          <div class="left">
            <a>
              <img src="./images/list/29.jpg">
            </a>
            <a>
              <img src="./images/list/30.jpg">
            </a>
            <a>
              <img src="./images/list/31.jpg">
            </a>
            <a>
              <img src="./images/list/36.jpg">
            </a>
          </div>
          <div class="right">
            <a>
              <img src="./images/list/five.jpg">
            </a>
            <a>
              <img src="./images/list/32.jpg">
            </a>
            <a>
              <img src="./images/list/33.jpg">
            </a>
            <a>
              <img src="./images/list/35.jpg">
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="zuican">
      <img src="./images/list/zuican.jpg">
    </div>
    <div class="jingtai">
      <img src="./images/list/jingtai.jpg">
    </div>
    <div class="tebie">
      <img src="./images/list/tebie.jpg">
    </div>
    <div class="chaoping">
      <ul>
        <li class="left">
          <a>
            <img src="./images/list/bigchaoping.jpg">
          </a>
        </li>
        <li class="right">
          <a class="top">
            <img src="./images/list/smallchaoping.jpg"/>
          </a>
          <a class="btu">
            <img src="./images/list/smallchaoping2.jpg"/>
          </a>
        </li>
      </ul>
    </div>
    <div class="tese">
      <img src="./images/list/tese.jpg">
    </div>
    <div class="tese-list">
      <div class="left">
        <a>
          <img src="./images/list/tese1.jpg">
        </a>
        <a>
          <img src="./images/list/tese2.jpg">
        </a>
        <a>
          <img src="./images/list/tese3.jpg">
        </a>
      </div>
      <div class="right">
        <a>
          <img src="./images/list/tese4.jpg">
        </a>
        <a>
          <img src="./images/list/tese5.jpg">
        </a>
        <a>
          <img src="./images/list/tese6.jpg">
        </a>
      </div>
    </div>
    <div class="footer">
      <div>
        <span class="bt" title="触屏版">触屏版</span>
        <span>
        <a>手机客户端</a>
      </span>
        <span>
        <a>关于我们</a>
      </span>
        <span>
        <a>联系我们</a>
      </span>
        <div style="text-align:center;margin:0 10px 0 10px; padding-bottom:25px; font-size:12px">© wap.epet.com 版权：重庆易宠科技有限公司</div>
      </div>

    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import {mapState} from 'vuex'

export default{
  mounted(){
    this.$store.dispatch('getShouye',()=>{
      this.$nextTick(()=>{
        new Swiper ('.swiper-container', {
          loop: true,
          autoplay:true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          }
      })
    })

  })

    var swiper = new Swiper('.swiper-container2', {
      slidesPerView: 3.5,
      spaceBetween: 20,
      pagination: {
        clickable: true,
      },
    });

  },
  computed: {
    ...mapState(['shouye']),
    list(){
      const left = []
      const right = []
      if(this.shouye.vip_services){
        this.shouye.vip_services.forEach((item,index)=>{
          if(index<2){
            left.push(item)
          }else{
            right.push(item)
          }
        })
        return {left,right}
      }

    },
    goods(){
      const arrBig = []
      let arrSmall = null
      if(this.shouye.haohuo_list){
        this.shouye.haohuo_list.forEach((item,index) => {
          if(!arrSmall){
            arrSmall = []
            arrBig.push(arrSmall)
          }if(arrSmall.length<8){
            arrSmall.push(item)
          }if(arrSmall.length===8){
            arrSmall = null
          }

        })
        return arrBig
      }
      },
    items(){
      const arr = []
      let arrSmall = null
      if(this.shouye.haohuo_list){
        this.shouye.haohuo_list.forEach((item,index) => {
          if(!arrSmall){
            arrSmall = []
            arrBig.push(arrSmall)
          }if(arrSmall.length<4){
            arrSmall.push(item)
          }if(arrSmall.length==4){
            arrSmall = null
          }

        })
        return arr
      }
    }


  },
  watch:{
    shouye(){
      this.$nextTick(() =>{

      })
    }
  }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.allcontent
    height 8000px
    max-width 640px
    margin 0px
    padding 0px
    overflow hidden
    .swiper-container
     width 100%
     .swiper-wrapper
       width 100%
       .swiper-slide
         width 375px
         >img
           display block
           width 100%


    .bigimg
      width 100%
      .bigdog
        >img
         display: block
         width 100%
         height 270.5px
    .small-list
      width 100%
      >ul
        width 100%
        overflow hidden
        list-style none
        >li
          width 20%
          float left
          >a
           >img
            width 100%
            display block
            font-size 0
    .miao-sha
       width 100%
       >div
         width 100%
         >img
           width 100%
           display block

    .surprise
      width 100%
      .top
        width 100%
        display flex
        margin-top 10px
        height 15px
        .top_left
          width 35%
          >img
            width 85px
            display block

        .top_right
           width 65%
           display flex
           line-height 15px
           >span
             font-size 15px
             margin-right 10px
           .timer
             font-size 13px
             margin-left 10px
             >*:nth-child(1),:nth-child(3)
                border solid 1px grey
           .add
             margin-left 55px
             >span
              font-size 13px
              color grey
             >i
              font-size 12px
      .swiper-container2
        width 100%
        overflow hidden
        margin-top 15px
        margin-bottom: 15px;
        .swiper-wrapper
          width 100%
          height 100%
          list-style none
          .swiper-slide
            width 85px
            height 130px
            >a
              width 100%
              height 100%
              >img
               width 85px
               height 85px
               display block
              >p
                font-size 15px
    .ping-pan
      width 100%
      >img
        width 100%
        display block
    .dong-tu
      width 100%
      >a
        width 100%
        >img
          width 100%
          display block
    .vip
      width 100%
      >img
        width 100%
        display block
    .ling-yuan
      width 100%
      .left
        width 50%
        float left
        >a
          width 100%
          >img
            width 100%
            display block
      .right
        width 50%
        float right
        >a
          width 100%
          >img
            width 100%
            display block
    .dapai
       width 100%
       >img
         width 100%
         display block
    .tejia
      width 100%
      >a
        width 100%
        >img
          width 100%
          display block
    .haohuo
       width 100%
       >img
        width 100%
        display block
    .list
      width 100%
      .one
        width 100%
        >div
          width 100%
          .left
            width 50%
            float left
            >a
              list-style none
              >img
                width 100%
                display block
          .right
            width 50%
            float right
            >a
              list-style none
              >img
                width 100%
                display block
      .two
        width 100%
        >div
          width 100%
          .left
            width 50%
            float left
            >a
              list-style none
              >img
                width 100%
                display block
          .right
            width 50%
            float right
            >a
              list-style none
              >img
                width 100%
                display block
      .three
        width 100%
        >div
          width 100%
          .left
            width 50%
            float left
            >a
              list-style none
              >img
                width 100%
                display block
          .right
            width 50%
            float right
            >a
              list-style none
              >img
                width 100%
                display block
      .fore
        width 100%
        >div
          width 100%
          .left
            width 50%
            float left
            >a
              list-style none
              >img
                width 100%
                display block
          .right
            width 50%
            float right
            >a
              list-style none
              >img
                width 100%
                display block
      .five
        width 100%
        >div
          width 100%
          .left
            width 50%
            float left
            >a
              list-style none
              >img
                width 100%
                display block
          .right
            width 50%
            float right
            >a
              list-style none
              >img
                width 100%
                display block
    .zuican
      width 100%
      >img
        width 100%
        display block
    .jingtai
      width 100%
      >img
        width 100%
        display block
    .tebie
      width 100%
      >img
        width 100%
        display block
    .chaoping
      width 100%
      >ul
        width:100%;
        list-style none
        .left
           float left
           width 50%
           >a
             width 100%
             >img
               width 100%
               display block
        .right
          float right
          width 50%
          margin-top: -2px;
          .top
            >img
              width 100%
              display block
          .btu
            >img
              width 100%
              display block
    .tese
      width 100%
      >img
        width 100%
        display block
    .tese-list
      width 100%
      .left
        width 50%
        float left
        >a
          width 100%
          >img
            width 100%
            display block
      .right
        width 50%
        float right
        >a
          width 100%
          >img
            width 100%
            display block
    .footer
      width 100%
      >div
        font-size 14px
        .bt
           color red
           padding-left: 60px
        >span
          padding-left 10px
</style>

