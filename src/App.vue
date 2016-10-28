<template>
	<div id="app">
		<navigation></navigation>
		<h1 style='margin: 0;'>Hello World</h1>
		<router-view></router-view>
	</div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
	name: 'app',
	components: {
		Navigation
	}
}
</script>

<style>
body {
	margin: 0;
	padding: 0;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
