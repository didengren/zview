<template>
  <div id="zInput">
    <div class="hd"><i class="zu-icon zu-icon-android-arrow-back" @click="goBack"></i></div>
    <div class="wrap">
      <z-input placeholder="请输入。。。"></z-input>
      <z-input placeholder="带删除按钮" :clearable="true"></z-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  components: {},
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">
#zInput{
  .hd{
    padding: 0 0.2rem;
    height: 0.8448rem;
    -webkit-align-items: center;
    align-items: center;
    display: flex;
    .zu-icon-android-arrow-back{
      font-size: 0.5rem;
    }
  }
  .wrap{
    padding: 0.4rem;
  }
  .zu-input-icon{
    font-size: 0.4rem;
    top: 0.2rem;
    right: 0.3rem;
  }
  .zu-input{
    font-size: 0.4rem;
    height: 0.8rem;
    padding: 0 0.6rem 0 0.2rem;
    margin-bottom: 0.4rem;
  }
}
</style>
