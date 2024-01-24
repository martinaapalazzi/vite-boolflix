<script>

import { store } from '../store.js';

  export default {
    data() {
      return {
        
      }
    },
  }
</script>

<template>

  <div id="header">
    <div class="logo">
      Boolflix 
    </div>
    <form>
      <div>
        <input v-model="store.search" type="text" placeholder="Movies, shows, titles">
      </div>
      <div>
        <button>
          Search
        </button>
      </div>
    </form>

  </div>
  
</template>

<style lang="scss" scoped>

</style>
