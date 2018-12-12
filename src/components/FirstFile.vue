<template>
  <div>
    <!--<img src="@/assets/logo.png" width="200" height="200">-->

    <el-header>Heather</el-header>

    <el-row>
      <el-input type="text" placeholder="请输入用户名" v-model="username"></el-input>
    </el-row>

    <el-row>
      <el-input type="password" placeholder="请输入密码" v-model="password"></el-input>
    </el-row>

    <el-button style="width: 20%" v-on:click="handleLogin">登录</el-button>

  </div>
</template>

<script>
    export default {
      name: "FirstFile",
      data() {
        return {
          username:'',
          password:''

        }
      },

        methods:{
          handleLogin(){
            console.log('用户名:' +this.username + '密码:' + this.password)

            this.$router.push({path: '/hello'})
          }
        }
    }


</script>

<style lang="scss" scoped>

  @import 'src/style/mixin';

  .loginContainer{
    padding-top: 1.95rem;
    p, span, input{
      font-family: Helvetica Neue,Tahoma,Arial;
    }
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

</style>
