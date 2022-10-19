<template>
  <div class="row">
    <!-- 展示列表 -->
    <div v-show="info.users.length" v-for="user in info.users" :key="user.login">
      <a :href="user.html_url">
        <img :src="user.avatar_url"/>
      </a>
      <p>{{user.login}}</p>
    </div>
    <!-- 展示欢迎词 -->
    <h1 v-show="info.isFirst">欢迎光临！</h1>
    <!-- 展示进度条 -->
    <h1 v-show="info.isLoading">加载中...</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="info.errMsg">{{info.errMsg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      info: {
        users: [],
        isFirst: true,
        isLoading: false,
        errMsg: ''
      }
    }
  },
  mounted(){
    this.$bus.$on('searchClicked', (dataObj)=>{
      this.info = {...this.info, ...dataObj}
    })
  }
}
</script>

<style scoped>

</style>
