<template>
  <div>
    <input type="text" placeholder="Enter name to add" v-model="inputName"/>
    <button @click="addPerson">Click to add</button>
    <button @click="addPersonWang">Add LastName Wang</button>
    <button @click="addFromServer">Add Person from Server</button>
    <h3>Sum of Counter in upper Component is: {{countSum}}</h3>
    <h3>Length of List is: {{personList.length}}</h3>
    <ul>
      <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import {mapState} from 'vuex'
export default {
  name: 'Person',
  data() {
    return {
      inputName: ''
    }
  },
  computed: {
    // personList(){
    //   return this.$store.state.personAbout.personList
    // },
    ...mapState('personAbout', ['personList']),
    ...mapState('countAbout', {countSum: 'sum'})
  },
  methods: {
    addPerson(){
      this.$store.commit('personAbout/ADD_PERSON', {id: nanoid(), name: this.inputName})
      this.inputName = ''
    },
    // 一般像下面这两种需要进行一些操作的，都是先dispatch给actions, 由actions操作过后再commit给mutations
    addPersonWang(){
      this.$store.dispatch('personAbout/addPersonWang', {id: nanoid(), name: this.inputName})
      this.inputName = ''
    },
    addFromServer(){  
      this.$store.dispatch('personAbout/addPersonFromServer')
    }
  },
}
</script>

<style scoped>
  button{
    margin-left: 5px;
  }
</style>