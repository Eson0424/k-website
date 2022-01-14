<template>
  <div class="home-page">
    <!-- Notice -->
    <MessageNoticeComponent 
      :messageData="messages"
      class="home-page-notice"
    />
    <!-- banner -->
    <SwiperComponent 
      :swiperOptions="homeBannerSwiperOptions"
      :bannerArr="bannerArr"
      :bannerSwiper="bannerSwiper"
      slideHeight="750px"
      class="home-page-banner"
    />
    <!-- content -->
    <div class="home-page-content">
      <div class="home-page-content-section">
        <div class="home-page-content-section-left">
          <small> introducing</small>
          <h2>Shortly About Us</h2>
        </div>
        <div class="home-page-content-section-right">
          <h2>The standard chunk of Lorem Ipsum used since the 1500s. </h2>
          <p class="subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <p class="desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
        </div>
      </div>
      <div class="home-page-content-ads"></div>
      <div class="home-page-content-section">
        <div class="home-page-content-section-left">
          <small> introducing</small>
          <h2>New User</h2>
        </div>
        <ul class="home-page-content-section-right">
          <li
            v-for="item in users" 
            :key="item.userId" 
            class="home-page-content-section-right-item"
          >
            <UserItem 
              :userData="item"
            />
          </li>
        </ul>
      </div>
      <div class="home-page-content-info"></div>
      <div class="home-page-content-section">
        <div class="home-page-content-section-left">
          <small> introducing</small>
          <h2>Posted Demo</h2>
        </div>
        <div class="home-page-content-section-right">
          <div class="home-page-content-section-right-setting"></div>
          <ul class="home-page-content-section-right-content">
            <li
              v-for="item in demos"
              :key="item.demoId"
              class="home-page-content-section-right-content-item"
            >
              <DemoItem 
                :demoData="item"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MessageNoticeComponent from '@/components/share/MessageNoticeComponent.vue'
import SwiperComponent from '@/components/share/SwiperComponent.vue'
import UserItem from '@/components/share/UserItem.vue'
import DemoItem from '@/components/share/DemoItem.vue'
export default {
  name: 'Home',
  data () {
    return {
      messages: {},
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
      users: [{
        useId: 1,
        name: 'jacy',
        motto: 'Curabitur quisque morbi aspernatu',
        avatarUrl: require('../../assets/images/home/users/pic1.jpg')
      },{
        useId: 2,
        name: 'eason',
        motto: 'Et ante eget, cras risus et hymena',
        avatarUrl: require('../../assets/images/home/users/pic2.jpg')
      },{
        useId: 3,
        name: 'joy',
        motto: 'just do it',
        avatarUrl: require('../../assets/images/home/users/pic3.jpg')
      },{
        useId: 4,
        name: 'lucy',
        motto: 'ac justo et justo pede sapien nam',
        avatarUrl: require('../../assets/images/home/users/pic4.jpg')
      },{
        useId: 5,
        name: 'leo',
        motto: 'ac interdum nulla volutpat vestibu',
        avatarUrl: require('../../assets/images/home/users/pic5.jpg')
      },{
        useId: 6,
        name: 'abe',
        motto: 'ac interdum nulla volutpat vestibu',
        avatarUrl: require('../../assets/images/home/users/pic6.jpg')
      },{
        useId: 7,
        name: 'bley',
        motto: 'ac interdum nulla volutpat vestibu',
        avatarUrl: require('../../assets/images/home/users/pic7.jpg')
      },{
        useId: 8,
        name: 'che',
        motto: 'ac interdum nulla volutpat vestibu',
        avatarUrl: require('../../assets/images/home/users/pic8.jpg')
      },{
        useId: 9,
        name: 'dom',
        motto: 'ac interdum nulla volutpat vestibu',
        avatarUrl: require('../../assets/images/home/users/pic9.jpg')
      },{
        useId: 10,
        name: 'flower',
        motto: 'ac interdum nulla volutpat vestibu',
        avatarUrl: require('../../assets/images/home/users/pic10.jpg')
      },{
        useId: 11,
        name: 'gigi',
        motto: 'ac interdum nulla volutpat vestibu',
        avatarUrl: require('../../assets/images/home/users/pic11.jpg')
      },{
        useId: 12,
        name: 'hola',
        motto: 'ac interdum nulla volutpat vestibu',
        avatarUrl: require('../../assets/images/home/users/pic12.jpg')
      },],
      demos: [{
        demoId: 1,
        category: 1,
        name: 'demo01',
        detailUrl: '/',
        title: 'dolor suspendisse quis non',
        desc: 'Est sit integer eu magna, ullamcorper mus vel nunc',
        imgUrl: require('../../assets/images/home/users/pic13.jpg')
      },{
        demoId: 2,
        category: 2,
        name: 'demo02',
        detailUrl: '/',
        title: 'dolor suspendisse quis non',
        desc: 'Est sit integer eu magna, ullamcorper mus vel nunc',
        imgUrl: require('../../assets/images/home/users/pic14.jpg')
      },{
        demoId: 3,
        category: 3,
        name: 'demo03',
        detailUrl: '/',
        title: 'dolor suspendisse quis non',
        desc: 'Est sit integer eu magna, ullamcorper mus vel nunc',
        imgUrl: require('../../assets/images/home/users/pic15.jpg')
      },{
        demoId: 4,
        category: 2,
        name: 'demo04',
        detailUrl: '/',
        title: 'dolor suspendisse quis non',
        desc: 'Est sit integer eu magna, ullamcorper mus vel nunc',
        imgUrl: require('../../assets/images/home/users/pic16.jpg')
      },{
        demoId: 5,
        category: 4,
        name: 'demo05',
        detailUrl: '/',
        title: 'dolor suspendisse quis non',
        desc: 'Est sit integer eu magna, ullamcorper mus vel nunc',
        imgUrl: require('../../assets/images/home/users/pic17.jpg')
      },{
        demoId: 6,
        category: 3,
        name: 'demo06',
        detailUrl: '/',
        title: 'dolor suspendisse quis non',
        desc: 'Est sit integer eu magna, ullamcorper mus vel nunc',
        imgUrl: require('../../assets/images/home/users/pic18.jpg')
      },{
        demoId: 7,
        category: 4,
        name: 'demo07',
        detailUrl: '/',
        title: 'dolor suspendisse quis non',
        desc: 'Est sit integer eu magna, ullamcorper mus vel nunc',
        imgUrl: require('../../assets/images/home/users/pic19.jpg')
      },{
        demoId: 8,
        category: 1,
        name: 'demo08',
        detailUrl: '/',
        title: 'dolor suspendisse quis non',
        desc: 'Est sit integer eu magna, ullamcorper mus vel nunc',
        imgUrl: require('../../assets/images/home/users/pic20.jpg')
      },],
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
    MessageNoticeComponent,
    SwiperComponent,
    UserItem,
    DemoItem
  },
}

</script>
<style lang='less'>
.home-page {
  width: 100%;
  &-content {
    width: 100%;
    background-color: #f1f1f1;
    &-section {
      width: 1000px;
      box-sizing: border-box;
      margin: 0 auto;
      background-color: #fff;
      position: relative;
      padding: 80px;
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
        display: flex;
        flex-wrap: wrap;
        &-item {
          flex: calc(50% - 20px) 0 0;
          padding: 10px 10px 30px;
        }
        &-item:nth-child(2n) {
          background-color: #56cfca;
          .user-item {
            &-info {
              &-name a,
              &-motto {
                color: #fff;
              }
              &-name {
                a:hover {
                  color: #000;
                }
              }
            }
          }
        }

        &-content {
          width: 100%;
          box-sizing: border-box;
        }

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
</style>