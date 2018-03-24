<template>
  <review-layout>

  </review-layout>
</template>

<script>
  import ReviewLayout from '../../layouts/Review.vue'
  import reviews from './source'

  const product = window.location.hash.substr(1);
  const review = reviews[product];
  
  export default {
    components: {
	    ReviewLayout
    },
	  name: "review"
  }
</script>
