<template>
  <div class="quick-read">
    Level of detail:
    <select v-model="currentQuickReadLevel" @change="setQuickReadLevel(currentQuickReadLevel)">
      <option v-for="option in this.quickReadOptions">{{option}}</option>
    </select>
  </div>
</template>

<script>
import quickRead from './store/quickRead';

export default {
  computed: {
    quickReadOptions() {
      return quickRead.getQuickReadLevels();
    },
  },

  methods: {
    setQuickReadLevel: option => {
      quickRead.setQuickReadLevel(option);
    },
  },

  data() {
    return {
      currentQuickReadLevel: quickRead.getQuickReadLevel(),
    };
  },
};
</script>


<style>
.quick-read {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: block;
  z-index: 1000;
}
</style>
