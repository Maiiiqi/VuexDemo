<template>
  <div>
    <button style="float: left" @click="isShown = !isShown">出现/消失</button>
    <br/>
    <transition :appear="true" name="animate_animated animate_bounce" enter-active-class="animate_swing" leave-active-class="animate_backOutUp">
      <h1 class="block" v-show="isShown">{{msg}}</h1>
    </transition>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name: 'Student',
  data () {
    return {
      msg: '动画测试！',
      isShown: true
    }
  }
}
</script>

<style scoped>
  .block{
    background-color: orange;
    width: 400px;
    height: 60px;
  }
.hello-enter, .hello-leave-to{
    transform: translateX(-100%);
}
.hello-leave, .hello-enter-to{
    transform: translateX(0);
}
.hello-enter-active, .hello-leave-active{
    transition: 1s linear;
}

.v-enter-active{
    animation: myAnim 1s;
}
.v-leave-active{
    animation: myAnim 1s reverse;
}
@keyframes myAnim {
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0px);
    }
}
</style>
