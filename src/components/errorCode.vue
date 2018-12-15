<template>

  <el-container>
    <el-aside width="200px">侧边栏</el-aside>
    <el-container>
      <el-header>
        <div style="font-size: 20px; font-weight: bold">{{backCodeTitle}}</div>
        <div style="height: 1px; background-color: rgb(222,222,222)"></div></el-header>

      <el-main >
        <el-table :data="tableData" border="" header-row-style="height:20px" row-style="height:10px">
          <el-table-column prop="backCode" label="返回码" width="150px"></el-table-column>
          <el-table-column prop="codeDesc" label="错误码描述" width="200px"></el-table-column>
          <el-table-column prop="details" label="说明"></el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
    export default {
      name: "errorCode",
      data (){

        var errorCodeArray = new Array()
        let desc1 = '不合法的message_type'
        let desc2 = '不合法的不合法的子菜单按钮名称长度不合法的子菜单按钮名称长度不合法的子菜单按钮名称长度OpenID' +
          '不合法的子菜单按钮名称长度grant_type'
        for (var i=0; i<20;i++)
        {
          var item = {
            backCode: 40001 + i,
            codeDesc: i%3==1 ? 'invalid media type':'invalid credential',
            details: i%3==1 ? desc1:desc2
          }
          errorCodeArray.push(item)
        }

        return {
          backCodeTitle: '返回码说明',
          tableData: errorCodeArray
        }
      },
    }
</script>

<style scoped>

  .el-header {
    /*background-color: #B3C0D1;*/
    color: #333;
    text-align: left;
    line-height: 40px;
    padding: 15px 50px 0px 50px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    top: 0px;
    padding: 10px 50px 10px 50px;
    /*background-color: #E9EEF3;*/
    /*color: #333;*/
    /*text-align: center;*/
    /*line-height: 160px;*/
  }

</style>
