<template>
	<div class="user">
		<router-link to='/users'>---- View all Users</router-link>

		<div v-if='loading'>
			Loading User~
		</div>
		<div v-else>
			<h1>Github User: {{ user.name }}</h1>
			<p>
				<a></a>
			</p>

			<p><a :href='user.html_url'>view on github</a></p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'User',
	data () {
		return {
			loading: false,
			user: null
		}
	},

	computed: {
		apiURL: function () {
			return 'https://api.github.com/user/' + this.$route.params.id;
		}
	},

	created () {
		this.getUser();
	},

	watch: {
		'$route': 'getUser'
	},

	methods: {
		getUser: function () {
			var self = this;

			this.loading = true;

			this.$http.get(this.apiURL).then((response) => {
				self.user = response.data;
				self.loading = false;
			}, (response) => {
				console.log(response);
				self.loading = false;
			});
		}
	}
}
</script>
