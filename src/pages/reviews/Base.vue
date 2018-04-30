<template>
  <review-layout>
    <h1 class="ui header">
      {{title}}
      <div class="sub header">{{author}}</div>
      <h4>
        {{genres.join(', ')}}
      </h4>
    </h1>
    <p v-for="paragraph in review">
      {{paragraph}}
    </p>
    <i class="icons" v-for="n in rating">
      <i class="star icon"></i>
    </i>
  </review-layout>
</template>

<script>
  import ReviewLayout from '../../layouts/Review.vue'
  import reviews from './source'

  const product = window.location.pathname.split('/')[2];
  const review = reviews[product];

  if (!review) {
    window.location.replace('/reviews');
  }

  export default {
    components: {
	    ReviewLayout
    },
    data() {
      return review;
    },
	  name: "base"
  }
</script>
