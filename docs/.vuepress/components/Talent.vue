<template>
  <div class="talent" @click="toggleDescription" v-bind:class="{ unfocused: !mutableShowDescription }">
    <header>
      <div class="background-image" :style="{ 'background-image': 'url(' + this.getImageURI() + ')'} "></div>
      <div class="loader" v-bind:class="{ loading: isLoading }" :style="{ 'background-image': 'url(' + this.loadingImage + ')'} "></div>

      <span class="spell-name">{{ this.currentSpell.Name || '' }}</span>
    </header>
    <main v-if="this.mutableShowDescription">
      {{ this.currentSpell.AuraDescriptionParsed }}
    </main>
    <footer class="spell-details" v-if="this.showMetadata">
      <span class="spell-metadata">{{ this.getCastTime() }}</span>
      <span v-if="this.currentSpell.Range && this.currentSpell.Range.MaxEnemies" class="spell-metadata">
        {{ this.currentSpell.Range.MaxEnemies }} yard range
      </span>
    </footer>
  </div>
</template>

<script>
import SpellComponent from './SpellComponent';
import loadingImage from '../public/img/question-mark.jpg';

export default {
  extends: {
    props: [...SpellComponent.props, 'showDescription', 'showMetadata'],

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
    toggleDescription() {
      this.mutableShowDescription = !this.mutableShowDescription;
    },
  },

  data() {
    return {
      loadingImage,
      mutableShowDescription: this.showDescription,
    };
  },
};
</script>

<style>
.talent {
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;

  border: 1px solid #ddd;
  width: 100%;
  min-height: 44px;

  margin-right: 15px;
  margin-top: 5px;
  transition: filter 0.5s ease-in-out;

}

.unfocused {
  filter: saturate(0.1);
}

.unfocused:hover {
  filter: saturate(0.6);
}

.talent:hover {
  cursor: pointer;
}

.talent > * {
  padding: 8px 8px 8px 8px;
  box-sizing: border-box;
}

.talent .background-image {
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-size: cover;

  filter: blur(5px) opacity(0.8);
  transition: filter 0.5s ease-in-out;
}

.loader {
  transition: opacity 0.8s ease-out;
  opacity: 0;

  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-size: cover;
  filter: blur(10px);
}

.loader.loading {
  opacity: 1;
}

.talent:hover .background-image {
  filter: blur(10px) opacity(0.95);
}

.talent header {
  display: flex;
  align-items: flex-start;
  position: relative;
}

.talent .icon {
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-right: 8px;
}

.talent .spell-name {
  display: inline-block;
  font-size: 1.05rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  text-align: center;
  padding: 3px;
  color: white;
}

.talent main {
  background-color: white;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.05);

  font-size: 0.8rem;
  font-style: italic;
  font-weight: 400;
}

.talent footer {
  background-color: white;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  /* box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.05); */
}

.talent .spell-details {
  font-weight: 500;
  font-size: 0.8rem;
  font-style: italic;

  display: flex;
  justify-content: space-between;
}

@media screen and (min-width: 769px) {
  .talent {
    min-height: 44px;
    width: calc(33% - 15px);

    margin-right: 15px;
  }
}
</style>
