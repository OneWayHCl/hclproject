<template>
  <div>
    <img src="@/assets/logo.png" width="200" height="200">

    <br>
    <div>用户名<input v-model="username"></div>

       <div>密码<input v-model="password"></div>

    <br>
    <button v-on:click="handleLogin">登录</button>

  </div>
</template>

<script>
    export default {
      name: "FirstFile",
      data() {
        return {
          username:'username',
          password:'11111111'

        }
      },

        methods:{
          handleLogin(){
            console.log('用户名:' +this.username + '密码:' + this.password)
          }

        }


    }


</script>

<style lang="scss" scoped>

  @import '/src/style/mixin';

  .loginContainer{
    padding-top: 1.95rem;
    p, span, input{
      font-family: Helvetica Neue,Tahoma,Arial;
    }
  }

</style>
