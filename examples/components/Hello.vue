<template>
  <div>
    <hello title="我是组件目录"></hello>
    <div class="content-box">
      <div class="rows" v-for="(item, i) in listData">
        <span>---</span>
        <router-link :to="{path: '/'+item.path}">{{item.desc}}</router-link>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      listData: []
    }
  },
  mounted () {
    this.listData = [
      {path: 'zInput', desc: 'input 输入框'},
      {path: 'radio', desc: 'radio 单选框'},
      {path: 'checkbox', desc: 'checkbox 复选框'},
      {path: 'rate', desc: 'rate 评分'},
      {path: 'search', desc: 'search 搜索栏'},
      {path: 'list', desc: 'list 列表'}
    ]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
body {
  font-size: 0.4rem;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.hello{
  h1{
    text-align: center;
    padding: 0.4rem;
  }
}
.content-box{
  padding: 0.4rem;
  .rows{
    margin-bottom: 0.2rem;
    span{
      margin-right: 0.2rem;
      color: #FA4802;
    }
    a {
      font-size: 0.3rem;
      color: #FA4802;
      cursor: pointer;
      &:hover{
        color: rgb(7, 141, 252);
      }
    }
  }
}
</style>
