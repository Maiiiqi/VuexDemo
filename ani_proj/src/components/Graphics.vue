<template>
  <div>
    <div ref="graDiv" style="width: 100%; height: 300px">

    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'Graphics',
  data() {
    return {
      xData: ['1', '2', '3', '4', '5', '6', '7'],
      yData: [15, 23, 22, 21, 13, 17, 60],
      graCharts: {}
    }
  },
  mounted() {
    let graOption = {
      title: {
        left: 'center',
        text: '时间分布曲线',
        textStyle: {
          color: '#fff',
          fontSize: 35,
          fontWeight: 'normal'
        }
      },
      grid: {
        x: 50,
        y: 90,
        x2: 30,
        y2: 30
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          interval: 0,
          fontSize: 20
        },
        data: this.xData
      },
      yAxis: {
        type: 'value',
        name: '人次',
        nameTextStyle: {
          align: "人次",
          fontSize: 20
        },
        max: 100,
        min: 0,
        splitNumber: 6,
        axisLabel: {
          fontSize: 20
        }
      },
      series: [{
        data: this.yData,
        type: 'line',

      }]
    }
    // 将charts与DOM元素关联
    this.graCharts = echarts.init(this.$refs.graDiv)  // 利用ref属性找到DOM元素
    this.graCharts.setOption(graOption)
    window.addEventListener("resize",()=>{
      this.graCharts.resize()
    })
  }
}
</script>

<style scoped>

</style>