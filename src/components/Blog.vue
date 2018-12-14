<template>
	<div>
	 	<app-header v-bind:loginPassSection="loginSection" v-on:loginChecker2="updateLogin($event)"></app-header>
		<div id="show-blog">
			<h1>All Blog Articles</h1>
			<input type="text" v-model="search" placeholder="Search box">
			<div v-for="blog in filteredBlogs" class="single-blog">
				<router-link v-bind:to="'/blog/' + blog.id"><h2 v-rainbow>{{ blog.title | to-uppercase }}</h2></router-link>
				<article>{{ blog.content | snippet }}</article>
				<!-- <button id="readmore" v-on:click="">Read More</button> -->
			</div>
		</div>
	</div>
</template>

<script>
  	import Header from '@/components/includes/Header'
	export default{
		props: ['loginSection'],
		name: 'blogs',
		data() {
			return {
				blogs: [],
				search: ''
			}
		},
		methods:{
	      updateLogin: function(login){
	        console.log(this.loginSection);
	      }
		},
	    components:{
	      'app-header': Header
	    },
		created(){
			this.$http.get('https://vuejs-playlist-e4a22.firebaseio.com/posts.json').then(function(data){
				// this.blogs = data.body.slice(0, 10);
				return data.json();
			}).then(function(data){
				var blogsArray = [];
				for(let key in data){
					data[key].id = key;
					blogsArray.push(data[key]);
				}
				this.blogs = blogsArray;
			});
		},
		mounted(){
			this.$nextTick(function(){
				if(this.$cookie.get('email') == null) this.$router.replace('login');
			})
		},
		filters:{
			'to-uppercase': function(value){
				return value.toUpperCase();
			},
			'snippet': function(value){
				return value.slice(0, 100) + "...";
			}
		},
		directives:{
			'rainbow': {
				bind(el, binding, vnode){
					el.style.color = "#" + Math.random().toString(16).slice(2, 8);
				}
			}
		},
		computed: {
			filteredBlogs: function(){
				return this.blogs.filter((blog) => {
					return blog.title.match(this.search);
				});
			}
		}
	}
</script>

<style scoped>
	input[type="text"] {
    	border: 0.5px solid #41B883;
    	padding: 12px 20px;
	}
	#show-blog{
		width: 60%;
		margin: 0 auto;
	}
	.single-blog{
		box-sizing: border-box;
		background: #eee;
		padding: 20px;
		margin: 20px 0;
	}
	#readmore{
		background: #4CAF50;
		border: none;
		color: white;
		padding: 4px 8px;
		text-align: center;
		display: inline-block;
		font-size: 16px;
	}
</style>