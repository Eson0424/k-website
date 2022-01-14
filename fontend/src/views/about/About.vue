<template>
  <div class="about-page">
    <!-- Notice -->
    <MessageNoticeComponent 
      :messageData="messages"
      class="about-page-notice"
    />
    <!-- title: about -->
    <div class="about-page-title">
      <h1>About Me</h1>
    </div>
    <!-- content -->
    <div class="about-page-content">
      <div class="about-page-content-bg">
        <!-- swiper bgi -->
        <SwiperComponent 
          :swiperOptions="BannerSwiperOptions"
          :bannerArr="bannerArr"
          :bannerSwiper="bannerSwiper"
          slideHeight="100%"
          class="about-page-content-bg-banner"
        />
      </div>
      <!-- avatar -->
      <section class="about-page-content-avatar">
        <div class="about-page-content-avatar-wrap"></div>
        <div class="about-page-content-avatar-introduce">Hi!,I am Eson</div>
        <div class="about-page-content-avatar-profession">front-end programmer</div>
      </section>
      <!-- detail desc -->
      <section class="about-page-content-desc">
        <h1>simple self-introduction</h1>
        <div class="about-page-content-desc-profession">
          <span>Profession:</span><span>front-end programmer</span>
        </div>
        <div class="about-page-content-desc-exp">
          <span>Experience:</span><span>2018 - Right now</span>
        </div>
        <div class="about-page-content-desc-motto">
          <span>Motto:</span><span>Practice brings true knowledge</span>
        </div>
        <div class="about-page-content-desc-other">
          <span>just do it</span>
        </div>
      </section>
      <!-- skills -->
      <section class="about-page-content-skills">
        <h1>Skills</h1>
        <!-- 进度条 -->
      </section>
      <!-- experiences -->
      <section class="about-page-content-exp"></section>
      <!-- education -->
      <section class="about-page-content-edu"></section>
      <!-- contact -->
      <section class="about-page-content-contact"></section>
    </div>
  </div>
</template>

<script>
import MessageNoticeComponent from '@/components/share/MessageNoticeComponent.vue'
import SwiperComponent from '@/components/share/SwiperComponent.vue'
export default {
  name: 'About',
  data () {
    return {
      messages: {},
      BannerSwiperOptions: {
        autoplay: true,
        loop: true,
        speed: 1000,
      },
      bannerArr: [{
        id: 1,
        name: 'web',
        bgUrl: require('../../assets/images/about/content-bg-01.jpeg'),
      },
      {
        id: 2,
        name: 'html',
        bgUrl:require('../../assets/images/about/content-bg-02.jpeg'),
      },
      {
        id: 3,
        name: 'css',
        bgUrl:require('../../assets/images/about/content-bg-03.jpeg'),
      },
      {
        id: 4,
        name: 'js',
        bgUrl:require('../../assets/images/about/content-bg-04.jpeg'),
      },
      {
        id: 5,
        name: 'es6',
        bgUrl:require('../../assets/images/about/content-bg-05.jpeg'),
      },
      {
        id: 6,
        name: 'vue',
        bgUrl:require('../../assets/images/about/content-bg-06.jpeg'),
      },
      {
        id: 7,
        name: 'vue',
        bgUrl:require('../../assets/images/about/content-bg-07.jpeg'),
      },
      {
        id: 8,
        name: 'vue',
        bgUrl:require('../../assets/images/about/content-bg-08.jpeg'),
      }],
      bannerSwiper: 'aboutBannerSwiperBg',
    };
  },
  components: {
    MessageNoticeComponent,
    SwiperComponent
  },
}

</script>
<style lang='less'>
.about-page {
  width: 100%;
  position: relative;
  &-title {
    background: url(../../assets/images/about/title-bg.jpg) no-repeat;
    h1 {
      background-color: rgba(0, 0, 0, .5);
      color: #fff;
      padding: 30px 0;
      font-size: 80px;
      font-weight: 100;
      font-style: normal;
      text-align: center;
    }
  }
  &-content {
    position: relative;
    &-bg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
  
      &-banner {
        height: 100%;

        .swiper-container {
          height: 100%;
        }
      }
    }
    & > section {
      position: relative;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
    }
    &-avatar {
      font-size: 32px;
      font-weight: 100;
      font-style: normal;
      text-align: center;
      color: #fff;
      padding-top: 20px;
      text-transform: capitalize;
      &-wrap {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        box-shadow: 2px 2px #b1521b;
        margin: 0 auto;
        background-image: url(../../assets/images/about/cosmopolitan.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
      &-introduce {
        color: #b1521b;
        margin: 20px 0;
      }
    }
    &-desc {

    }
  }
}
</style>