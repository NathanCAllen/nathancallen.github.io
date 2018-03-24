<template>
  <review-layout>
    <div>
      <h2 class="ui header">
        Hi! Welcome to my personal web page. You'll find my bio and resume in the
        menu above, as well as a link to my Github page. Thanks for stopping by!
      </h2>
      <div>
        <div class="ui label">
          Me with some delicious hot cocoa, 2017
        </div>
      </div>
    </div>
  </review-layout>
</template>

<script>
  import ReviewLayout from '../../layouts/Review.vue'

  export default {
    components: {
	    ReviewLayout
    },
	  name: "home"
  }
</script>
