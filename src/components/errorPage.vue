<template>
  <div id="divBg">
    <div>
      <el-container class="centerStyle" style="width: 600px; height: 400px;">
        <div id="example1" style="width: 600px; height: 400px; position:relative;">
          <img src="../assets/logo.png" id="logo1">
          <div id="name1">en+接口平台</div>
          <div id="div404">404</div>
          <div id="divDesc">没有找到您请求的页面......</div>

          <div id="divBack">您可以尝试回到<a href="https://en.enfry.com"><i>en+首页</i></a></div>
        </div>
      </el-container>
    </div>
  </div>
</template>

<script>
    export default {
        name: "errorPage"
    }
</script>

<style scoped>

  a:link,a:visited{
    text-decoration:none;  /*超链接无下划线*/
  }
  a:hover{
    text-decoration:underline;  /*鼠标放上去有下划线*/
  }

  #logo1 {
    position:absolute;
    left:20px;
    top:80px;
    width: 200px;
    height: 200px;
    /*border: #e4e4e4 solid 1px;*/
  }

  #name1 {
    position:absolute;
    left:20px;
    top:245px;
    width:200px;
    height:100px;
    font-size: 25px;
    color: #3190e8;
    align-content: center;
  }

  #div404{
    position:absolute;
    left:140px;
    top:120px;
    color: rgb(222,222,222);
    width: 300px;
    align-content: left;
    font-size: 80px;
    font-weight: bold;
  }

  #divDesc {
    position:absolute;
    left:220px;
    top:220px;
    /*background-color: rgb(243,250,243);*/
    width: 200px;
    align-content: left;
    font-size: 16px;
  }

  #divBack {
    position:absolute;
    left:213px;
    top:250px;
    /*background-color: rgb(243,250,243);*/
    width: 200px;
    align-content: left;
    font-size: 16px;
  }

  li {
    position: absolute;
    align-content: left;
    margin-bottom: 20px;
  }

  #divBg {
    align-self: center;
    /*background-color: rgb(255,250,233);*/
    height: 700px;
  }

  .centerStyle {
    position: absolute;
    top: 40%;
    left: 52%;
    transform: translateY(-50%);
    transform: translate(-50%, -50%)
  }

  #example1 {
    background-image: url(../assets/640.png);
    background-position: left top;
    background-repeat: no-repeat;
    padding: 15px;
  }


</style>
