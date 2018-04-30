<template>
  <div>
    <div class="ui large centered inverted menu">
      <v-link class="item" href="/reviews">Home</v-link>
      <v-link class="item" href="/reviews/books">Books</v-link>
      <!-- <v-link class="item" href="/reviews/games">Games</v-link> -->
    </div>
    <div class="ui container segment basic">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import VLink from '../components/VLink.vue'

  export default {
    components: {
      VLink
    }
  }
</script>

<style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 15px 30px;
    background: #f9f7f5;
  }
</style>
