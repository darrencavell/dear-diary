<template>
	<div id="add-blog">
		<h2>Add a new Blog Post</h2>
		<form v-if="!submitted">
			<label>Blog Title</label>
			<input type="text" v-model.lazy="blog.title" required/>
			<label>Blog Content</label>
			<textarea v-model.lazy="blog.content"></textarea>
			<div id="checkboxes">
				<input type="checkbox" value="ninjas" v-model="blog.categories" class="checkbox_value">
				<label>Ninjas</label>
				<input type="checkbox" value="wizards" v-model="blog.categories">
				<label>Wizards</label>
				<input type="checkbox" value="mario" v-model="blog.categories">
				<label>Mario</label>
				<input type="checkbox" value="cheese" v-model="blog.categories">
				<label>Cheese</label>
			</div>
			<label>Author</label>
			<select v-model="blog.author">
				<option v-for="author in authors">{{ author }}</option>
			</select>
			<button v-on:click.prevent="post">Add Blog</button>
		</form>
		<div v-if="submitted">
			<h3>Thanks for adding your post!</h3>
		</div>
		<div id="preview">
			<h3>Preview Blog</h3>
			<p>Blog title: <span id="title">{{ blog.title }}</span></p>
			<p>Blog content:</p>
			<p id="content">{{ blog.content }}</p>
			<p>Blog categories:</p>
			<ul>
				<li v-for="category in blog.categories" id="category">{{ category }}</li>
			</ul>
			<p>Blog author: <span id="author">{{ blog.author }}</span></p>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'addBlog',
		data(){
			return {
				blog: {
					title: '',
					content: '',
					categories: [],
					author: ''
				},
				authors: ['Nerrad Llevac', 'The Angular Avenger', 'The Vue Vindicator'],
				submitted: false
			}
		},
		methods:{
			post: function(){
				this.$http.post('https://vuejs-playlist-e4a22.firebaseio.com/posts.json', this.blog).then(function(data){
					console.log(data);
					this.submitted = true;
				}).then(function(){
					console.log("SUCCESS");
				});
			}
		}
	}
</script>

<style scoped>
	#add-blog *{
		box-sizing: border-box;
	}
	#add-blog{
		margin: 20px auto;
		max-width: 500px;
	}
	label{
		display: block;
		margin: 10px 0 10px;
	}
	input[type="text"], textarea{
		margin: 10px auto;
		display: block;
    	border: 0.5px solid #41B883;
    	padding: 12px 20px;
    	border-radius: 4px;
    	width: 100%;
	}
	input[type="checkbox"]{
		-webkit-appearance: none;
    	border: 1px solid #41B883;
		padding: 7px;
		border-radius: 3px;
	}
	input[type="checkbox"]:checked{
		background-position: 0 -15px;
		background-color: #e9ecee;
		border: 1px solid #adb8c0;
		background-image:url(http://csscheckbox.com/checkboxes/lite-x-red.png);
	}
	#preview{
		padding: 10px 20px;
		border: 1px dotted #ccc;
		margin: 30px 0;
	}
	h3{
		margin-top: 10px;
	}
	select{
		margin: 10px auto;
		display: block;
    	border: 0.5px solid #41B883;
    	padding: 12px 20px;
    	border-radius: 4px;
    	width: 40%;
	}
	div#checkboxes > label{
		margin-top: -10px;
	}
	#title{
		text-decoration: underline;
		font-style: italic;
	}
	#content{
		margin-top: -20px;
		padding: 10px 20px;
	}
	#author{
		font-weight: bold;
		font-style: italic;
	}
	#category{
		margin-top: -15px;
	}

	#checkboxes input{
		display: inline-block;
		margin-right: 5px
	}
	#checkboxes label{
		display: inline-block;
	}
</style>