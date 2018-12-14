<template>
  <div id="app">
    <img src="./assets/logo.png" v-if="!loginVariable.isSigningIn" v-on:click="callLogin">
    <keep-alive>
      <router-view v-bind:loginSection="loginVariable" v-on:loginChecker="updateLogin($event)"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        loginVariable: {
          isSigningIn: this.$cookie.get('isSigningIn'), 
          email: this.$cookie.get('email')
        }
      }
    },
    methods:{
      callLogin: function(){
        console.log(this.loginVariable);
      },
      updateLogin: function(login){
        this.loginVariable = login;
        console.log(this.loginVariable);
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
