<template>
  <div class="header">
    <div class="header-content">
      <div class="header-content-setting">
        <div class="header-content-setting-wrap">
          <a href="/" class="header-content-setting-logo"></a>
          <a href="/" class="header-content-setting-title"><span>P</span>rogram <span>M</span>ini <span>S</span>pace</a>
        </div>
        <div class="header-content-setting-list">
          <ul class="header-content-setting-list-login">
            <li class="header-content-setting-list-login-item">Login</li>
            <li class="header-content-setting-list-login-item">Register</li>
            <li class="header-content-setting-list-login-item">Select language</li>
          </ul>
          <ul class="header-content-setting-list-links">
            <li class="header-content-setting-list-links-item">F</li>
            <li class="header-content-setting-list-links-item">T</li>
            <li class="header-content-setting-list-links-item">G</li>
            <li class="header-content-setting-list-links-item">in</li>
            <li class="header-content-setting-list-links-item">t</li>
          </ul>
        </div>
      </div>
      <ul class="header-content-nav-list">
        <li class="header-content-nav-list-item">HOME</li>
        <li class="header-content-nav-list-item">ABOUT</li>
        <li class="header-content-nav-list-item">CLASSIFIED ADS</li>
        <li class="header-content-nav-list-item">DATABASE</li>
        <li class="header-content-nav-list-item">NEWS</li>
        <li class="header-content-nav-list-item">ARTICLES</li>
        <li class="header-content-nav-list-item">FORUM</li>
        <li class="header-content-nav-list-item">VIDEO</li>
        <li class="header-content-nav-list-item">ADVERTISING</li>
        <li class="header-content-nav-list-item">CONTACTS</li>
        <li class="header-content-nav-list-item">HELP LINE : 19879265304</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  created() {
    this.tools.test();
  },

  mounted() {
  },

  methods: {}
}

</script>
<style lang="less">
  .header {
    width: 100%;
    box-sizing: border-box;
    &-content {
      width: 1280px;
      margin: 0 auto;
      &-setting{
        padding: 20px 0 ;
        display: flex;
        justify-content: space-around;
        align-items: center;
        &-wrap {
          display: flex;
          align-items: center;
        }
        &-logo {
          width: 100px;
          height: 50px;
          background-image: url('../../assets/images/logo/logo.png');
          background-repeat: no-repeat;
          background-size: contain;
          margin-right: 20px;
          border-radius: 2px;
        }
        &-title {
          color: #249692;
          font-size: 25px;
          span {
            color: turquoise;
          }
        }
        &-list {
          display: flex;
          align-items: center;
          &-login,
          &-links {
            display: flex;
            padding: 0 20px;
            &-item {
              padding: 10px 20px;
              border-radius: 4px;
              &:hover {
                color: #fff;
                background-color: #249692;
              }
            }
          }
          &-links {
            border-left: 1px solid #000;
            &-item {
              padding: 0 5px;
              &:hover {
                color: #249692;
                background-color: #fff;
              }
            }
          }
        }
      }
      &-nav-list {
        display: flex;
        justify-content: space-around;
        padding: 30px 0;
      }
    }
  }
</style>