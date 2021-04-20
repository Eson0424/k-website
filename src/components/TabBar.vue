<template>
  <div class="tab-bar">
    <ul class="tab-bar-list">
      <li class="tab-bar-list-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="tab-bar-list-item">
        <router-link to="/menu">Menu</router-link>
      </li>
      <li class="tab-bar-list-item">
        <router-link to="/">Service</router-link>
      </li>
      <li class="tab-bar-list-item">
        <router-link to="/">Blog</router-link>
      </li>
      <li class="tab-bar-list-item">
        <router-link to="/">About</router-link>
      </li>
      <li class="tab-bar-list-item">
        <router-link to="/">Works</router-link>
      </li>
      <li class="tab-bar-list-item">
        <router-link to="/">Contact</router-link>
      </li>
      <li class="tab-bar-list-item">
        <router-link to="/">Cart</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'TabBar',

}
</script>
<style lang="stylus">
  @require '~@/stylus/shared/index'
  .tab-bar
    margin-left 200px

    &-list
      height 90px
      display flex
      justify-content center
      align-items center

      &-item:not(:first-child)
        margin-left 20px
</style>