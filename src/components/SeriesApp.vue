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

    <h1>
    SERIES
    </h1>

    <ul class="content-container">
      <li class="card" v-for="(serie, index) in store.series" :key="index">
        <div class="poster-container">
          <img :src="seriePoster(serie.poster_path)" :alt="serie.poster_path">
        </div>
        <div>
          La serie è {{ serie.name }}
        </div>
        <div>
         Il titolo originale è {{ serie.original_name }}
        </div>
        <div class="flag-container">
          <img :src="getFlag(serie.original_language)" :alt="serie.original_language">
        </div>
        <div>
          Il voto per questo film è:
          <i v-for="star in 5" class="fa-star" 
            :class="{ 
            'fa-solid': star <= parseInt(serie.vote_average / 2), 
            'fa-regular': star > parseInt(serie.vote_average / 2) 
            }"
            style="color: #ffff00;">
          </i>
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
