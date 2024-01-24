<script>

import axios from 'axios';
import { store } from '../store';

export default {
    data() {
      return {
        store
      }
    },
    props: {
      
    }
}

</script>

<template>

  <div>
    <div v-for="(movie, index) in store.movies">
      <span>
        Il film è {{ movie.title }}
      </span>
      <span>
        Il titolo originale è {{ movie.original_title }}
      </span>
      <span>
        La lingua originale è {{ movie.original_language }}
      </span>
      <span>
        Il voto per questo film è {{ movie.vote_average }}
      </span>
    </div>

  </div>
  
</template>

<style lang="scss" scoped>


</style>
