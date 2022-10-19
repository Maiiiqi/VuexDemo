<template>
  <section>
    <input type="text" placeholder="enter name to Search" v-model="keyword"/>&nbsp;<button @click="search">Search</button>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Search',
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    search(){
      this.$bus.$emit('searchClicked', {isFirst: false, isLoading: true, users:[], errMsg: ''})
      axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
        response=>{
          this.$bus.$emit('searchClicked', {isLoading: false, users:response.data.items, errMsg: ''})
        },
        error=>{
          this.$bus.$emit('searchClicked', {isLoading: false, users:[], errMsg: error.message})
        }
      )
    }  
  }
}
</script>

<style scoped>

</style>
