<template>
  <div id="app">
    <router-view>
      <component :is="importer['desktop']"></component>
    </router-view>
  </div>
</template>

<script>
import { LAYOUT } from '@/constants.js'
export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      importer: {
        [LAYOUT.DESKTOP]: () => import('@/views/desktop/DefaultDesktop.vue'),
        [LAYOUT.MOBILE]: () => import('@/views/mobile/DefaultMobile.vue'),
      }
    }
  },
}
</script>

<style>
::-webkit-scrollbar

{

width: 5px;

}

/*定义滚动条轨道 内阴影+圆角*/

::-webkit-scrollbar-track {

border-radius: 50%;

background-color: rgba(0,0,0,0.1);

}

/*定义滑块 内阴影+圆角*/

::-webkit-scrollbar-thumb

{

border-radius: 5px;

-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);

background-color: rgba(0,0,0,0.1);

}
</style>
