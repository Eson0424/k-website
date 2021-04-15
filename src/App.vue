<template>
  <div id="app">
    <router-view>
    </router-view>
    <!-- <component :is="importer['desktop']"></component> -->
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
