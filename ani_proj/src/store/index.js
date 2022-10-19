// 此脚本用于创建$store对象实现组件间数据共享

// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 使用Vuex
Vue.use(Vuex)

// 创建actions对象
const actions = {
  add(context, value){  //第1个参数为上下文，第2个参数为传入的值
    context.commit('ADD', value)
  },
  minus(context, value){
    context.commit('MINUS', value)
  },
  // 一般像这种要调用别的API，或者对动作进行筛选判断的操作都放在actions里面
  // mutations里只做最后的操作
  addOdd(context, value){
    // 当state中的sum为奇数时才进行commit
    if (context.state.sum %2 !== 0)
      context.commit('ADD', value)
  },
  addDelay(context, value){
    // 过500ms后再commit
    setTimeout(() => {
      context.commit('ADD', value)
    }, 500);
  }
}
// 创建mutations对象
const mutations = {
  // mutations对象中的方法一般都用大写命名，以区分和actions对象中的方法
  ADD(state, value){    //第1个参数为state对象，第2个参数为传入的值
    state.sum += value
  },
  MINUS(state, value){
    state.sum -= value
  }
}
// 创建state对象
const state = {
  sum: 0
}

// 创建并暴露$store对象
export default new Vuex.Store({
  actions,
  mutations,
  state
})