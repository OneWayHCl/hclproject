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

    <el-button style="width: 15%" v-on:click="handleLogin">登录</el-button>
    <el-button style="width: 15%" v-on:click="pushToHome">主页</el-button>
    <el-button style="width: 15%" v-on:click="pushToTest">测试1</el-button>
    <el-button style="width: 15%" v-on:click="pushTo2Test">测试2</el-button>

  </div>
</template>

<script>
    export default {
      name: "login",
      data() {
        return {
          username:'',
          password:''

        }
      },

        methods:{
          handleLogin(){
            console.log('用户名:' +this.username + '密码:' + this.password)

            if (this.username.length <= 0) {
              alert('请输入用户名');
            }
            else if (this.password.length <= 0) {
              alert('请输入密码');
            }
            else {
              this.$router.push({path: '/hello'})
            }
          },

          pushToHome(){
            this.$router.push({path: '/home'})
          },

          pushToTest(){
            this.$router.push({path: '/buttonview'})
          },

          pushTo2Test(){
            this.$router.push({path: '/ceshiview'})
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
