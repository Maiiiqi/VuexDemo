<template>
  <div>
    <h1>Sum of Counter is: {{$store.state.sum}}</h1>
    <select v-model.number="num">
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
    <button @click="increaseOdd">奇数时再加</button>
    <button @click="increaseDelay">过0.5秒再加</button>
  </div>
</template>

<script>
export default {
  name: 'Count',
  data() {
    return {
      num : 1
    }
  },
  methods: {
    increase(){
      this.$store.dispatch('add', this.num)
    },
    decrease(){
      this.$store.dispatch('minus', this.num)
    },
    increaseOdd(){
      this.$store.dispatch('addOdd', this.num)
    },
    increaseDelay(){
      this.$store.dispatch('addDelay', this.num)
    }
  }
}
</script>

<style scoped>
button{
  margin-left: 5px;
}
</style>