<template>
	<div id="single-blog">
		<div class="operation">
			<div class="edit" v-on:click="editBlog">Edit</div>
			<div class="delete" v-on:click="deleteBlog">Delete</div>
		</div>
		<h1>{{ blog.title }}</h1>
		<article>{{ blog.content }}</article>
		<p>Author: {{ blog.author }}</p>
		<ul>
			<li v-for="category in blog.categories">{{ category }}</li>
		</ul>
	</div>
</template>	

<script>
	export default{
      	name: 'singleBlogs',
		data(){
			return {
				id: this.$route.params.id,
				blog: {},
			}
		},
		methods:{
			editBlog: function(){
				cons
			},
			deleteBlog: function(){

			}
		},
		created(){
			this.$http.get('https://vuejs-playlist-e4a22.firebaseio.com/posts/' + this.id + '.json').then(function(data){
				return data.json();
				// this.blog = data.body;
			}).then(function(data){
				this.blog = data;
			});
		}
	}
</script>

<style scoped>
	.operation{
		float: right;
		display: inline-block;
	}
	#single-blog{
		width: 60%;
		margin: 10px auto;
	}
	ul{
		width: 20%;
		margin: 10px auto;
	}
	ul>li{
		padding: 12px 4px;
	}
</style>