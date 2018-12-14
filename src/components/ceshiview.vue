<template>
  <div>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
      </el-option>
    </el-select>

    <el-switch v-model="value1"
               active-color="red"
               inactive-color="yellow"
               @change="changeStatus($event,1)">开关</el-switch>


    <!--<div>-->
      <!--<span>默认</span>-->
      <!--<el-slider v-model="value8"></el-slider>-->
    <!--</div>-->

    <div>
      <span>格式化</span>
      <el-slider v-model="value8" :format-tooltip="formatTooltip"></el-slider>
    </div>

    <div>
      <el-time-select v-model="value7"
      :picker-options="{
        start:'08:00',
        step:'00:15',
        end:'20:59',}"
      placeholder="请选择时间">
      </el-time-select>

      <el-date-picker v-model="value7" type="date" placeholder="请选择日期"></el-date-picker>

      <el-date-picker v-model="value7" type="date" placeholder="请选择日期" align="right" v-bind:picker-options="pickerOptions1"></el-date-picker>

    </div>
  </div>
</template>

<script>
    export default {
        name: "ceshiview",

        data () {
          return {
            value8: 8,
            value1: true,
            value2: false,
            value7: '',
            options: [{
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
            }],
            value: '',

            pickerOptions1: {
              disabledDate(time) {
                return time.getTime() > Date.now();
              },
              shortcuts: [{
                text: '今天',
                onClick(picker) {
                  picker.$emit('pick', new Date());
                }
              }, {
                text: '昨天',
                onClick(picker) {
                  const date = new Date();
                  date.setTime(date.getTime() - 3600 * 1000 * 24);
                  picker.$emit('pick', date);
                }
              }, {
                text: '一周前',
                onClick(picker) {
                  const date = new Date();
                  date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                  picker.$emit('pick', date);
                }
              }]
            },
          }
        },

        methods: {

          changeStatus: function($event,num){
            console.log($event);
            console.log(num);
          },

          formatTooltip: function (val) {

            return val / 100;
          }
        }
    }
</script>

<style scoped>

</style>
