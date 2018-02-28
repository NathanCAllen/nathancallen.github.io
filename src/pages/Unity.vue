<template>
  <main-layout>
    <div id="gameContainer" style="width: 960px; height: 600px"></div>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'

  let gameInstance = UnityLoader.instantiate("gameContainer", "../HouseOfDiodarra/Build/Phase0_WebGL.json", {onProgress: UnityProgress});
  console.log(gameInstance);

  export default {
    components: {
	    MainLayout
    },
	  name: "unity"
  }
</script>
