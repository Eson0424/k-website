<template>
  <div class="footer">
    <div class="footer-content">
      <ul class="footer-content-list">
        <li class="footer-content-list-item">
          <h6>CONTACT</h6>
          <ul class="footer-content-list-item-contact-list">
            <li class="footer-content-list-item-contact-list-item">
              <div class="contact-list-item-icon address-icon"></div>
              <div class="contact-list-item-desc"> Longhua District, Shenzhen City, Guangdong Province, China</div>
            </li>
            <li class="footer-content-list-item-contact-list-item">
              <div class="contact-list-item-icon tel-icon"></div>
              <div class="contact-list-item-desc">(+86)19879265304</div>
            </li>
            <li class="footer-content-list-item-contact-list-item">
              <div class="contact-list-item-icon email-icon"></div>
              <div class="contact-list-item-desc">913183606@qq.com</div>
            </li>
          </ul>
        </li>
        <li class="footer-content-list-item">
          <h6>CONTACT</h6>
          <ul class="footer-content-list-item-contact-list">
            <li class="footer-content-list-item-contact-list-item">
              <div class="contact-list-item-icon address-icon"></div>
              <div class="contact-list-item-desc"> Longhua District, Shenzhen City, Guangdong Province, China</div>
            </li>
            <li class="footer-content-list-item-contact-list-item">
              <div class="contact-list-item-icon tel-icon"></div>
              <div class="contact-list-item-desc">(+86)19879265304</div>
            </li>
            <li class="footer-content-list-item-contact-list-item">
              <div class="contact-list-item-icon email-icon"></div>
              <div class="contact-list-item-desc">913183606@qq.com</div>
            </li>
          </ul>
        </li>
        <li class="footer-content-list-item">
          <h6>CONTACT</h6>
          <ul class="footer-content-list-item-contact-list">
            <li class="footer-content-list-item-contact-list-item">
              <div class="contact-list-item-icon address-icon"></div>
              <div class="contact-list-item-desc"> Longhua District, Shenzhen City, Guangdong Province, China</div>
            </li>
            <li class="footer-content-list-item-contact-list-item">
              <div class="contact-list-item-icon tel-icon"></div>
              <div class="contact-list-item-desc">(+86)19879265304</div>
            </li>
            <li class="footer-content-list-item-contact-list-item">
              <div class="contact-list-item-icon email-icon"></div>
              <div class="contact-list-item-desc">913183606@qq.com</div>
            </li>
          </ul>
        </li>
        <li class="footer-content-list-item">
          <h6>CONTACT</h6>
          <ul class="footer-content-list-item-contact-list">
            <li class="footer-content-list-item-contact-list-item">
              <div class="contact-list-item-icon address-icon"></div>
              <div class="contact-list-item-desc"> Longhua District, Shenzhen City, Guangdong Province, China</div>
            </li>
            <li class="footer-content-list-item-contact-list-item">
              <div class="contact-list-item-icon tel-icon"></div>
              <div class="contact-list-item-desc">(+86)19879265304</div>
            </li>
            <li class="footer-content-list-item-contact-list-item">
              <div class="contact-list-item-icon email-icon"></div>
              <div class="contact-list-item-desc">913183606@qq.com</div>
            </li>
          </ul>
        </li>
      </ul>
      <div class="footer-content-copyright">
        <p>Copyright © 2021 Someone. All rights reserved.</p>
        <a href="https://beian.miit.gov.cn/">粤ICP备2020141291号</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  created() {},

  mounted() {},

  methods: {}
}

</script>
<style lang="less">
.footer {
  font-size: 14px;
  line-height: 1.5;
  width: 100%;
  background-color: #292a2c;
  &-content {
    width: 1280px;
    margin: 0 auto;
    padding: 100px 100px 30px;
    &-list {
      display: flex;
      justify-content: space-between;
      &-item {
        background-color: #fff;
        flex: 22% 0 0;
        box-sizing: border-box;
        border-radius: 4px;
        padding: 20px;
        h6 {
          margin-bottom: 20px;
        }
        &-contact-list-item {
          display: flex;
          margin-bottom: 10px;
          .contact-list-item-icon {
            width: 20px;
            height: 20px;
            margin-right: 10px;
            background-repeat: no-repeat;
            background-size: cover;
          }
          .address-icon {
            background-image: url('../../assets/images/icon/address.png');
          }
          .tel-icon {
            background-image: url('../../assets/images/icon/tel.png');
          }
          .email-icon {
            background-image: url('../../assets/images/icon/email-fill.png');
          }
          .contact-list-item-desc {
            flex: 1;
          }
        }
      }
    }
    &-copyright {
      color: #fff;
      text-align: center;
      margin-top: 50px;
      a {
        color: #fff;
        padding-top: 20px;
      }
    }
  }
}
</style>