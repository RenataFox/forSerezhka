<template>
      <header class="header">
        <nav class="m-10">
          <router-link class="p-2" to="/">Главная</router-link>
          <router-link class="p-2" to="/formula">Формулы</router-link>
        </nav>
        <div class="slider">
          <Slider :images="images"></Slider>
        </div>
      </header>   
</template>

<script>
import Slider from "./Slider";
export default {
  components: { Slider },
  data() {
    return {
      images: [
        "/dist/img/advertising.jpg",
        "/dist/img/advertising1.jpg",
        "/dist/img/advertising.jpg",
        "/dist/img/advertising1.jpg",
        "/dist/img/advertising.jpg",
        "/dist/img/advertising1.jpg",
        "/dist/img/advertising.jpg",
        "/dist/img/advertising1.jpg"
      ]
    };
  }
};
</script>

<style lang="less">

</style>