<template>
  <div class="default-desktop">
    <Header></Header>
    <div class="main">
      <div class="banner-wrap" :style="setClientHeight">
        <div class="bg-wrap">
          <BannerSwiper
            :banners="banners"
          />
        </div>
        <div class="content-wrap">
          <div class="welcome-text">welcome</div>
          <div class="title-text">Creamy Hot and Ready to Serve</div>
          <div class="desc-text">A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
          <div class="buttom-wrap">
            <el-button class="buttom-contain order-now-btn" >Order Now</el-button>
            <el-button class="buttom-contain view-menu-btn" >View Menu</el-button>
          </div>
        </div>
      </div>
      <div class="our-story-section">
        <div class="section-left"></div>
        <div class="section-right">
          <div class="section-right-badge">Discover</div>
          <div class="section-right-title">OUR STORY</div>
          <div class="section-right-desc">On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</div>
        </div>
      </div>
      <div class="service-section">
        <div class="contain">
          <div class="contain-item order">
            <div class="icon"></div>
            <div class="title">EASY TO ORDER</div>
            <div class="desc">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</div>
          </div>
          <div class="contain-item delivery">
            <div class="icon"></div>
            <div class="title">FASTEST DELIVERY</div>
            <div class="desc">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</div>
          </div>
          <div class="contain-item quality">
            <div class="icon"></div>
            <div class="title">QUALITY COFFEE</div>
            <div class="desc">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</div>
          </div>
        </div>
      </div>
      <div class="menu-section">
        <div class="menu-section-left">
          <div class="badge">Discover</div>
          <div class="title">OUR MENU</div>
          <div class="desc">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</div>
          <el-button>View Full Menu</el-button>
        </div>
        <div class="menu-section-right">这是图片</div>
      </div>
      <div class="counter-section">
        <div class="mask"></div>
        <ul class="counter-list">
          <li class="counter-list-item">
            <div class="item-icon"></div>
            <div class="counter">100</div>
            <div class="title">Coffee Branches</div>
          </li>
          <li class="counter-list-item">
            <div class="item-icon"></div>
            <div class="counter">85</div>
            <div class="title">Number of Awards</div>
          </li>
          <li class="counter-list-item">
            <div class="item-icon"></div>
            <div class="counter">10567</div>
            <div class="title">Happy Customer</div>
          </li>
          <li class="counter-list-item">
            <div class="item-icon"></div>
            <div class="counter">900</div>
            <div class="title">Staff</div>
          </li>
        </ul>
      </div>
      <div class="works-section"></div>
      <div class="gallery-section"></div>
      <div class="production-section"></div>
      <div class="customers-section"></div>
      <div class="blog-section"></div>
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
      z-index 11

  .main
    width 100%
    position relative

    .banner-wrap
      position relative
      width 100%

      .bg-wrap
        width 100%
        height 100%

      .content-wrap
        width 30%
        height 30%
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        z-index 11
        color $w
        text-align center

        .welcome-text
          font-family "Great Vibes", cursive
          font-size 30px
          color #c49b63

        .title-text
          font-size 40px
          line-height 1.5
          font-weight normal
          letter-spacing 1px
        
        .desc-text
          margin-top 20px
          font-size 18px
          line-height 1.5
          font-weight 300

        .buttom-wrap
          margin-top 30px

          .buttom-contain
            width 120px
            height 50px
          
          .view-menu-btn
            color $w
            border-color $w
          
          .el-button
            border-radius 0
            background rgba(255, 255, 255, 0)
          
          .order-now-btn
            color $bgy
            background-color #c39a63
            border-color #c49b63
          
          .order-now-btn:hover
            color #c49b63
            background rgba(255, 255, 255, 0)
            border-color #c39a63
          
          .view-menu-btn:hover
            border-color #c49b63
            background-color #c39a63
            color $bgy
    .our-story-section
      height 672px
      width 100%
      background-color #141416
      display flex

      .section-left
        height 100%
        width 50%
        padding 8% 13% 8% 5%
        background-image url('../../assets/images/about.jpg')
        background-repeat no-repeat

      .section-right
        width 719px
        height 327px
        margin 25px 0 0 -365px
        padding 40px
        background rgba(0, 0, 0, 0.5)

        &-badge
          font-size 50px
          display block
          margin-bottom 0
          font-family "Great Vibes", cursive
          color #c49b63
          line-height 1
          margin-bottom -21px

        &-title
          color $w
          font-size 40px
          font-weight 700
          position relative

        &-desc
          margin-top 30px
          font-size 17px
          line-height 1.8
          color $dgy

    .service-section
      height 314px
      padding 105px 0
      background #c49b63
      
      .contain
        display flex
        justify-content center
        align-items center

        &-item
          padding 0 30px
          box-sizing border-box
          width 380px
          height 314px
          display flex
          flex-direction column
          align-items center
          justify-content center
          text-align center

          .icon
            width 100px
            height 100px
            margin-bottom 50px
            border 1px solid #674c27
          
          .title
            font-size 18px
            margin-bottom 20px
            line-height 1.4
            font-weight 700px
          
          .desc
            color #1d150b
            font-size 15px
            line-height 1.8
            font-weight 300
    
    .menu-section
      height 508px
      padding 105px 0
      background #141416
      display flex
      justify-content center
      align-items center
      color $w

      &-left
        width 507px
        text-align right
        margin-right 3rem
        
        .badge
          font-size 50px
          display block
          margin-bottom 0
          color #c49b63
          line-height 1
          margin-bottom -21px

        .title
          font-size 40px
          font-weight 700
          position relative
        
        .desc
          margin 50px 0 20px
          font-size 16px
          line-height 1.8
          font-weight 300
          color $dgy
        
        .el-button
          height 50px
          border-radius 0
          background #c49b63
          border none
          color $bgy
        
        .el-button:hover
          background none
          border 1px solid #c49b63
          color #c49b63

      &-right
        width 570px


    .counter-section
      height 389px
      background-image url('../../assets/images/bg_2.jpg')
      background-position 50% 0
      background-repeat no-repeat
      background-size cover
      background-attachment fixed
      position relative

      .mask
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        background #000
        opacity .5

      .counter-list
        width 45%
        height 100%
        position absolute
        left 50%
        transform translateX(-50%)
        display flex
        justify-content space-between
        align-items center
        z-index 11

        &-item
          display flex
          flex-direction column
          align-items center

          .item-icon
            width 80px
            height 80px
            border 1px solid #c49b63

          .item-icon:hover
            background #c49b63
            transform rotate(45deg)
            transition transform 1s ease

          .counter
            font-weight 400
            font-size 30px
            color #c49b63
            margin 30px 0

          .title
            font-weight 400
            font-size 14px
            color #bfbfbf

    .works-section
      height 681px

    .gallery-section
      height 300px

    .production-section
      height 985px

    .customers-section
      height 626px

    .blog-section
      height 708px
      padding 105px 0
  </style>