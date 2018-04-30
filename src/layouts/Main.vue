<template>
  <div>
    <div class="ui large centered inverted menu">
      <v-link class="item" href="/">Home</v-link>
      <v-link class="item" href="/bio">Bio</v-link>
      <v-link class="item" href="/resume">Resume</v-link>
      <a class="item" href="https://www.github.com/nathancallen" target="_blank">
        Github Page
      </a>
    </div>
    <div class="ui center aligned segment basic">
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
