<template>
  <div class="swiper">
    <swiper :ref="bannerSwiper" :options="swiperOptions">
      <swiper-slide 
        v-for="item in bannerArr"
        :key="item.id"
        :style="`background-image:url(${item.bgUrl}); height: ${slideHeight};`"
      >
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'SwiperComponent',
  props: {
    bannerArr: { // 遍历的数据
      type: Array,
      required: true,
      default: function() {
        return [];
      }
    },
    slideHeight: { // item的height
      type: String,
      required: true,
      default: '750px'
    },
    bannerSwiper: { //swiper的名称
      type: String,
      required: true,
      default: '',
    },
    swiperOptions: { // swiper配置属性
      type: Object,
      default: function() {
        return {
          autoplay: true,
          loop: true,
          speed: 300,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          }
        }
      }
    }
  },
}

</script>
<style lang='less'>
.swiper-slide {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.swiper-pagination-bullet {
  background-color: #fff;
}
</style>