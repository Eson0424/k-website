<template>
  <div class="header">
    <div class="header-content">
      <div class="header-content-setting">
        <div class="header-content-setting-wrap">
          <router-link to="/" class="header-content-setting-logo"></router-link>
          <router-link to="/" class="header-content-setting-title"><span>P</span>rogram <span>M</span>ini <span>S</span>pace</router-link>
        </div>
        <div class="header-content-setting-list">
          <ul class="header-content-setting-list-login">
            <li class="header-content-setting-list-login-item">
              <router-link class="login-register-link" to="/login">Login / Register</router-link>
            </li>
            <li class="header-content-setting-list-login-item">Select language</li>
          </ul>
          <ul class="header-content-setting-list-links">
            <li class="header-content-setting-list-links-item">
              <router-link class="links-item-router" to="#">F</router-link></li>
            <li class="header-content-setting-list-links-item">
              <router-link class="links-item-router" to="#">T</router-link></li>
            <li class="header-content-setting-list-links-item">
              <router-link class="links-item-router" to="#">G</router-link></li>
            <li class="header-content-setting-list-links-item">
              <router-link class="links-item-router" to="#">in</router-link></li>
            <li class="header-content-setting-list-links-item">
              <router-link class="links-item-router" to="#">t</router-link></li>
          </ul>
        </div>
      </div>
      <ul class="header-content-nav-list">
        <li class="header-content-nav-list-item">
          <router-link to="/home">HOME</router-link>
        </li>
        <li class="header-content-nav-list-item">
          <router-link to="/about">ABOUT</router-link>
        </li>
        <li class="header-content-nav-list-item">
          <router-link to="/database">DATABASE</router-link>
        </li>
        <li class="header-content-nav-list-item">
          <router-link to="/news">NEWS</router-link>
        </li>
        <li class="header-content-nav-list-item">
          <router-link to="/articles">ARTICLES</router-link>
        </li>
        <li class="header-content-nav-list-item">
          <router-link to="/forum">FORUM</router-link>
        </li>
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
    font-family: 'Oswald', sans-serif;
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
                .login-register-link {
                  color: #fff;
                }
                .links-item-router {
                  color: #249692;
                }
              }
            }
          }
          &-links {
            border-left: 1px solid #000;
            &-item {
              padding: 0 5px;
              &:hover {
                background-color: #fff;
              }
            }
          }
        }
      }
      &-nav-list {
        display: flex;
        justify-content: space-around;
        padding: 20px 0;
        &-item {
          padding: 10px 5px;
          border-radius: 2px;
          a {
            color: #249692;
            font-weight: 600;
          }
          &:not(:last-child):hover {
            background-color: #249692;
            a {
              color: #fff;
            }
          }
        }
      }
    }
  }
</style>