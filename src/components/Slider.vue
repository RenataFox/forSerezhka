<template>

 <hooper :settings="hooperSettings">
     <slide v-for="img in images" v-bind:key="img.index">
         <img width="100%" height=" 100%" :src="img" alt="slide"/>
     </slide>  
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
    <!--<hooper-pagination slot="hooper-addons"></hooper-pagination>-->
  </hooper>
</template>

<script>
import { 
    Hooper,
    Slide,
    Pagination as HooperPagination,
    Navigation as HooperNavigation
    } from 'hooper';    
import 'hooper/dist/hooper.css'
  export default {
    name: 'Slider',
    props: ['images'],
    components: {
      Hooper,
      Slide,
      HooperPagination,
      HooperNavigation
    },
    data () {
      return {
        hooperSettings: {
          infiniteScroll:true,
          autoPlay:true,
          playSpeed:4000,
          transition:500,
          itemsToShow: window.innerWidth>1200?8: window.innerWidth>760?4:2

        }
      }
    }
  }
</script>
<style lang="less">
    @import '../css/settings.less';
    .hooper-list{
        margin-bottom: 20px;
    }
    .hooper-indicator {
        margin: 0 20px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: @color2;
    }
    .hooper-indicator.is-active{
        background-color:@color1;
    }
    .hooper-pagination {
        bottom: -25px;
    }
    .hooper-navigation .icon{
        width: 40px;
        height:40px;
    }
    .hooper-navigation .icon path:nth-child(3){
        fill: @color1;
    }
    .hooper-slide{
        height: auto;
    }
    .hooper{
        height: auto;
    }
</style>






