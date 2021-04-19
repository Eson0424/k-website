<template>
  <div class="header">
      <div class="header-container">
        <div class="header-logo">k-website</div>
        <div class="header-nav">
            <ul class="header-nav-list">
                <li class="header-nav-list-item">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="header-nav-list-item">
                    <router-link to="/menu">Menu</router-link>
                </li>
                <li class="header-nav-list-item">
                    <router-link to="/">Service</router-link>
                </li>
                <li class="header-nav-list-item">
                    <router-link to="/">Blog</router-link>
                </li>
                <li class="header-nav-list-item">
                    <router-link to="/">About</router-link>
                </li>
                <li class="header-nav-list-item">
                    <router-link to="/">Works</router-link>
                </li>
                <li class="header-nav-list-item">
                    <router-link to="/">Contact</router-link>
                </li>
                <li class="header-nav-list-item">
                    <router-link to="/">Cart</router-link>
                </li>
            </ul>
        </div>
      </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus">
@require '~@/stylus/shared/index'

  .header
    width 100%
    border-bottom 1px solid $dgy

    &-container
      display flex
      justify-content center
      align-items center

      .header-nav
        margin-left 200px

        &-list
          height 90px
          display flex
          justify-content center
          align-items center

          &-item:not(:first-child)
            margin-left 20px
</style>