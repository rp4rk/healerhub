<template>
  <div class="talent">
    <h1>{{ value }}</h1>
  </div>
</template>

<script>
  import axios from 'axios';
  import { API_URL } from './util/constants';

  export default {
    props: ['id'],

    created() {
      this.fetchSpellData();
    },

    methods: {
      fetchSpellData() {
        this.isLoading = true;

        axios.get(`${API_URL}/${this.id}`)
          .then(({data}) => {
            console.log(data);
          })
          .catch(err => this.isLoading = false);
      },
    },

    data() {
      return {
        isLoading: false,
        value: this.id,
      };
    },
  }
</script>
