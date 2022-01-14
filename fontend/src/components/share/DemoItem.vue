<template>
  <div class="demo-item">
    <div class="demo-item-info">
      <div class="demo-item-info-avatar" :style="{backgroundImage: 'url(' + demoData.imgUrl + ')'}"></div>
      <div class="demo-item-info-detail">
        <router-link :to="demoData.detailUrl">{{ demoData.name }}</router-link>{{demoData.title}}
      </div>
      <div class="demo-item-flash">刷新</div>
    </div>
    <div class="demo-item-desc"><router-link to="/">{{ demoData.desc }}</router-link></div>
  </div>
</template>

<script>
export default {
  name: 'DemoItem',
  props: {
    demoData:{
      type: Object,
      default: {},
      require: true,
    }
  }
}

</script>
<style lang='less'>
.demo-item {
  &-info {
    display: flex;
    align-items: center;
    margin: 20px 0;
    &-avatar {
      flex: 10% 0 0;
      height: 60px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
    &-detail {
      font-size: 32px;
      font-weight: 100;
      margin: 0 20px;
      a {
        color: #56cfca;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  &-desc {
    margin-left: 10%;
    font-size: 18px;
    a {
      color: #999;
      &:hover {
        color: #000;
      }
    }
  }
}
</style>