<template>
  <div>
      111
      <br>
      {{num1}}
      <br/>
      <button class="button" @click="healderbutton"> + </button>
      <br>
      <button @click="buttonDec"> - </button>
      <br>
      <button @click="heaedletimeout">延迟2秒在改数据</button>
      <br>
      {{num2}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: this.$store.state.count,
      num2: this.$store.getters.state
    }
  },
  computed: {
    num1 () {
      return this.$store.state.count
    }
  },
  mounted () {
    console.log(this.$store.getters)
  },
  methods: {
    healderbutton () {
      console.log(123)
      this.$store.commit('stateAdd')
    },
    buttonDec () {
      console.log(123)
      this.$store.commit('stateDrc')
    },
    heaedletimeout () {
      setTimeout(() => {
        this.$store.dispatch('timeout', 2000)
      }, 2000)
    }
  }
}
</script>

<style>

</style>
