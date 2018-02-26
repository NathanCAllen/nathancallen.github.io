<template>
  <main-layout>
    <object data='/src/media/Nathan_Allen_Resume.pdf'
            height="600" id='resume_pdf' width="750">
    </object>
    <p>
      To view my resume in a separate page, click
      <a href='/src/media/Nathan_Allen_Resume.pdf' target='_blank'>
        &nbsp;here.
      </a>
    </p>
  </main-layout>
</template>

<script>
	import MainLayout from '../layouts/Main.vue'

	export default {
		components: {
			MainLayout
		},
		name: "resume"
	}
</script>

<style scoped>

</style>
