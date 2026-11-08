<template>
  <div class="Table">
    <h2>Tabel</h2>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>No</th>
            <th>X</th>
            <th>Y</th>
            <th>X<sup>2</sup></th>
            <th>Y<sup>2</sup></th>
            <th>XY</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in $store.getters.values" :key="item.no">
            <td>{{ item.no }}</td>
            <td>{{ item.x }}</td>
            <td>{{ item.y }}</td>
            <td>{{ item.x2 }}</td>
            <td>{{ item.y2 }}</td>
            <td>{{ item.xy }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr>
    <h5>&Sigma;X = {{ $store.state.sum_x }}</h5>
    <h5>&Sigma;Y = {{ $store.state.sum_y }}</h5>
    <h5>&Sigma;X<sup>2</sup> = {{ $store.state.sum_x2 }}</h5>
    <h5>&Sigma;Y<sup>2</sup> = {{ $store.state.sum_y2 }}</h5>
    <h5>&Sigma;XY = {{ $store.state.sum_xy }}</h5>
    <hr>
  </div>
</template>
