<template>

  <el-container>
    <el-header>

      <!--<img src="../assets/logo.png" id="logoImg">-->
      <h3 id="topName">en+接口平台</h3>
      <el-input class="topInput" placeholder="查询接口" clearable=""></el-input>

    </el-header>
    <el-container>
      <el-aside width="200px">

        <el-menu :default-openeds="['1', 2]">
          <el-submenu index="1">


            <div slot="title" style="background: yellow">display
            </div>

            <el-menu-item-group>
              <el-menu-item index="1-1">选项1-1</el-menu-item>
              <el-menu-item index="1-2">选项1-2</el-menu-item>
              <el-menu-item index="1-3">选项1-3</el-menu-item>
            </el-menu-item-group>

          </el-submenu>

          <el-submenu index="2">

            <template slot="title">
              <i class="el-icon-location">导航二</i>
            </template>

            <el-menu-item-group>
              <el-menu-item index="1-1">选项2-1</el-menu-item>
              <el-menu-item index="1-2">选项2-2</el-menu-item>
              <el-menu-item index="1-3">选项2-3</el-menu-item>
            </el-menu-item-group>

          </el-submenu>

        </el-menu>

      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>

</template>

<script>

    export default {
      name: "userHome",
      data() {
        return {
          data: [{
            label: '一级 1',
            children: [{
              label: '二级 1-1',
              children: [{
                label: '三级 1-1-1'
              }]
            }]
          }, {
            label: '一级 2',
            children: [{
              label: '二级 2-1',
              children: [{
                label: '三级 2-1-1'
              }]
            }, {
              label: '二级 2-2',
              children: [{
                label: '三级 2-2-1'
              }]
            }]
          }, {
            label: '一级 3',
            children: [{
              label: '二级 3-1',
              children: [{
                label: '三级 3-1-1'
              }]
            }, {
              label: '二级 3-2',
              children: [{
                label: '三级 3-2-1'
              }]
            }]
          }],
          defaultProps: {
            children: 'children',
            label: 'label'
          }
        };
      },
      methods: {
        handleNodeClick(data) {
          console.log(data);
        }
      }
    };
</script>

<style class="scss" scoped>

  /*@import url("//unpkg.com/element-ui@2.4.6/lib/theme-chalk/index.css");*/

  /*菜单关闭*/
  .el-submenu>.el-submenu__title .el-submenu__icon-arrow{
    -webkit-transform: rotateZ(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotateZ(-90deg);
    background-color: red !important;
  }
  /*菜单展开*/
  .el-submenu.is-opened>.el-submenu__title .el-submenu__icon-arrow {
    -webkit-transform: rotateZ(0deg);
    -ms-transform: rotate(0deg);
    transform: rotateZ(0deg);
    background-color: red !important;
  }

  .el-submenu.is-opened>.el-submenu__title .el-submenu__icon-arrow el-icon-arrow-down {
    -webkit-transform: rotateZ(0deg);
    -ms-transform: rotate(0deg);
    transform: rotateZ(0deg);
    background-color: red !important;
  }



  #logoImg {
    position: absolute;
    top: 20px;
    left: 50px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }

  #topName {
    position: absolute;
    top: 7px;
    left: 110px;
    height: 40px;
    text-align: left;
  }

  .topInput {
    position: absolute;
    align-content: right;
    right: 30px;
    width: 25%;
  }

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 70px;
    height: 70px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 600px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 600px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  *{
    padding: 0px;
    margin: 0px;
  }
</style>
