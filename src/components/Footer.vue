<template>
  <div class="footer">
    <div class="footer-contain">
      <ul class="footer-contain-nav">
        <li class="nav-item">
          <div class="title">ABOUT US</div>
          <div class="decs">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</div>
          <ul class="share-nav">
              <li class="share-nav-item">Twitter</li>
              <li class="share-nav-item">Facebook</li>
              <li class="share-nav-item">WeChat</li>
          </ul>
        </li>
        <li class="nav-item">
          <div class="title">RECENT BLOG</div>

        </li>
        <li class="nav-item">
          <div class="title">SERVICES</div>
          <ul class="service-nav">
              <li class="service-nav-item">Cooked</li>
              <li class="service-nav-item">Deliver</li>
              <li class="service-nav-item">Quality Foods</li>
              <li class="service-nav-item">Mixed</li>
          </ul>

        </li>
        <li class="nav-item">
          <div class="title">HAVE A QUESTIONS?</div>
          <div class="author-info address">
              <div class="icon"><img src="../assets/images/map-icon.png"></div>
              <div class="address-decs">203 Fake St. Mountain View, San Francisco, California, USA</div>
          </div>
          <div class="author-info tel">
              <div class="icon"><img src="../assets/images/tel-icon.png"></div>
              <div class="tel-decs">+2 392 3929 210</div>
          </div>
          <div class="author-info email">
              <div class="icon"><img src="../assets/images/email-icon.png"></div>
              <div class="email-decs">info@yourdomain.com</div>
          </div>
        </li>
      </ul>
      <div class="copy-right">Copyright ©2021 All rights reserved | This template is made with  by Colorlib</div>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus">
// 当style中有scoped时，其css仅应用于当前组件的元素
@require '~@/stylus/shared/index'
  .footer
    width 100%
    padding-top 120px
    color $w
    background-color #120f0f

    .footer-contain
      display flex
      justify-content center
      align-items center
      flex-direction column

      .footer-contain-nav
        display flex

        .nav-item
          width 200px

          .title
            margin-bottom 20px

          .share-nav
            margin-top 20px
            display flex
            justify-content space-between
          
          .service-nav-item
            cursor pointer
            color $dgy

          .service-nav-item:hover
            color $w

          .service-nav-item:not(:last-child)
            margin-bottom 20px

        .nav-item:not(:last-child)
          margin-right 20px
        
        .author-info:not(:first-child)
          margin-top 10px

        .author-info
          display flex

          .icon
            margin-right 20px
        
        .address
          color $dgy

      .copy-right
        margin-top 100px

</style>