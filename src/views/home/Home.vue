<template>
  <div class="home">
    <!-- Notice -->
    <div class="home-notice">
      <div class="home-notice-section section-first">这里是消息通知区域</div>
      <div class="home-notice-section section-second">这里是消息通知区域</div>
      <div class="home-notice-section section-third">这里是消息通知区域</div>
      <div class="home-notice-section section-fourth">这里是消息通知区域</div>
    </div>
    <!-- banner -->
    <SwiperComponent 
      :swiperOptions="homeBannerSwiperOptions"
      :bannerArr="bannerArr"
      :bannerSwiper="bannerSwiper"
      slideHeight="750px"
      class="home-banner"
    />
    <!-- content -->
    <div class="home-content">
      <div class="home-content-section">
        <div class="home-content-section-left">
          <small> introducing</small>
          <h2>Shortly About Us</h2>
        </div>
        <div class="home-content-section-right">
          <h2>The standard chunk of Lorem Ipsum used since the 1500s. </h2>
          <p class="subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <p class="desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
        </div>
      </div>
      <div class="home-content-ads"></div>
      <div class="home-content-section">
        <div class="home-content-section-left">
          <small> introducing</small>
          <h2>New Classified</h2>
        </div>
        <div class="home-content-section-right">
          <div class="home-content-section-right-side">
            <div class="home-content-section-right-side-item">1111</div>
            <div class="home-content-section-right-side-item">1111</div>
            <div class="home-content-section-right-side-item">1111</div>
            <div class="home-content-section-right-side-item">1111</div>
            <div class="home-content-section-right-side-item">1111</div>
            <div class="home-content-section-right-side-item">1111</div>
          </div>
          <div class="home-content-section-right-part">
            <div class="home-content-section-right-side-item">2222</div>
            <div class="home-content-section-right-side-item">2222</div>
            <div class="home-content-section-right-side-item">2222</div>
            <div class="home-content-section-right-side-item">2222</div>
            <div class="home-content-section-right-side-item">2222</div>
            <div class="home-content-section-right-side-item">2222</div>
          </div>
        </div>
      </div>
      <div class="home-content-info"></div>
      <div class="home-content-section">
        <div class="home-content-section-left">
          <small> introducing</small>
          <h2>Posted Classified</h2>
        </div>
        <div class="home-content-section-right">
          <div class="home-content-section-right-setting"></div>
          <div class="home-content-section-right-content">
            <div>list</div>
            <div>list</div>
            <div>list</div>
            <div>list</div>
            <div>list</div>
            <div>list</div>
            <div>list</div>
            <div>list</div>
            <div>list</div>
            <div>list</div>
            <div>list</div>
            <div>list</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperComponent from '@/components/share/SwiperComponent.vue'
export default {
  name: 'Name',
  data () {
    return {
      bannerArr: [{
        id: 1,
        name: 'web',
        bgUrl: require('../../assets/images/home/banner/01.jpeg'),
      },
      {
        id: 2,
        name: 'html',
        bgUrl:require('../../assets/images/home/banner/02.jpeg'),
      },
      {
        id: 3,
        name: 'css',
        bgUrl:require('../../assets/images/home/banner/03.jpeg'),
      },
      {
        id: 4,
        name: 'js',
        bgUrl:require('../../assets/images/home/banner/04.jpeg'),
      },
      {
        id: 5,
        name: 'es6',
        bgUrl:require('../../assets/images/home/banner/05.jpeg'),
      },
      {
        id: 6,
        name: 'vue',
        bgUrl:require('../../assets/images/home/banner/06.jpeg'),
      },
      {
        id: 7,
        name: 'axios',
        bgUrl:require('../../assets/images/home/banner/07.jpeg'),
      }],
      homeBannerSwiperOptions: {
        autoplay: true,
        loop: true,
        speed: 1000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      },
      bannerSwiper: 'homeBannerSwiper'
    };
  },

  components: {
    SwiperComponent
  },

  computed: {},

  created() {},

  mounted() {},

  methods: {}
}

</script>
<style lang='less'>
.home {
  width: 100%;
  &-notice {
    width: 100%;
    height: 24px;
    position: relative;
    transform-style: preserve-3d;
    animation: homeNotice 10s linear infinite;
    &-section {
      width: 100%;
      height: 24px;
      line-height: 24px;
      position: absolute;
      top: 0;
      left: 0;
      text-align: center;
    }
    .section-first {
      background-color: rgb(16, 233, 211);
      color: #fff;
      z-index: 1;
      transform: translate3d(0, 0, 12px);
    }
    .section-second {
      background-color: rgb(177, 20, 216);
      color: #fff;
      transform: translate3d(0, 12px, 0) rotateX(-90deg);
    }
    .section-third {
      background-color: rgb(161, 211, 25);
      color: #fff;
      transform: translate3d(0, -12px, 0) rotateX(90deg);
    }
    .section-fourth {
      background-color: rgb(233, 196, 30);
      color: #fff;
      transform: translate3d(0, 0, -12px) rotateX(180deg);
    }
  }
  &-content {
    width: 100%;
    background-color: #f1f1f1;
    &-section {
      width: 1000px;
      box-sizing: border-box;
      margin: 0 auto;
      background-color: #fff;
      position: relative;
      padding: 150px;
      &-left {
        background-color: #f3db28;
        position: absolute;
        top: 100px;
        left: -240px;
        padding: 50px;
        width: 200px;
        text-align: right;
        small {
          font-size: 16px;
          display: block;
          text-align: right;
          font-weight: 100;
          line-height: 1.5;
          margin-bottom: 10px;
          &::before {
            content: '';
            position: absolute;
            top: 20px;
            right: 10px;
            width: 70px;
            height: 5px;
            background-color: #fff;
          }
        }
        h2 {
          font-weight: 100;
          font-size: 55px;
          line-height: 1.5;
        }
      }
      &-right {
        h2 {
          line-height: 56px;
          font-size: 40px;
          position: relative;
          text-transform: uppercase;
          font-family: 'Oswald', sans-serif;
          font-weight: 100;
          &::after {
            content: '';
            display: block;
            width: 100px;
            height: 5px;
            background-color: #dddddd;
            margin: 70px 0;
          }
        }
        .subtitle {
          font: 100 22px/35px 'PT Sans', sans-serif;
          line-height: 39px;
          letter-spacing: .5px;
          color: #808080;
        }
        .desc {
          margin: 50px 0 0;
          font-style: normal;
          font-weight: 100;
          line-height: 30px;
          font-size: 16px;
          color: #a8a8a8;
          letter-spacing: 1px;
        }
      }
    }
    &-ads {
      width: 100%;
      height: 200px;
      background-color: #292a2c;
    }
    &-info {
      width: 100%;
      height: 100px;
      background-color: #e29e0c;
    }
  }
}

 @keyframes homeNotice {
  0% {
     transform: rotateX(0deg);
   }
  25% {
     transform: rotateX(-90deg);
   }
  50% {
     transform: rotateX(-180deg);
   }
  75% {
     transform: rotateX(-270deg);
   }
  100% {
     transform: rotateX(-360deg);
   }
 }
</style>