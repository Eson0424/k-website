<template>
  <div class="main">
    <Header v-if="showComponent" />
    <!-- 保留状态，避免重新渲染 -->
    <keep-alive>
      <!-- 路由组件出口: 渲染vue-router指定的组件 -->
      <router-view></router-view>
    </keep-alive>
    <Footer v-if="showComponent" />
  </div>
</template>

<script>
import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
export default {

  components: {
    Header,
    Footer,
  },

  computed: {
    showComponent() {
      return this.$route.meta.show;
    }
  },
}

</script>
<style lang="less">
  /* 设置滚动条的样式 */
::-webkit-scrollbar {
width:5px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
-webkit-box-shadow:inset006pxrgba(0,0,0,0.8);
border-radius:10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
border-radius:10px;
background:rgba(0,0,0,0.7);
-webkit-box-shadow:inset006pxrgba(0,0,0,0.5);
}
</style>