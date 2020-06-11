<template>
  <div class="InputBox">
    <p>Masukkan jumlah baris:</p>
    <b-row>
        <b-col>
            <b-form-input type="number" placeholder="Masukkan jumlah baris" v-model="$store.state.totalRow" />
        </b-col>
        <b-col cols="3">
            <b-button variant="primary" @click="$store.commit('initValues')">Generate</b-button>
        </b-col>
    </b-row>
    <br><br>
    <b-row>
          <b-col>
          </b-col>
          <b-col>
              <b>X</b>
          </b-col>
          <b-col>
              <b>Y</b>
          </b-col>
    </b-row>
      <div class="eachRowInput" v-for="(item, index) in $store.getters.values" :key="index">
        <b-row>
            <b-col cols="2">
                {{ index+1 }}
            </b-col>
            <b-col>
                <b-form-input type="number" v-model="item.x" />
            </b-col>
            <b-col>
                <b-form-input type="number" v-model="item.y" />
            </b-col>
        </b-row>
      </div>
      <b-row>
        <b-button class="buttonSpace" variant="primary" @click="test">Submit</b-button>
        <b-button class="buttonSpace" variant="primary" @click="$store.commit('removeHandler')">
            <b-icon icon="chevron-up"></b-icon>
        </b-button>
        <b-button class="buttonSpace" variant="primary" @click="$store.commit('addHandler')">
            <b-icon icon="chevron-down"></b-icon>
        </b-button>
      </b-row>
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
</style>