<template>
  <div>
    <slot v-if="readerHasSkills()">

    </slot>
  </div>
</template>

<script>
import quickRead from './store/quickRead';

export default {
  props: ['level', 'onlyFor'],

  methods: {
    readerHasSkills() {
      if (this.onlyFor) {
        return this.onlyFor.toLowerCase() === quickRead.getQuickReadLevel().toLowerCase();
      }
      
      return quickRead.isReadableWithLevel(this.level);
    },
  },

  data() {
    return {
      qrState: quickRead.getState(),
    };
  },
};
</script>
