<template>
  <div id="app">
    <h2>Regresi Linear</h2>
    <InputBox />
    <Table v-if="$store.state.clicked" />
    <Calculation v-if="$store.state.clicked" />
    <Grafik v-if="$store.state.clicked" />
    <div class="footer">
      Copyright &copy; 2017 - <a target="_blank" href="https://instagram.com/muhsatrio__">Muhammad Satrio Wicaksono</a><br>
      Created to support <a target="_blank" href="https://labfisdas-telu.com">Laboratorium Fisika Dasar Telkom University</a><br>
      Source code could be seen <a href="https://github.com/muhsatrio/regresi-linear-v2">here</a><br>
      <b>#TRA</b> <b>#MSIAYE</b><br>
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
