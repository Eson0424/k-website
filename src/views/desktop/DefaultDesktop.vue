<template>
  <div class="default-desktop">
    <Header></Header>
    <div class="main" :style="setClientHeight">
      <BannerSwiper
        :banners="banners"
      />
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import BannerSwiper from '@/components/shared/BannerSwiper.vue'

export default {
  name: 'DefaultDesktop',
  components: {
    Header,
    Footer, 
    BannerSwiper
  },
  data() {
    return {
      clientHeight: document.documentElement.clientHeight,
      banners: [
        require('../../assets/images/bg_1.jpg'),
        require('../../assets/images/bg_2.jpg'),
        require('../../assets/images/bg_3.jpg')
      ],
    }
  },
  computed: {
    setClientHeight() {
      return {
        height: this.clientHeight + 'px'
      }
    }
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        window.fullHeight = document.documentElement.clientHeight;
        // window.fullWidth = document.documentElement.clientWidth;
        this.clientHeight = window.fullHeight;  // 高
        // this.windowWidth = window.fullWidth; // 宽
      })()
    };
  },
  methods: {

  },
  
}
</script>
<style lang="stylus">
@require '~@/stylus/common'
  .default-desktop
    position relative

    .header
      position absolute
      color $w
      top 0
      z-index 2

  .main
    width 100%
    height 100%
</style>