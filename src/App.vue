<script>

  import AppHeader from "./components/AppHeader.vue";
  import AppMain from "./components/AppMain.vue";
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
      AppMain
    },
    methods: {
      
    },
  }
</script>

<template>

  <AppHeader />

  <AppMain />

</template>

<style lang="scss">
@use "assets/scss/main.scss" as *;
@import "assets/scss/partials/reset.scss";

</style>
