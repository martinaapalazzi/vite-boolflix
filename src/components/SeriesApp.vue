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
    <div v-for="(serie, index) in store.series" key="index">
      <span>
        La serie è {{ serie.name }}
      </span>
      <span>
        Il titolo originale è {{ serie.original_name }}
      </span>
      <span>
        La lingua originale è {{ serie.original_language }}
      </span>
      <span>
        Il voto per questo film è {{ serie.vote_average }}
      </span>
      <span>
        Il voto per questo film è {{ serie.vote_average }}
      </span>
    </div>
  </div>

</template>

<style lang="scss" scoped>


</style>
