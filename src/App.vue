<template>
  <div id="app">
    <h2>Regresi Linear</h2>
    <InputBox />
    <Calculation />
  </div>
</template>

<script>

import InputBox from './components/InputBox';
import Calculation from './components/Calculation';

export default {
  name: 'App',
  components: {
    InputBox,
    Calculation
  }
}
</script>

<style>
#app {
  text-align: center;
  width: 100%;
  margin-top: 60px;
}
</style>
