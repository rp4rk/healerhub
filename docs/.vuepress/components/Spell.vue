<template>
  <span @mouseout="toggleTooltip(false)" @mouseover="toggleTooltip(true)" class="spell-inline">
    <Loader :hideText=true :isLoading="isLoading" size="12px"></Loader>
    <img class="spell-inline-image" :src="this.getImageURI()" />
    {{ this.currentSpell.Name }}

    <div v-if="!isLoading" v-show="this.showTooltip" class="spell-tooltip">
      {{ this.currentSpell.AuraDescriptionParsed }}

      <footer class='spell-tooltip-metadata'>
        {{ this.getCastTime() }} cast, 
        {{ this.currentSpell.Range.MaxEnemies }} yard range
      </footer>
    </div>
  </span>
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

  methods: {
    toggleTooltip(bool) {
      this.showTooltip = bool;
    },
  },


  data() {
    return {
      tooltipOffset: 0,
      showTooltip: false,
    };
  },
};
</script>

<style>
.spell-inline {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  max-height: 26px;
  border-radius: 3px;
  padding-right: 8px;
  font-weight: 400;
  color: var(--bright-highlight);

  min-width: 60px;
}

.spell-inline:hover {
  cursor: pointer;
}

.spell-inline-image {
  width: 16px;
  height: 16px;

  border-radius: 3px 0 0 3px;

  display: inline-block;
  vertical-align: middle;
  margin-left: 5px;
  margin-right: 5px;
}

.spell-tooltip {
  background-color: var(--main-bg-color);
  color: var(--offwhite);
  border: 1px solid rgba(0,0,0, 0.2);
  padding: 5px;

  z-index: 10;
  position: absolute;
  bottom: 0;
  left: 0;

  font-size: 0.8rem;
  font-style: italic;
  font-weight: 400;

  width: 300px;
  transform: translateY(100%);
}

.spell-tooltip-metadata {
  border-top: 1px solid rgba(0,0,0, 0.1);
  font-weight: 400;
  margin-top: 5px;
  padding-top: 5px;
}
</style>

