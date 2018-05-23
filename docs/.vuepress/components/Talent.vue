<template>
  <div class="talent">
    <header>
      <div class="background-image" :style="{ 'background-image': 'url(' + this.getImageURI() + ')'} "></div>
      <div class="loader" v-bind:class="{ loading: isLoading }" :style="{ 'background-image': 'url(' + this.loadingImage + ')'} "></div>

      <span class="spell-name">{{ this.currentSpell.Name || 'Loading...' }}</span>
    </header>
    <main v-if="this.showDescription">
      {{ this.currentSpell.AuraDescriptionParsed }}
    </main>
    <footer v-if="this.showMetadata">
      <span class="spell-details">{{ this.getCastTime() }}s cast</span>
    </footer>
  </div>
</template>

<script>
  import axios from 'axios';
  import { API_URL, IMAGE_URL } from './util/constants';
  import { toSeconds } from './util/time';
  import loadingImage from '../public/img/question-mark.jpg';

  export default {
    props: ['id', 'showDescription', 'showMetadata'],

    created() {
      this.fetchSpellData();
    },

    methods: {
      getCastTime() {
        return toSeconds(this.currentSpell.CastingTimeMs);
      },
      getImageURI() {
        return (this.currentSpell.Icon && IMAGE_URL(this.currentSpell.Icon));
      },
      fetchSpellData() {
        this.isLoading = true;

        axios.get(`${API_URL}/${this.id}`)
          .then(({data}) => {
            this.spells = this.spells.concat(data);
            this.currentSpell = this.spells[0];
            this.isLoading = false;
          })
          .catch(err => this.isLoading = false);
      },
    },

    data() {
      return {
        currentSpell: false,
        isLoading: false,
        spells: [],
        loadingImage,
      };
    },
  }
</script>

<style>
  .talent {
    box-sizing: border-box;
    display: inline-block;
    overflow:hidden;

    border: 1px solid #ddd;
    min-width: 20%;
    min-height: 44px;
    width: calc(33% - 15px);

    margin-right: 15px;
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
    transition: filter 0.1s ease-in-out;
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
    box-shadow: 0 3px 3px 0 rgba(0,0,0, 0.1);
    border-radius: 5px;
    margin-right: 8px;
  }

  .talent .spell-name {
    display: inline;
    font-size: 1.05rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    
    background-color: rgba(0,0,0, 0.4);
    width: 100%;
    text-align: center;
    padding: 3px;
    color: white;
  }

  .talent main {
    background-color: white;
    border-top: 1px solid rgba(0,0,0, 0.1);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0, 0.05);

    font-size: 0.8rem;
    font-style: italic;
    font-weight: 400;
  }

  .talent footer {
    background-color: white;
    border-top: 1px solid rgba(0,0,0, 0.1);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0, 0.05);
  }

  .talent .spell-details {
    font-weight: 500;
    font-size: .8rem;
    font-style: italic;
  }
</style>
