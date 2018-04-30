<template>
  <feed v-bind:elements="reviews">
  </feed>
</template>

<script>
  import Feed from './Feed.vue'
  import reviews from './source'

  export default {
    components: {
	    Feed
    },
	  name: "books",
    data() {
      return {
        reviews,
      }
    }
  }
</script>
