<template>
  <review-layout>
    <div class="ui feed">
      <div class="ui feed item" v-for="book in reviews">
        {{book.title}}
      </div>
    </div>
  </review-layout>
</template>

<script>
  import ReviewLayout from '../../layouts/Review.vue'
  import reviews from './source'

  export default {
    components: {
	    ReviewLayout
    },
	  name: "feed",
    data() {
      return {
        reviews
      };
    },
  }
</script>
