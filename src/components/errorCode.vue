<template>

  <el-container >
    <el-aside width="200px">侧边栏</el-aside>
    <el-container>
      <el-header>
        <div style="font-size: 20px; font-weight: bold">{{backCodeTitle}}</div>
        <div style="height: 1px; background-color: rgb(222,222,222)"></div></el-header>

      <el-main >
        <!--<div v-show="check()"></div>-->
        <el-table :data="tableData" border >
          <el-table-column prop="backCode" label="返回码" width="150px">
            <template slot-scope="scope">
              <i class="el-icon-message"></i>
              <span style="margin-left: 1px">{{ scope.row.backCode }}</span>
            </template>

          </el-table-column>

          <el-table-column prop="codeDesc" label="错误码描述" width="200px">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="bottom">
                <p>描述:{{scope.row.codeDesc}}</p>
                <div slot="reference" class="codeDesc-wrapper">
                  <el-tag size="medium">{{ scope.row.codeDesc }}</el-tag>
                </div>
              </el-popover>
              <!--<i class="el-button&#45;&#45;primary" style="border: black solid 1px">{{ scope.row.codeDesc}}</i>-->
            </template>
          </el-table-column>

          <el-table-column prop="details" label="说明">
            <template slot-scope="scope">
              <el-button size="small" @click="edit(scope.$index,scope.row)">编辑</el-button>
              <el-button type="danger" @click="deleteSome(scope.$index,scope.row)">删除</el-button>
            </template>

          </el-table-column>

          <el-table-column label="备注" >

            <template slot="header" slot-scope="scope">
              <el-input
                v-model="search"
                size="mini"
                placeholder="输入关键字搜索"/>
            </template>

            <template slot-scope="scope">
              <div style="width: 250px; height: 250px; background: yellow;">sxxxxx备注</div>
            </template>

          </el-table-column>

          <el-table-column
            type="index"
            :index="indexMethod">
          </el-table-column>

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
          search: '',
          backCodeTitle: '返回码说明',
          tableData: errorCodeArray
        }
      },

      methods: {
        edit(index, row){
          console.log('edit:' + 'index:' + index + ':' + row.details)
        },

        deleteSome(index, row){
          console.log('delete:' + 'index:' + index + ':' + row.details)
        },

        indexMethod(index){
          return index * 2;
        }
      }
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
