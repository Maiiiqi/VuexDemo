<template>
  <div>
    <h1>Sum of Counter is: {{sum}}</h1>
    <h3>The number of Person in lower Component is: {{personList.length}}</h3>
    <select v-model.number="num">
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    <button @click="increase(num)">+</button>
    <button @click="decrease(num)">-</button>
    <button @click="increaseOdd(num)">Add only odd</button>
    <button @click="increaseDelay(num)">Add in 500ms</button>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from 'vuex'
export default {
  name: 'Count',
  data() {
    return {
      num : 1
    }
  },
  computed: {
    // 自己手动生成计算属性
    // sum(){
    //   return this.$store.state.countAbout.sum
    // }
    // 借助map生成，对象形式
    // ...mapState('countAbout', {sum: 'sum'})
    // 借助map生成，数组形式
    ...mapState('countAbout', ['sum']),

    // 自己生成计算属性
    // personList()
    // {
    //   return this.$store.state.personAbout.personList
    // }
    // 借助map的对象形式
    ...mapState('personAbout', {personList: 'personList'}),
    // 借助map的数组形式
    // ...mapState('personAbout', ['personList'])
  },
  methods: {
    // increase(){
    //   // 先dispatch再由actions对象进行commit
    //   // this.$store.dispatch('countAbout/add', this.num)
    //   // 也可直接commit
    //   this.$store.commit('countAbout/ADD', this.num)
    // },
    // 或者使用map直接生成increse方法，此时调用increase方法的地方要显式传入数据，否则默认传入的是event事件
    ...mapMutations('countAbout', {increase: 'ADD'}),

    // decrease(){
    //   // 先dispatch再由actions对象进行commit
    //   // this.$store.dispatch('countAbout/minus', this.num)
    //   // 也可直接commit
    //   this.$store.commit('countAbout/MINUS', this.num)
    // },
    // 或者使用map直接生成decrease方法，此时调用decrease方法的地方要显式传入数据，否则默认传入的是event事件
    ...mapMutations('countAbout', {decrease: 'MINUS'}),

    // increaseOdd(){
    //   // dispatch到actions中进行一些判断和操作
    //   this.$store.dispatch('countAbout/addOdd', this.num)
    // },
    // 也可使用map生成方法
    ...mapActions('countAbout', {increaseOdd: 'addOdd'}),

    // increaseDelay(){
    //   this.$store.dispatch('addDelay', this.num)
    // }
    // 使用map
    ...mapActions('countAbout', {increaseDelay: 'addDelay'})
  }
}
</script>

<style scoped>
button{
  margin-left: 5px;
}
</style>