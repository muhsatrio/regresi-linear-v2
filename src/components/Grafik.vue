<template>
  <div class="Grafik">
    <h2>Grafik</h2>
    <highcharts :options="chartOptions" />
  </div>
</template>

<script>
import {Chart} from 'highcharts-vue'

export default {
  data() {
    return {
      chartOptions: {
        title: null,
        xAxis: {
          title: {
            text: 'X'
          },
        },
        yAxis: {
          title: {
            text: 'Y',
            rotation: 360
          }
        },
        series: [
          {
            name: 'Data',
            data: this.$store.state.convertedXY
          }
        ]
      }
    }
  },
  components: {
    highcharts: Chart
  }
}
</script>

<style>

</style>