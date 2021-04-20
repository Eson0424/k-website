<template>
  <div class="header">
      <div class="header-container">
        <div class="header-logo"><router-link to="/">k-website</router-link></div>
        <TabBar/>
      </div>
  </div>
</template>
<script>
import TabBar from '@/components/TabBar.vue'
export default {
    name: 'Header',
    components: {
        TabBar
    },
}
</script>
<style lang="stylus">
@require '~@/stylus/shared/index'

  .header
    width 100%

    &-container
      display flex
      justify-content center
      align-items center
</style>