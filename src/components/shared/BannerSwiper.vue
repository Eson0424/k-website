<template>
  <div class="banner-swiper">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div
          v-for="(banner, index) of banners"
          :key="index"
          class="swiper-slide"
        >
          <div
            :style="{ backgroundImage: `url(${banner})`}"
            class="banner-swiper-slide-item swiper-lazy"
          >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BannerSwiper',
  props: {
    banners: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        initialSlide: 0,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        watchSlidesVisibility: true,
      },
      showArrowButton: false,
    }
  },
}
</script>

<style lang="stylus">
@require '~@/stylus/shared/index'

.banner-swiper
  position: relative
  display: flex
  justify-content: space-between
  height: 100%

  & .swiper-container
    width: 100%
    height: 100%

  & .swiper-slide
    width: 100%

  &-slide-item
    width: 100%
    height: 100%
    bg-image-center()


</style>
