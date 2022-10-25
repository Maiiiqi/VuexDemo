export default {
  // Count组件相关
  namespaced: true,     // 开启命名空间，是namespaced不是namespace!!!
  // 创建actions对象
  actions: {
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
  },
  // 创建mutations对象
  mutations: {
    // mutations对象中的方法一般都用大写命名，以区分和actions对象中的方法
    ADD(state, value){    //第1个参数为state对象，第2个参数为传入的值
      state.sum += value
    },
    MINUS(state, value){
      state.sum -= value
    }
  },
  // 创建state对象
  state: {
    sum: 0
  }
}