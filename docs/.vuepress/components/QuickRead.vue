<template>
  <div @click="setQuickReadLevel" class="quick-read">
    {{ this.prompt }}
  </div>
</template>

<script>
import quickRead from './util/quickRead';

const QUICK_READ_PROMPTS = [
  'HealerHub Picture Book Mode',
  'Toggle Casual',
  'Ook ook',
  '"Healers shouldn\'t DPS"',
];

export default {
  computed: {
    prompt() {
      return QUICK_READ_PROMPTS[
        Math.floor(Math.random() * QUICK_READ_PROMPTS.length)
      ];
    },
  },

  methods: {
    setQuickReadLevel: () => {
      console.log(
        `Current quickRead level is ${quickRead.getQuickReadLevel()}`
      );
      quickRead.setQuickReadLevel('Expert');
    },
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
