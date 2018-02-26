<template>
  <main-layout>
    <div>
      <h2 class="ui header">
        Hi! Welcome to my personal web page. You'll find my bio and resume in the
        menu above, as well as a link to my Github page. Thanks for stopping by!
      </h2>
      <div>
        <img
          class="ui centered image medium"
          alt="Picture of me with cocoa"
          src="../media/Nathan_Allen_Cocoa.jpg"
        >
        <div class="ui label">
          Me with some delicious hot cocoa, 2017
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'

  export default {
    components: {
	    MainLayout
    },
	  name: "home"
  }
</script>
