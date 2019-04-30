<template>
  <footer class="footer" id="footer">
    <div class="slider">
      <Slider :images="images"></Slider>
    </div>
  </footer>
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