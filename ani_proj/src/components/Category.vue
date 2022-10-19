<template>
  <div class="boxer">
    <h3>{{title}}样式</h3>
    <!-- 定义插槽位置，用于父组件向此处插入html结构 -->
    <!-- games用于向父组件传递数据 -->
    <slot :games="games">没有html结构就显示此内容</slot>
  </div>
</template>

<script>
export default {
  name: 'Category',
  data() {
    return {
      games: ['LOL', 'YS', 'BH']
    }
  },
  props: ['title']
}
</script>

<style scoped>
  .boxer{
    background-color: skyblue;
    width: 200px;
    height: 400px;
  }
</style>