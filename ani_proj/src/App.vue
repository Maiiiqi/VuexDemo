<template>
  <div id="app">
    <!-- <Student/> -->
    <!-- <Search/>
    <br/>
    <List/> -->
    <!-- <div class="boxer">
      <Category title="UL">
        <template slot-scope="dataObj">
          <ul>
            <li v-for="(g, index) in dataObj.games" :key="index">{{g}}</li>
          </ul>
        </template>
      </Category>
  
      <Category title="OL">
        <template slot-scope="dataObj">
          <ol>
            <li v-for="(g, index) in dataObj.games" :key="index">{{g}}</li>
          </ol>
        </template>
      </Category>
  
      <Category title="h6">
        <template slot-scope="dataObj">
          <h6 v-for="(g, index) in dataObj.games" :key="index">{{g}}</h6>
        </template>
      </Category>
    </div>
    <button @click="sendReq">点我访问php</button> -->
    <Count/>
  </div>
</template>

<script>
// 引入组件
import Student from './components/Student.vue'
import Search from './components/Search.vue'
import List from './components/List.vue'
import Category from './components/Category.vue'
import Count from './components/Count.vue'
// 引入axios
import axios from 'axios'
// 引入创建好的$store对象
import store from './store/'
export default {
  name: 'App',
  components: {Student, Search, List, Category, Count},
  methods: {
    sendReq(){
      axios.get('./php/oms.php').then(
        response => {
          console.log('请求成功，数据为：', response.data)
        },
        error => {
          console.log('请求失败，信息为：', error.message)
        }
      )
    }
  },
  store
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .boxer{
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }
</style>
