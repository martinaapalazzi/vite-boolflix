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
      }
    },
    props: {
      
    }
}

</script>

<template>

  <h1>SERIES</h1>

  <ul>
    <li v-for="(serie, index) in store.series" :key="index">
      <div>
        La serie è {{ serie.name }}
      </div>
      <div>
        Il titolo originale è {{ serie.original_name }}
      </div>
      <div>
        bandiera: {{ serie.original_language }}
        <img :src="GetFlag(serie.original_language)" :alt="serie.original_language">
      </div>
      <div>
        Il voto per questo film è {{ serie.vote_average }}
      </div>
      <hr>
    </li>
  </ul>

</template>

<style lang="scss" scoped>


</style>
