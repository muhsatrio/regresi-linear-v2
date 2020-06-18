<template>
  <div id="app">
    <h2>Regresi Linear</h2>
    <InputBox />
    <Table v-if="$store.state.clicked" />
    <Calculation v-if="$store.state.clicked" />
    <Grafik v-if="$store.state.clicked" />
    <div class="footer">
      Copyright &copy; 2020 - <a target="_blank" href="https://instagram.com/muhsatrio.go">Muhammad Satrio Wicaksono</a><br>
      Developed with <a target="_blank" href="https://vuejs.org/">Vue</a>
      <br>
    </div>
  </div>
</template>

<script>

import InputBox from './components/InputBox';
import Calculation from './components/Calculation';
import Table from './components/Table';
import Grafik from './components/Grafik';

export default {
  name: 'App',
  components: {
    InputBox,
    Calculation,
    Table,
    Grafik
  }
}
</script>

<style>
#app {
  text-align: center;
  width: 100%;
  margin-top: 60px;
}
.footer {
  margin: 10px 0;
}
</style>
