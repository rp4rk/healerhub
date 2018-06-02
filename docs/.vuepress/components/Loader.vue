<template>
  <div class="loader" v-if="isLoading">
    <div class="loader-wrapper">
      <scale-loader class="loader-widget" :loading="isLoading" color='var(--highlight)' :height="size || '24px'" width="2px"></scale-loader>
      <div v-if="!hideText" class="loading-text">Loading...</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isLoading', 'size', 'hideText'],
};
</script>

<style>
.loader {
  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--main-bg-color);
  z-index: 10;
}

.loader-wrapper {
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.loader-widget {
  margin-right: 10px;
}

.loading-text {
  text-align: center;
  font-size: 0.8rem;
  flex-wrap: wrap;
}
</style>
