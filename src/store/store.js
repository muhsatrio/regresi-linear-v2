import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        totalRow: 2,
        values: [],
    },
    mutations: {
        initValues (state) {
            if (state.totalRow<2) {
                alert('Jumlah baris minimal 2');
            }
            else {
                state.values = [];
                for (let i=0;i<state.totalRow;i++) {
                    state.values = [...state.values, {
                        x: 0,
                        y: 0
                    }];
                }
            }
        },
        addHandler (state) {
            state.values = [...state.values, {
                x: 0,
                y: 0
            }];
        },
        removeHandler (state) {
            if (state.values.length <= 2) {
                alert('Jumlah baris minimal 2');
            }
            else {
                const tempValues = state.values.filter((eachValue, i) => {
                    return i<state.values.length-1;
                });
                state.values = tempValues;
            }
        }
    },
    getters: {
        totalRow: state => {
            return state.totalRow;
        },
        values: state => {
            return state.values;
        }
    }
});

export default store;