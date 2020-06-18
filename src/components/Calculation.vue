<template>
  <div class="Calculation">
        <h2>Pengolahan Data</h2>
        <br>
        <vue-mathjax :formula="equationb" />
        <br>
        <vue-mathjax :formula="equationDeltaY2" />
        <br>
        <vue-mathjax :formula="equationDeltaB" />
        <br>
        <vue-mathjax :formula="pelaporan" />
        <br>
        <vue-mathjax :formula="tingkatKetelitian" />
        <hr>
  </div>
</template>

<script>

export default {
    name: 'Calculation',
    data() {
        return {
            equationb: `$$ b = {N \\sum (X_i Y_i) - \\sum X_i \\sum Y_i  \\over N \\sum X_i^2 - ( \\sum X_i )^2 } = { ${this.$store.state.values.length} \\times ${this.$store.state.sum_xy} - ${this.$store.state.sum_x} \\times ${this.$store.state.sum_y}  \\over ${this.$store.state.values.length} \\times ${this.$store.state.sum_x2} - (${this.$store.state.sum_x})^2} = ${this.$store.state.b} $$`,
            equationDeltaY2: `$$ \\Delta y^2 = {1 \\over N-2} \\left\\lbrack \\sum Y_i^2 - { \\sum X_i^2 (\\sum Y_i)^2 - 2 \\sum X_i \\sum Y_i \\sum (X_i Y_i) + N (\\sum X_i Y_i)^2  \\over N \\sum X_i^2 - ( \\sum X_i )^2  } \\right\\rbrack = {1 \\over ${this.$store.state.values.length}-2} \\left\\lbrack ${this.$store.state.sum_y2} - { ${this.$store.state.sum_x2} \\times (${this.$store.state.sum_y})^2 - 2 \\times ${this.$store.state.sum_x} \\times ${this.$store.state.sum_y} \\times ${this.$store.state.sum_xy} + ${this.$store.state.values.length} \\times (${this.$store.state.sum_xy})^2  \\over ${this.$store.state.values.length} \\times ${this.$store.state.sum_x2} - (${this.$store.state.sum_x})^2  } \\right\\rbrack = ${this.$store.state.deltaY} $$`,
            equationDeltaB: `$$ \\Delta b = \\Delta y \\sqrt{ N \\over N \\sum X_i^2 - ( \\sum X_i )^2 } = ${Math.sqrt(this.$store.state.deltaY)}  \\sqrt{ ${this.$store.state.values.length} \\over ${this.$store.state.values.length} \\times ${this.$store.state.sum_x2} - (${this.$store.state.sum_x})^2 } = ${this.$store.state.deltaB} $$`,
            pelaporan: `$$ Pelaporan \\ (b \\pm \\Delta b) = ${this.$store.state.b} \\pm ${this.$store.state.deltaB} $$`,
            tingkatKetelitian: `$$ TK = 1 - { \\Delta b \\over b } \\times 100 \\% = 1 - {${this.$store.state.deltaB} \\over ${this.$store.state.b}} \\times 100 \\% = ${this.$store.state.tingkatKetelitian} \\% $$`

        }
    },
}
</script>

<style>
    .Calculation {
        margin: 20px 0;
    }
</style>