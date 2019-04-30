<template>
  <div>
      <div class="center p-3 size-20">Главная страница</div>
      <div class="message-timer m-10 size-24">С начала разработки прошло</div>
      <Timer deadline="Feb 28, 2019 09:00:00"></Timer>   
  </div>  

</template>

<script>
import Timer from '../components/Timer'
export default {
  components:{ Timer }
}
</script>

<style lang="less">
    @import '../css/settings.less';
    .message-timer{
        color: @color1;
        text-align: center;
    }

</style>