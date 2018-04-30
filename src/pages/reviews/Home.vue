<template>
  <review-layout>
    <div>
      <!-- <h2 class="ui header left aligned"> -->
      <p>
        Thanks for visiting my review site! My name is Nathan Allen. I'm
        currently a Computer Science and Physics major at Tufts University. I
        try to read as much as I can in my spare time, and page is an effort to
        incentivise that.
        <br><br>
        I suppose I should talk a bit about my biases and preferences. As you
        can probably tell, I read a lot of Science Fiction and Fantasy books.
        Series with large, detailed worlds, peoples, and systems appeal strongly
        to me, as well as stories that explore an idea or belief, in the style
        of H.G. Wells. Examples include Brandon Sanderson's The Stormlight
        Chronicles, R.A. Salvatore's Drizzt Do'Urden series, and Isaac Asimov's
        Foundation series.
      <!-- </h2> -->
      </p>
    </div>
  </review-layout>
</template>

<script>
  import ReviewLayout from '../../layouts/Review.vue'
  // TODO: change width of above text box

  export default {
    components: {
	    ReviewLayout
    },
	  name: "home"
  }
</script>
