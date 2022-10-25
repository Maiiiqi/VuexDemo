// 引入包
import axios from "axios"
import {nanoid} from 'nanoid'

export default{
  // Person组件相关
  namespaced: true,     // 开启命名空间，是namespaced不是namespace!!!
  state: {
    personList: [{id: 1, name: '张三'}]
  },
  actions: {
    // actions中可以在发送ajax请求收到数据后，或对传过来的value进行一些操作后，再commit给mutations由其对state中的数据作处理
    addPersonWang(context, value){
      if (value.name.indexOf('王') === 0)
        context.commit('ADD_PERSON', value)
      else
        alert('Only Person Wang')
    },
    addPersonFromServer(context){
      axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
        response => {
          context.commit('ADD_PERSON', {id: nanoid(), name: response.data})
        },
        error => {
          alert(error.message)
        }
      )
    }
  },
  mutations: {
    // mutations就是直接对state中的数据作处理了
    ADD_PERSON(state, value){
      if (!value.name) return
      state.personList.unshift(value)
    }
  }
}