<script>

  import AppHeader from "./components/AppHeader.vue";
  import AppMain from "./components/AppMain.vue";
  import AppFooter from "./components/AppFooter.vue";
  import { store } from './store.js';
  import axios from 'axios';

  export default {
    data() {
      return {
        store
      }
    },
    components: {
      AppHeader,
      AppMain,
      AppFooter
    },
    methods: {
      
    },
    mounted() {
      axios
      .get(this.store.APIMovies, {
        params: {
          api_key: this.store.APIKey,
          query: 'fast'
        }
      })
      .then((response)=>
      console.log(response))

      axios
      .get(this.store.APISeries, {
        params: {
          api_key: this.store.APIKey,
          query: 'fast'
        }
      })
      .then((response)=>
      console.log(response))
    },
  }
</script>

<template>

  <AppHeader />

  <AppMain />

  <AppFooter />

</template>

<style lang="scss">
@use "assets/scss/main.scss" as *;
@import "assets/scss/partials/reset.scss";

</style>
