<template>
  <div>
    <div>count{{ aboutCount }}</div>
    <button @click="reduce()">click -1</button>
    <button @click="add()">click +1</button>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
    };
  },

  components: {},

  computed: {
    aboutCount() {
      return this.$store.state.about.count
    }
  },

  created() {},

  mounted() {},

  methods: {
    add() {
      // 派发action
      this.$store.dispatch('add')
    },
    reduce() {
      this.$store.dispatch('reduce')
    }
  }
}

</script>
<style lang='less'>
</style>