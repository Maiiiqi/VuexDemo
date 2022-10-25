// 此脚本用于创建$store对象实现组件间数据共享

// 引入定义好的模块
import countAbout from './countAbout'
import personAbout from './personAbout'
// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 使用Vuex
Vue.use(Vuex)

// 使用模块化编程


// 创建并暴露$store对象
export default new Vuex.Store({
  modules: {
    countAbout,
    personAbout
  }
})