<template>
	<div class='navigation'>
		<router-link to='/'>Home Route</router-link>
		<router-link to='/users'>Users</router-link>
		<router-link to='/foo'>FOO</router-link>
		<router-link to='/bar'>BAR</router-link>
	</div>
</template>

<script>
export default {
	name: 'navigation',
	data () {
		return {
		}
	},

	methods: {
		goTo: function (view) {
			console.log(view);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navigation {
	width: 100%;
	display: flex;
	height: 32px;
	border-bottom: solid 1px #CECECE;
	margin-bottom: 16px;
}

.navigation > a {
	display: inline-block;
	padding: 0 16px;
	border-right: solid 1px #CECECE;
	color: #666666;
	line-height: 32px;
}
.navigation > a:hover {
	background: #FAFAFA;
	cursor: pointer;
	color: #333333;
}
</style>
