<template>
  <div class="talent-row">
    <div class="talent-row-tier-container">
      <h3 class="tier-label">TIER</h3>
      <h3 class="talent-row-tier">{{this.tier}}</h3>
    </div>
    <div class="talent-row-spells">
      <div v-for="(id, idx) in this.ids" class='talent-row-member'>
        
        <Talent :id=id :showDescription=correctPicks[idx]></Talent>
        <CheckIcon v-if="correctPicks[idx] && showPickIcon" fillColor='#3eaf7c'></CheckIcon>
        <AlertOutline v-if="!correctPicks[idx] && showPickIcon" fillColor='#c54732'></AlertOutline>
      </div>
    </div>
  </div>
</template>

<script>
import CheckIcon from "vue-material-design-icons/check-circle-outline.vue";
import AlertOutline from "vue-material-design-icons/alert-circle-outline.vue";

export default {
  props: ['ids', 'tier', 'correctPicks', 'showPickIcon'],

  components: {
    CheckIcon,
    AlertOutline,
  },

  data() {
    return {};
  },
};
</script>

<style>
  .talent-row {
    display: flex;
    align-items: center;
  }

  .talent-row-tier-container {
    min-width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .talent-row-tier {
    display: inline-block;

    border: 3px solid #3eaf7c;;
    padding: 15px;
    border-radius: 50%;
  }

  .tier-label {
    position: absolute;
    top: -35px;
  }

  .talent-row-spells {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .talent-row-member {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .talent-row-member > *:not(:first-child) {
    margin-left: 15px;
  }

  .talent-row-member > .talent {
    width: 100%;
  
  }
</style>

