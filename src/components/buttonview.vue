<template>
  <div style="border: white">
    <el-container>

      <!--<el-button type="primary" @click="handleBtn1Click">普通按钮</el-button>-->
      <!--<el-button type="success" @click="handleBtn2Click">成功按钮</el-button>-->
      <!--<el-button type="info" @click="handleBtn3Click" plain>信息按钮</el-button>-->
      <!--<el-button type="warning" @click="handleBtn4Click" round>警告按钮</el-button>-->
      <!--<el-button type="danger" icon="el-icon-edit" @click="handleBtn5Click" circle></el-button>-->


      <!--<el-button-group>-->
        <!--<el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>-->
        <!--<el-button type="primary">下一页<i class="el-icon-arrow-right el-icon&#45;&#45;right"></i></el-button>-->
      <!--</el-button-group>-->

      <!--<el-button type="primary" loading="true">加载中...</el-button>-->

      <!--<el-button type="primary" >按钮</el-button>-->
      <!--<el-button type="primary" size="medium">按钮</el-button>-->
      <!--<el-button type="primary" size="small">按钮</el-button>-->
      <!--<el-button type="primary" size="mini">按钮</el-button>-->

      <!--<template>-->
        <!--<el-radio v-model="radio" label="1">选项1</el-radio>-->
        <!--<el-radio v-model="radio" label="2">选项2</el-radio>-->
      <!--</template>-->

    </el-container>

    <hr>

    <template>

      <div>
        <el-radio-group v-model="radio1">
          <el-radio label="3">备选</el-radio>
          <el-radio label="6">备选</el-radio>
          <el-radio label="9">备选</el-radio>
        </el-radio-group>
      </div>

      <div>
        <el-radio-group v-model="radio2">
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>

      <div>
        <el-radio-group v-model="radio3" @change="handleBtn4Click">
          <el-radio label="备选1" border></el-radio>
          <el-radio label="备选2" border></el-radio>
          <el-radio label="备选3" border></el-radio>
        </el-radio-group>
      </div>
    </template>

    <template>

      <div style="width: 200px">用户名:<el-input style="width: 100px" v-model="radio4" clearable></el-input></div>

      <div><el-input type="textarea" autosize="" v-model="radio5" placeholder="请输入" clearable=""></el-input></div>

      <el-input type="textarea" :autosize="{minRows:2,maxRows:5}" placeholder="输入"></el-input>
    </template>

    <el-input placeholder="请输入网址" v-model="radio5">
      <template slot="prepend">http://</template>
      <template slot="append">.com</template>
    </el-input>

    <el-input placeholder="请输入内容" v-model="radio5" class="input-with-select">
      <el-select v-model="radio1" slot="prepend" placeholder="请选择">
        <el-option label="餐厅名" value="1"></el-option>
        <el-option label="电话" value="1"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>

  </div>
</template>

<script>
    export default {
        name: "buttonview",

      data() {
        return {
          messagedesc:'',
          radio: '1',
          radio1: '3',
          radio2: '北京',
          radio3: '',
          radio4: '',
          radio5: ''
        }
      },

      methods:{
        handleBtn1Click(){
          console.log('handleBtn1Click')
        },
        handleBtn2Click(){
          console.log('handleBtn2Click')
        },
        handleBtn3Click(){
          console.log('handleBtn3Click')
        },
        handleBtn4Click(){

          console.log('handleBtn4Click')
        },
        handleBtn5Click(){
          console.log('handleBtn5Click')
        }

      }
    }
</script>

<style scoped>

  div {
    /*border: #3190e8 solid 1px;*/
    margin-bottom: 10px;
  }
</style>
