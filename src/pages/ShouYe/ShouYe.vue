<template>
<div class="index-box">
  <IndexHeader/>
  <Allcontent/>
</div>
</template>
<script>
  import IndexHeader from '../../components/IndexHeader/IndexHeader.vue'
  import Allcontent from '../../components/Allcontent/Allcontent.vue'
  import {mapState} from 'vuex'
  export default{
  components:{
    IndexHeader,
    Allcontent
  },
    created(){
      this.$store.dispatch('getShouye')
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
