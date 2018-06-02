<template>
  <div class="quick-read">
    <div class="quick-read-header">Level of detail</div>
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

  background-color: var(--main-bg-color);
  padding: 10px;
  color: white;
  font-weight: 500;

  border: 1px solid rgba(0,0,0, 0.2);
}

.quick-read-header {
  padding-bottom: 10px;
}
</style>
