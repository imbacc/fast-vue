<template>
	<div class="index_index">
		{{key}}
	</div>
</template>

<script>
	export default {
		data() {
			return {
				key: '111111111111111ddddddddddddddddddd'
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
