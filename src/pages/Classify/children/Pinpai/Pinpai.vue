<template>
  <div class="pinpai" v-if="pinpai.length">
    <div class="one" v-for="(item,index) in pinpai" :key="index">
      <div class="top">
        <span>--{{item.title}}--</span>
      </div>
      <div class="list">
        <ul>
          <li v-for="(img,index) in item.list" :key="index">
            <a>
              <img :src="img.logo">
            </a>
            <p class="big">{{img.name}}</p>
            <p class="small">{{img.address}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default{
    computed: {
      ...mapState(['pinpai']),
    },
    mounted(){
      this.$store.dispatch('getPinpai')
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
 .pinpai
  margin-top 40px
  >div
    .top
      padding-top 20px
      text-align center
      >span
        font-size 12px
        color #7e8c8d
    .list
      width 100%
      >ul
        width 100%
        display flex
        flex-wrap wrap
        margin-left 17px
        >li
          text-align: center;
          margin-top: 20px;
          width: 30%;
          >a
             width 100%
             display block
             text-align center
             border: 1px solid #e2e2e2;
             >img
               width 100%
               padding 5px 5px
               height 40px
               width 80px

          .big
              font-size 12px
          .small
             font-size 10px
             color grey
</style>
