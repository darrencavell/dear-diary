<template>
	<div class="container">
		<h3>Let's Create New Account</h3>
		<input type="text" v-model="email" placeholder="Email">
		<input type="password" v-model="password" placeholder="Password">
		<button v-on:click="signUp">Sign Up</button>
		<p>Already have an account? <router-link to="/login">Click Here!</router-link></p>
	</div>
</template>

<script>
	import firebase from 'firebase'
	export default{
		name: 'register',
		data: function(){
			return {
				email: '',
				password: ''
			}
		},
		methods:{
			signUp: function(){
				firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('login')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        )
			}
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