<template>
  <div class="History" v-if="$store.getters.history.length > 0">
    <hr>
    <h3>Riwayat Perhitungan</h3>
    <div class="table-responsive">
      <table class="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>Waktu</th>
            <th>Jml Baris</th>
            <th>b</th>
            <th>Δb</th>
            <th>Ketelitian</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in $store.getters.history" :key="item.id">
            <td>{{ item.timestamp }}</td>
            <td>{{ item.totalRow }}</td>
            <td>{{ item.b ? item.b.toFixed(4) : '-' }}</td>
            <td>{{ item.deltaB ? item.deltaB.toFixed(4) : '-' }}</td>
            <td>{{ item.tingkatKetelitian ? item.tingkatKetelitian.toFixed(2) : '-' }}%</td>
            <td>
              <button class="btn btn-primary btn-sm me-2" @click="loadItem(item)">Muat</button>
              <button class="btn btn-danger btn-sm" @click="$store.commit('removeHistoryItem', item.id)">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <button class="btn btn-danger btn-sm" @click="$store.commit('clearHistory')">Hapus Semua Riwayat</button>
  </div>
</template>

<script>
export default {
    name: 'History',
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
