<template>
	<div class="index_index">
		111111111111111
		{{key}}
	</div>
</template>

<script>
	export default {
		data() {
			return {
				key: 'i am  key'
			}
		},
		created() {
        console.log(this.key)
		},
		methods: {

		}
	}
</script>

<style scoped>

</style>
