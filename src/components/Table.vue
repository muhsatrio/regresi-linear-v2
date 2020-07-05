<template>
  <div class="Table">
    <h2>Tabel</h2>
    <b-table striped :fields="fields" :items="items" />
    <hr>
    <h5>&Sigma;X = {{ $store.state.sum_x }}</h5>
    <h5>&Sigma;Y = {{ $store.state.sum_y }}</h5>
    <h5>&Sigma;X<sup>2</sup> = {{ $store.state.sum_x2 }}</h5>
    <h5>&Sigma;Y<sup>2</sup> = {{ $store.state.sum_y2 }}</h5>
    <h5>&Sigma;XY = {{ $store.state.sum_xy }}</h5>
    <hr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        {
          key: 'no',
          label: 'No'
        },
        {
          key: 'x',
          label: `X`
        },
        {
          key: 'y',
          label: `Y`
        },
        {
          key: 'x2',
          label: `X2`
        },
        {
          key: 'y2',
          label: `Y2`
        },
        {
          key: 'xy',
          label: `XY`
        },
      ],
      items: this.$store.getters.values
    }
  },
}
</script>

<style>
.scrolling-wrapper {
    overflow-x: auto;
}
</style>