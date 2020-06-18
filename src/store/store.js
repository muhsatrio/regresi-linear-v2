import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        totalRow: 3,
        values: [],
        clicked: false,
        sum_x: 0,
        sum_y: 0,
        sum_x2: 0,
        sum_y2: 0,
        sum_xy: 0,
        b: 0,
        deltaY: 0,
        deltaB: 0,
        tingkatKetelitian: 0
    },
    mutations: {
        initValues (state) {
            if (state.totalRow<3) {
                alert('Jumlah baris minimal 3');
            }
            else {
                state.values = [];
                for (let i=0;i<state.totalRow;i++) {
                    state.values = [...state.values, {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 0,
                        xy: 0,
                    }];
                }
            }
        },
        addHandler (state) {
            state.values = [...state.values, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 0,
                xy: 0,
            }];
        },
        removeHandler (state) {
            if (state.values.length <= 3) {
                alert('Jumlah baris minimal 3');
            }
            else {
                const tempValues = state.values.filter((eachValue, i) => {
                    return i<state.values.length-1;
                });
                state.values = tempValues;
            }
        },
        resetHandler (state) {
            state.totalRow = 3;
            state.values = [];
            state.sum_x = 0;
            state.sum_y = 0;
            state.sum_x2 = 0;
            state.sum_y2 = 0;
            state.sum_xy = 0;
            state.b = 0;
            state.deltaY = 0;
            state.deltaB = 0;
            state.tingkatKetelitian = 0;
            for (let i=0;i<state.totalRow;i++) {
                state.values = [...state.values, {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    xy: 0,
                }];
            }
            console.log(state.values);
            state.clicked = false;
        },
        submitHandler (state) {
            state.values.forEach(eachValue => {
                eachValue.x2 = eachValue.x * eachValue.x;
                eachValue.y2 = eachValue.y * eachValue.y;
                eachValue.xy = eachValue.x * eachValue.y;
                state.sum_x += eachValue.x;
                state.sum_y += eachValue.y;
                state.sum_x2 += eachValue.x2;
                state.sum_y2 += eachValue.y2;
                state.sum_xy += eachValue.xy;
            });
            state.b = ((state.values.length*state.sum_xy)-(state.sum_x*state.sum_y))/((state.values.length*state.sum_x2)-(state.sum_x*state.sum_x));
            state.deltaY = (1/(state.values.length-2)) * (state.sum_y2-(((state.sum_x2*(state.sum_y*state.sum_y))-(2*state.sum_x*state.sum_y*state.sum_xy)+(state.values.length*state.sum_xy*state.sum_xy))/((state.values.length*state.sum_x2)-(state.sum_x*state.sum_x))));
            state.deltaB = Math.sqrt(state.deltaY) * Math.sqrt((state.values.length)/((state.values.length*state.sum_x2)-(state.sum_x*state.sum_x)));
            state.tingkatKetelitian = (1-(state.deltaB/state.b))*100;
            state.clicked = true;
            console.log(state);
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