<template>
  <div class="History" v-if="$store.getters.history.length > 0">
    <hr>
    <h3>Riwayat Perhitungan</h3>
    <b-table striped hover bordered :items="$store.getters.history" :fields="fields">
        <template v-slot:cell(b)="data">
            {{ data.value ? data.value.toFixed(4) : '-' }}
        </template>
        <template v-slot:cell(deltaB)="data">
            {{ data.value ? data.value.toFixed(4) : '-' }}
        </template>
        <template v-slot:cell(tingkatKetelitian)="data">
            {{ data.value ? data.value.toFixed(2) : '-' }}%
        </template>
        <template v-slot:cell(muat)="data">
            <b-button size="sm" variant="primary" @click="loadItem(data.item)" class="mr-2">
                Muat
            </b-button>
            <b-button size="sm" variant="danger" @click="$store.commit('removeHistoryItem', data.item.id)">
                Hapus
            </b-button>
        </template>
    </b-table>
    <b-button variant="danger" size="sm" @click="$store.commit('clearHistory')">Hapus Semua Riwayat</b-button>
  </div>
</template>

<script>
export default {
    name: 'History',
    data() {
        return {}
    },
    computed: {
        fields() {
            return [
                { key: 'timestamp', label: 'Waktu' },
                { key: 'totalRow', label: 'Jml Baris' },
                { key: 'b', label: 'b' },
                { key: 'deltaB', label: 'Δb' },
                { key: 'tingkatKetelitian', label: 'Ketelitian' },
                { key: 'muat', label: 'Aksi' }
            ]
        }
    },
    methods: {
        loadItem(item) {
            this.$store.commit('loadHistoryItem', item);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    },
    mounted() {
        this.$store.commit('loadHistory');
    }
}
</script>

<style scoped>
.History {
    margin: 40px auto;
    max-width: 800px;
}
h3 {
    margin-bottom: 20px;
}
</style>
