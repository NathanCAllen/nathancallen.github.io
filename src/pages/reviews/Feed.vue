<template>
  <review-layout>
    <div class="ui feed">
      <div class="event" v-for="item in elements">
        <v-link class="ui segment" href="/reviews">
          <div class="label">
            <p id="titleandauthor">
              <strong>{{item.title}}</strong> - {{item.author}}
            </p>
          </div>
          <div class="content">
            <div>
              {{item.genres.join(', ')}}
            </div>
            <div class="summary">
              <div v-text="getPreview(item.review)">
              </div>
            </div>
            <div class="meta">
              <i class="icons" v-for="n in item.rating">
                <i class="star icon"></i>
              </i>
            </div>
          </div>
        </v-link>
      </div>
    </div>
  </review-layout>
</template>

<script>
  import ReviewLayout from '../../layouts/Review.vue'
  import VLink from '../../components/VLink.vue'

  export default {
    props: {
      elements: {
        type: Object,
        required: true,
      },
    },
    components: {
	    ReviewLayout,
      VLink
    },
    methods: {
      getPreview(review) {
        return review[0].slice(0,50) + "...";
      }
    },
	  name: "feed",
  }
</script>

<style scoped>
  p {
    font-size: 12px;
  }
  p#titleandauthor {
    font-size: 16px;
  }
  strong {
    font-size: 20px;
    /* font-style: oblique; */
  }
  a {
    color: #111111;
  }
  .active {
    color: #111111;
  }
</style>
