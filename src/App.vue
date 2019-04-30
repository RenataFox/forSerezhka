<template>
  <div id="app">
    <div class="main-grid">
      <Header></Header>
      <aside class="aside1">Sidebar</aside>
      <div class="content">
        <router-view></router-view>
      </div>
      <aside class="aside2">Sidebar</aside>
      <Footer></Footer>
    </div>

    <!--<img src="./assets/advertising.jpg">-->
  </div>
</template>

<script>
import "./css/style.less";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "app",
  components: { Header,Footer },
  data() {
    return {
      
    };
  }
};
</script>
<style lang="less">

</style>



