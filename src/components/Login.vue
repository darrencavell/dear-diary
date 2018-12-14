<template>
	<div class="container">
		<h3>Vue Log In Page</h3>
		<input type="text" v-model="email" placeholder="Email">
		<input type="password" v-model="password" placeholder="Password">
		<button v-on:click="signIn">Sign In</button>
		<p>Wanna register? <router-link to="/register">Click Here!</router-link></p>
	</div>
</template>

<script>
	import firebase from 'firebase'
	export default{
		props: ['loginSection'],
		name: 'login',
		data: function(){
			return {
				email: '',
				password: ''
			}
		},
		methods:{
			signIn: function(){
				firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
			          (user) => { this.$router.replace('blog'); this.$emit('loginChecker', 
			          		{
			          			isSigningIn: true, 
			          			email: this.email
			          		}
			          		); 
			          		this.$cookie.set('email', this.email, {expires: '10m'});
			          		this.$cookie.set('isSigningIn', true, {expires: '10m'});
			          		alert('You are logged in'); 
			      	  },
			          (err) => { alert('Oops. ' + err.message) }
    			);
			}
		},
		mounted(){
			this.$nextTick(function(){
				if(this.$cookie.get('email') != null) this.$router.replace('blog');
			})
		}
	}
</script>

<style scoped>
	.container{
		margin-top: 60px;
	}
	input{
		margin: 10px auto;
		display: block;
    	border: 0.5px solid #41B883;
    	padding: 12px 20px;
    	border-radius: 4px;
    	width: 25%;
	}
	button{
		background-color: #41B883;
		border: none;
		color: white;
    	padding: 12px 20px;
    	border-radius: 4px;
	}
	p{
		font-size: 12px;
	}
</style>