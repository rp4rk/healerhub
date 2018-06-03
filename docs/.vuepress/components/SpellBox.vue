<template>
  <div class="spellbox-inline">
    <Loader :hideText=true :isLoading="isLoading" size="12px"></Loader>
    <div class="spellbox-image-wrapper">
      <img class="spellbox-image" :src="this.getImageURI()" />
      <div class="spellbox-name">{{ this.currentSpell.Name }}</div>
    </div>
    <div class="spellbox-label">{{ label }}</div>
    <div v-if="!isLoading" v-show="this.showTooltip" class="spell-tooltip">
      {{ this.currentSpell.AuraDescriptionParsed }}

      <footer class='spell-tooltip-metadata'>
        {{ this.getCastTime() }} cast, 
        {{ this.currentSpell.Range.MaxEnemies }} yard range
      </footer>
    </div>
  </div>
</template>

<script>
import SpellComponent from './SpellComponent';

export default {
  extends: {
    props: [...SpellComponent.props],

    created: SpellComponent.created,

    methods: {
      ...SpellComponent.methods,
    },

    data() {
      return {
        ...SpellComponent.data(),
      };
    },
  },

  props: ['label'],
};
</script>

<style>
  .spellbox-inline {
    position: relative;
    margin-top: 15px;
    display: inline-flex;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: 1px solid rgba(0,0,0, 0.25);
    padding: 10px;
    max-width: 80px;
    text-align: center;
  }

  .spellbox-image-wrapper {
    margin-bottom: auto;
  }

  .spellbox-image {
    width: 64px;
    height: 64px;
  }

  .spellbox-name {
    margin-top: 8px;
  }

  .spellbox-label {
    margin-top: 12px;
    font-weight: 800;
  }
</style>

