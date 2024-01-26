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
      seriePoster: function (poster) {
      let posterLink = 'https://image.tmdb.org/t/p/w342';
      
      posterLink += poster;

      return posterLink;

      }
    },
    props: {
      
    }
}

</script>

<template>

  <div class="singleapp-container">

    <div class="d-flex align-items-center">
      <h1 class="me-3">
        Tv Shows 
      </h1>
      <span>
       <i class="fa-solid fa-chevron-right fa-beat fa-lg" style="color: #ffffff;"></i>
      </span>
    </div>

    <ul class="content-container">
      <li class="card" v-for="(serie, index) in store.series" :key="index">
        <div class="poster-container">
          <img :src="seriePoster(serie.poster_path)" :alt="serie.poster_path">
        </div>
        <div class="info-movie">
          <h6>
            {{ serie.name }}
          </h6>
          <p>
            {{ serie.original_name }}
          </p>
          <div class="flag-container">
            <img :src="getFlag(serie.original_language)" :alt="serie.original_language">
          </div>
          <div>
            Rating:
             <i v-for="star in 5" class="fa-star" 
              :class="{ 
              'fa-solid': star <= Math.ceil(serie.vote_average / 2), 
              'fa-regular': star > Math.ceil(serie.vote_average / 2) 
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
