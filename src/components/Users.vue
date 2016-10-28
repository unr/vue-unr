<template>
	<div class="users">
		<p v-if='users.length == 0'>Trying to load github users~</p>

		<ul v-if='users.length'>
			<li v-for='user in users'>
				<router-link :to="'/user/'+user.id"><strong v-text='user.login'></strong></router-link><br />
				<span>TYPE: <small v-text='user.type'></small></span> <span>SCORE: <small v-text='user.score'></small></span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Users',
	data() {
		return {
			users: [],
			apiURL: 'https://api.github.com/search/users?q=toronto&per_page=25',
		}
	},

	beforeMount() {
		var self = this;

		this.$http.get(this.apiURL).then((response) => {
			console.log('success');
			console.log(response);
			self.users = response.data.items;
		}, (response) => {
			console.log(response);
		});
	}
}
</script>
