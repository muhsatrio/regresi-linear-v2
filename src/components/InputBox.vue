<template>
  <div class="InputBox">
    <p>Masukkan jumlah baris:</p>
    <b-row>
        <b-col>
            <b-form-input type="number" placeholder="Masukkan jumlah baris" v-model="totalRow" />
        </b-col>
        <b-col cols="3">
            <b-button variant="primary" @click="initValues()">Generate</b-button>
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
      <div class="eachRowInput" v-for="(item, index) in values" :key="index">
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
        <!-- <b-col> -->
        <b-button class="buttonSpace" variant="primary" @click="test">Submit</b-button>
        <!-- </b-col> -->
        <!-- <b-col> -->
        <b-button class="buttonSpace" variant="primary" @click="removeHandler">
            <b-icon icon="chevron-up"></b-icon>
        </b-button>
        <!-- </b-col> -->
        <!-- <b-col> -->
        <b-button class="buttonSpace" variant="primary" @click="addHandler">
            <b-icon icon="chevron-down"></b-icon>
        </b-button>
        <!-- </b-col> -->
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
        initValues() {
            if (this.totalRow<2) {
                alert('Jumlah baris minimal 2');
            }
            else {
                this.values = [];
                for (let i=0;i<this.totalRow;i++) {
                    this.values = [...this.values, {
                        x: 0,
                        y: 0
                    }];
                }
            }
        },
        addHandler() {
            this.values = [...this.values, {
                x: 0,
                y: 0
            }];
        },
        removeHandler() {
            if (this.values.length <= 2) {
                alert('Jumlah baris minimal 2');
            }
            else {
                const tempValues = this.values.filter((eachValue, i) => {
                    return i<this.values.length-1;
                });
                this.values = tempValues;
            }
        },
        test() {
            console.log(this.values);
        }
    },
    mounted() {
        this.initValues();
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