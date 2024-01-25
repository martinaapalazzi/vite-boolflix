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
  <div class="singleapp-container">

    <div class="d-flex align-items-center">
      <h1 class="me-3">
        Movies  
      </h1>
      <span>
       <i class="fa-solid fa-chevron-right fa-beat fa-lg" style="color: #ffffff;"></i>
      </span>
    </div>

    <ul class="content-container">
      <li class="card" v-for="(movie, index) in store.movies" key="index">
        <div class="poster-container">
          <img :src="moviePoster(movie.poster_path)" :alt="movie.poster_path">
        </div>
        <div class="info-movie">
          <h3>
            {{ movie.title }}
          </h3>
         <h5>
          {{ movie.original_title }}
         </h5>
          <div class="flag-container">
            <img :src="getFlag(movie.original_language)" :alt="movie.original_language">
          </div>
          <div>
            Rating:
           <i v-for="star in 5" class="fa-star" 
             :class="{ 
             'fa-solid': star <= parseInt(movie.vote_average / 2), 
             'fa-regular': star > parseInt(movie.vote_average / 2) 
              }"
              style="color: #ffff00;">
           </i>
          </div>
        </div>
      </li>
    </ul>

  </div>
  
</template>

<style lang="scss" scoped>

.flag-container {
  width: 80px;
}

.poster-container {
  width: 100px;
}

</style>
