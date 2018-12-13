<template>

  <div style="margin: 0px; padding: 0px">

    <el-container style="height: 500px; border: 1px solid red;">

      <el-header style="font-size: 14px; text-align: right">

        <el-button class="el-icon-search" style="align-self: left">搜索</el-button>

        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 20px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
            <el-dropdown-item>修改</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <span>王小虎</span>
      </el-header>

      <el-container>
        <el-aside width="200px" style="background-color: #e4e4e4">
          <el-menu :default-openeds="['1', 4]">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message">导航一</i></template>
              <el-menu-item-group>
                <template slot="title">分组1</template>
                <el-menu-item index="1-1">选项1-1</el-menu-item>
                <el-menu-item index="1-2">选项1-2</el-menu-item>
                <el-menu-item index="1-3">选项1-3</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title"><i class="el-icon-bell">导航二</i></template>
              <el-menu-item-group>
                <template slot="title">分组2</template>
                <el-menu-item index="1-1">选项2-1</el-menu-item>
                <el-menu-item index="1-2">选项2-2</el-menu-item>
                <el-menu-item index="1-3">选项2-3</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title"><i class="el-icon-service">导航三</i></template>
              <el-menu-item-group>
                <template slot="title">分组3</template>
                <el-menu-item index="1-1">选项3-1</el-menu-item>
                <el-menu-item index="1-2">选项3-2</el-menu-item>
                <el-menu-item index="1-3">选项3-3</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="4">
              <template slot="title"><i class="el-icon-setting">导航四</i></template>
              <el-menu-item-group>
                <template slot="title">分组4</template>
                <el-menu-item index="1-1">选项4-1</el-menu-item>
                <el-menu-item index="1-2">选项4-2</el-menu-item>
                <el-menu-item index="1-3">选项4-3</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

          </el-menu>

        </el-aside>

        <el-main>
          <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140px"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120px"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>


</template>

<script>
    export default {
        name: "home",

        data (){

          var arr = new Array()
          for (var i=0; i<20;i++)
          {
            let a = Math.round(i);
            var item = {
              date: '2018-05-02',
              name: '王小虎' + a,
              address: '长沙市佳兴世尊酒店' + a * i,
            }
            arr.push(item)
          }

          return {
            tableData: arr
          }
        },

    }
</script>

<style scoped>

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

</style>
