<template>
  <div class="InputBox">
    <div v-if="!$store.state.clicked">
      <p>Masukkan jumlah baris:</p>
      <div class="row g-2">
        <div class="col">
          <input class="form-control" type="number" placeholder="Masukkan jumlah baris" v-model.number="$store.state.totalRow">
        </div>
        <div class="col-3">
          <button class="btn btn-primary" @click="$store.commit('initValues')">Generate</button>
        </div>
      </div>
      <br><br>
    </div>
    <div class="row">
      <div class="col"></div>
      <div class="col"><b>X</b></div>
      <div class="col"><b>Y</b></div>
    </div>
    <div class="eachRowInput row g-2" v-for="(item, index) in $store.getters.values" :key="index">
      <div class="col-2">{{ index + 1 }}</div>
      <div class="col">
        <input class="form-control" type="number" v-model.number="item.x">
      </div>
      <div class="col">
        <input class="form-control" type="number" v-model.number="item.y">
      </div>
    </div>
    <div v-if="$store.state.clicked" class="row justify-content-center">
      <button class="btn btn-primary centerPosition" @click="$store.commit('resetHandler')">Ulangi</button>
    </div>
    <div v-else class="row justify-content-center">
      <button class="btn btn-primary buttonSpace" @click="$store.commit('submitHandler')">Submit</button>
      <button class="btn btn-primary buttonSpace" aria-label="Remove row" @click="$store.commit('removeHandler')">↑</button>
      <button class="btn btn-primary buttonSpace" aria-label="Add row" @click="$store.commit('addHandler')">↓</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'InputBox',
    data() {
        return {
            totalRow: 2,
            values: []
        }
    },
    methods: {
        test() {
            console.log('test');
            console.log(this.$store.state);
        }
    },
    mounted() {
        this.$store.commit('initValues');
        console.log(this.$store.getters.values);
    },
    
}
</script>

<style>
    .InputBox {
        margin: 20px auto;
        width: 200px;
    }
    .eachRowInput {
        margin: 10px 0;
    }
    .buttonSpace {
        margin: 0 5px;
    }
    .centerPosition {
        margin: 0 auto;
    }
</style>