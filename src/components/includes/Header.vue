<template>
	<nav>
		<ul>
			<li><router-link to="/" exact>Blog</router-link></li>
			<li><router-link to="/add" exact>Add a new Blog</router-link></li>
			<li class="custom">Welcome back, {{ loginPassSection.email }}
				<div class="dropdown" v-on:click="logout">Logout</div></li>
		</ul>
	</nav>
</template>

<script>
	import firebase from 'firebase'
	export default{
		name: 'headerYea',
		props: ['loginPassSection'],
		data(){
			return {
				activeTab: false
			}
		},
		methods:{
			logout: function(){
				firebase.auth().signOut().then(function() {
				  // Sign-out successful.
				  // this.$cookie.delete('email', {domain: 'localhost'});
				  // this.$cookie.delete('isSigningIn', {domain: 'localhost'})
				  // this.$emit('loginChecker2',
		    //       		{
		    //       			isSigningIn: false, 
		    //       			email: null
		    //       		});
				  alert('Sign out successful');
				  this.$router.replace('login');
				  console.log(this.$router);
				}).catch(function(error) {
				  // An error happened.
				  alert('failed ' + error);
				});
			}
		}
	}
</script>

<style scoped>
	ul{
		list-style-type: none;
		text-align: left;
		margin: 0;
	}
	li{
		display: inline-block;
		margin: 0 10px;
	} 
	a{
		color: #fff;
		text-decoration: none;
		padding: 6px 8px;
		border-radius: 10px;
	}
	nav{
		background: #444;
		padding: 14px 0;
		margin-bottom: 40px;
	}
	.router-link-active{
		background: #eee;
		color: #444;
	}
	.custom{    
		float: right;
		color: #009688;
	    position: relative;
    	display: inline-block;
	}
	.dropdown{
		text-align: center;
		color: #fff;
		display: none;
		position: inherit;
		background: #444;
    	padding: 12px 16px;
    	margin-left: 10px;
    	margin-right: 10px;
	}
	.custom:hover .dropdown{
		display: block;
	}
</style>