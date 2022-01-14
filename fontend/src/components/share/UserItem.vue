<template>
  <div class="user-item">
    <div class="user-item-avatar" :style="{backgroundImage: 'url(' + userData.avatarUrl + ')'}"></div>
    <div class="user-item-info">
      <div class="user-item-info-name"><router-link to="/userDetail">{{userData.name}}</router-link></div>
      <div class="user-item-info-motto">{{userData.motto}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserItem',
  props: {
    userData: {
      type: Object,
      default: [],
      require: true,
    }
  },
}

</script>
<style lang='less'>
.user-item {
  display: flex;
  &-avatar {
    width: 45%;
    height: 90px;
    margin-right: 2%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  &-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    &-name {
      font-size: 25px;
      font-weight: 100;
      a {
        text-transform: capitalize;
      }
      &>a:hover {
        color: #428bca;
      }
    }
    &-motto {
      color: #999;
      font: 100 14px/23px 'PT Sans', sans-serif;
      line-height: 1.5em;
    }
  }
}

</style>