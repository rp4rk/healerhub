<template>
  <div class="talent-row" v-bind:class="{ reverse: reverse }">
    <div class="talent-row-tier-container" >
      <h3 class="tier-label">TIER</h3>
      <h3 class="talent-row-tier">{{this.tier}}</h3>
    </div>
    <div class="talent-row-spells">
      <div v-bind:class="{ reverse: reverse }" v-for="(id, idx) in this.ids" class='talent-row-member'>
        
        <Talent :id=id :showDescription=correctPicks[idx]></Talent>
        <CheckCircle v-if="correctPicks[idx] && showPickIcon" fillColor='#3eaf7c'></CheckCircle>
        <AlertCircle v-if="!correctPicks[idx] && showPickIcon" fillColor='#c54732'></AlertCircle>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['ids', 'tier', 'correctPicks', 'showPickIcon', 'reverse'],
};
</script>

<style>
  .talent-row {
    margin: 30px 0;
    display: flex;
    align-items: center;
  }

  .reverse {
    flex-direction: row-reverse;
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

  .reverse.talent-row-member > *:not(:first-child) {
    margin: 0;
  }

  .reverse.talent-row-member > *:last-child {
    margin: 0 15px 0 0;
  }

  .talent-row-member > .talent {
    width: 100%;
  
  }
</style>

