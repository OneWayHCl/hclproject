<template>
  <div>
    <h3 style="align-content: center">title</h3>

    <input type="text" v-model="todo" @keydown="doAdd($event)"/>
    <hr>
    <div>进行中</div>
    <br>
      <ul>
        <li v-for="(item,key) in list" v-if="!item.checked">
          <input type="checkbox" v-model="item.checked" @changed="saveList()"> {{item.title}} -- <button @click="removeData(item.key)">删除</button>
        </li>

      </ul>

    <hr>
    <div>已完成</div>
    <br>

    <ul>
      <ol v-for="(item,key) in list" v-if="item.checked">
        <input type="checkbox" v-model="item.checked" @changed="saveList()"> {{item.title}} -- <button @click="removeData(item.key)">删除</button>
      </ol>

    </ul>

  </div>
</template>

<script>

  import storage from '../model/storage';

    export default {
        name: "StudySave",

        data(){
          return {
            todo:'' ,
            list: []
          }
        },

        methods: {

          doAdd(e){
            if (e.keyCode == 13) {
              this.list.push({
                title: this.todo,
                checked: false
              })
            }
            storage.set('list',this.list)
          },

          saveList(){
            storage.set('list',this.list)
          },

          removeData(key){
            this.list.splice(key,1);
            storage.set('list',this.list)
          },

        },
        mounted() {
          var list = storage.get('list');

          console.log("读取到上次存储数据了");

          if (list) {
            this.list = list;
          }
        }

    }
</script>

<style scoped>

</style>
