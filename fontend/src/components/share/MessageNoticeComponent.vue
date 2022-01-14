<template>
  <div class="message-notice">
    <div class="message-notice-section section-first">这里是消息通知区域</div>
    <div class="message-notice-section section-second">这里是消息通知区域</div>
    <div class="message-notice-section section-third">这里是消息通知区域</div>
    <div class="message-notice-section section-fourth">这里是消息通知区域</div>
  </div>
</template>

<script>
export default {
  name: 'MessageNoticeComponent',
  props: {
    messageData: {
      type: Object,
      default: {},
      require: true,
    }
  },
}

</script>
<style lang='less'>
.message-notice{
  width: 100%;
  height: 24px;
  position: relative;
  transform-style: preserve-3d;
  animation: homeNotice 10s linear infinite;
  &-section {
    width: 100%;
    height: 24px;
    line-height: 24px;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
  }
  .section-first {
    background-color: rgb(16, 233, 211);
    color: #fff;
    z-index: 1;
    transform: translate3d(0, 0, 12px);
  }
  .section-second {
    background-color: rgb(177, 20, 216);
    color: #fff;
    transform: translate3d(0, 12px, 0) rotateX(-90deg);
  }
  .section-third {
    background-color: rgb(161, 211, 25);
    color: #fff;
    transform: translate3d(0, -12px, 0) rotateX(90deg);
  }
  .section-fourth {
    background-color: rgb(233, 196, 30);
    color: #fff;
    transform: translate3d(0, 0, -12px) rotateX(180deg);
  }
}
/* 通知动画 */ 
 @keyframes homeNotice {
  0% {
     transform: rotateX(0deg);
   }
  25% {
     transform: rotateX(-90deg);
   }
  50% {
     transform: rotateX(-180deg);
   }
  75% {
     transform: rotateX(-270deg);
   }
  100% {
     transform: rotateX(-360deg);
   }
 }
</style>