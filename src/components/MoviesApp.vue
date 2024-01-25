<script>

import axios from 'axios';
import { store } from '../store';

export default {
    data() {
      return {
        store
      }
    },
    methods: {
      getFlag: function (language) {

        let flagLink= 'https://flagicons.lipis.dev/flags/4x3/';

        if (language == 'en') {
          flagLink += 'gb';
        }
        else if (language == 'ja') {
          flagLink += 'jp';
        }
        else {
          flagLink += language;
        }

        flagLink += '.svg';

        return flagLink;
      },
      moviePoster: function (poster) {
      let posterLink = 'https://image.tmdb.org/t/p/w342';
      
      posterLink += poster;

      return posterLink;
      },
    },
    props: {
      
    }
}

</script>

<template>

  <h1>MOVIES</h1>
  <ul>
    <li v-for="(movie, index) in store.movies" key="index">
      <div class="poster-container">
        <img :src="moviePoster(movie.poster_path)" :alt="movie.poster_path">
      </div>
      <div>
        Il film è {{ movie.title }}
      </div>
      <div>
        Il titolo originale è {{ movie.original_title }}
      </div>
      <div class="flag-container">
        bandiera: {{ movie.original_language }}
        <img :src="getFlag(movie.original_language)" :alt="movie.original_language">
      </div>
      <div>
        Il voto per questo film è {{ parseInt((movie.vote_average)/2) }}
        <i v-for="star in 5" class="fa-star" 
          :class="{ 
          'fa-solid': star <= parseInt(movie.vote_average / 2), 
          'fa-regular': star > parseInt(movie.vote_average / 2) 
          }" style="color: #ffff00;">
        </i>
      </div>
      <hr>
      <div :class="getStar()">

      </div>
    </li>
  </ul>
  <br>
  <br>
  
</template>

<style lang="scss" scoped>

.flag-container {
  width: 80px;
}

.poster-container {
  width: 100px;
}

</style>
