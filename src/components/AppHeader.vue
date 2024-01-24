<script>

import axios from 'axios';
import { store } from '../store.js';

  export default {
    data() {
      return {
        store
      }
    },
    methods: {
      userSearch: function () {
        axios
        .get(this.store.APIMovies, {
        params: {
          api_key: this.store.APIKey,
          query: this.store.search
        }
      })
      .then((response)=> {
        this.store.movies = response.data.results
        console.log(this.store.movies)
      })

      axios
      .get(this.store.APISeries, {
        params: {
          api_key: this.store.APIKey,
          query: this.store.search
        }
      })
      .then((response)=>{
        this.store.series = response.data.results
        console.log(this.store.series)
      })
      }
    },
  }
</script>

<template>

  <div id="header">
    <div class="logo">
      BOOLFLIX 
    </div>
    <div class="search-bar">
      <div>
        <input @keyup.enter="userSearch()" v-model="store.search" type="text" placeholder="Movies, shows, titles">
      </div>
      <div>
        <button @click="userSearch()">
          Search
        </button>
      </div>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>

</style>
