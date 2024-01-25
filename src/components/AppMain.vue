<script>

  import axios from 'axios';
  import { store } from '../store.js';
  import MoviesApp from './MoviesApp.vue';
  import SeriesApp from './SeriesApp.vue';

  export default {
    data() {
        return {
            store
        };
    },
    components: { 
      MoviesApp, 
      SeriesApp 
    }
}
</script>

<template>

  <div id="main">

    <MoviesApp />
    <SeriesApp />

  </div>



</template>

<style lang="scss" scoped>

</style>
