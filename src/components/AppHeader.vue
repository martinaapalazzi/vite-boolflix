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
        this.store.search = ''
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
        this.store.search = ''
      })
      }
    },
  }
</script>

<template>

  <div id="header">
    <div class="navbar-logo-container">
      <div class="logo">
        <img src="/src/assets/NetflixLogo.png" alt="NetflixLogo"> 
      </div>
      <div>
        <nav>
          <div class="navbar-nav">
            <div class="d-flex">
              <li class="nav-item ms-3 me-3">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item me-3">
                <a class="nav-link active" aria-current="page" href="#">
                  Movies
                </a>
              </li>
              <li class="nav-item me-3">
                <a class="nav-link active" aria-current="page" href="#">
                 Tv Shows
                </a>
              </li>
              <li class="nav-item me-3">
                <a class="nav-link active" aria-current="page" href="#">
                  My List
                </a>
              </li>
            </div>
          </div>
        </nav>
      </div>
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
