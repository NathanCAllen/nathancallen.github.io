<template>
  <div>
    <div class="ui large centered inverted menu">
      <a class="item">
        <v-link href="/">Home</v-link>
      </a>
      <a class="item">
        <v-link href="/bio">Bio</v-link>
      </a>
      <a class="item">
        <v-link href="/resume">Resume</v-link>
      </a>
      <a class="item">
        <a href="https://www.github.com/nathancallen">
          Github Page
        </a>
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
