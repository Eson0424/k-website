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

</style>
