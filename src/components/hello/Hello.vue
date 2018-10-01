<template>
  <div class="hello">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
  export default {
    props: {
      title: String
    },
    data () {
      return {
        msg: 'hello word'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
    background-color: #9ebdd7;
  }

  li {
    display: inline-block;
    margin: 0 0.066667rem;
  }

  a {
    font-size: 0.4rem;
    color: #42b983;
  }
</style>
