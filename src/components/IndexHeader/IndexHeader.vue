<template>
 <div class="indexheader">
   <div class="indexnav">
     <div class="headerbox">
       <div class="top">
         <div>
           <div class="left">
              <a>
                <span>狗狗</span>
                <span>|</span>
                <span>重庆</span>
                <span>
                <i class="iconfont icon-xiala"></i>
              </span>
              </a>
              <p  class="search">
                <a>
                  <input placeholder="搜索商品和品牌"/>
                  <i class="iconfont icon-search"></i>
                </a>
              </p>
              <a class="xiaoxix">
                <i class="iconfont icon-xiaoxi"></i>
              </a>
            </div>
           <div class="right">
             <ul>
               <li class="first">
               <router-link tag="span" to="/shouye">
                   <span>
                     <span>首页</span>
                   </span>
               </router-link>
             </li>
               <li class="first">
                 <router-link tag="span" to="/shouye/food">
                   <span>
                     <span>狗狗主粮</span>
                   </span>
                 </router-link>
               </li>
               <li class="first">
                 <router-link tag="span" to="/shouye/dress">
                   <span>
                     <span>服饰城</span>
                   </span>
                 </router-link>
               </li>
               <li class="first">
                 <router-link tag="span" to="/shouye/hospital">
                   <span>
                     <span>医疗保健</span>
                   </span>
                 </router-link>
               </li>
               <li class="first">
                 <router-link tag="span" to="/shouye/toy">
                   <span>
                     <span>零食玩具</span>
                   </span>
                 </router-link>
               </li>
             </ul>
             </div>
           </div>
         </div>
       </div>
       <div class="btn"></div>
     </div>
   </div>
</template>
<script>
  export default{

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.indexheader
  .indexnav
    height 86px
    .headerbox
      width:100%;
      /*padding 5px 10px*/
      .top
       padding 8px 0
       background-color #fff
       text-align center
       >div
         .left
           margin-right 20px
           font-size 14px
           display flex
           padding-bottom: 5px
           >a
            position relative
            color #333
            webkit-tap-highlight-color: rgba(0,0,0,0)
           .search
             position relative
             width: 233px;
             margin-right: 17px
             >a
              color #333
              webkit-tap-highlight-color: rgba(0,0,0,0)
              >input
                width 100%
                border 0
                height 25px
                background #e9e9e9
                border-radius 4px
                color #bcbcbc
                text-indent 10px
                font-size 13px
                outline 0
              >i
                width 11px
                height 11px
                position absolute
                right 10px
                bottom 13px
                margin auto 0
                background-position 0 0
                font-size 13px
           .xiaoxi
             display block
             width: 35px;
             height: 25px
             >i
               font-size: 19px;



         .right
           width 100%
           >ul
             width 100%
             display flex
             white-space nowrap
             list-style none
             >li
              flex 1
              color  #666
              >span
                &.router-link-active
                  color #02a774



</style>
