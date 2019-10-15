<style lang="less">
.dms-search {
  // overflow: hidden;
  position: relative;
  .scroll-area-1 {
    // overflow-y: scroll;
    .search-history {
      .title {
        height: 1.08rem;
        padding: 0 0 0 0.18rem;
        overflow: hidden;
        // border-bottom: 1px solid #F3F3F3;
        .words {
          font-size: 0.28rem;
          color: #303030;
          letter-spacing: 0;
          display: inline-block;
          height: 1.08rem;
          line-height: 1.08rem;
          font-weight: 700;
        }
        .delete-history-btn {
          display: inline-block;
          height: 1.08rem;
          line-height: 1.08rem;
          // float: right;
          color: #999999;
          font-size: 0.3rem;
          padding: 0 0.3rem;
        }
      }
      .items {
        font-size: 0.26rem;
        color: #757575;
        letter-spacing: 0;
        line-height: 1rem;
        height: 1rem;
        padding: 0 0.2rem;
      }
    }
  }
  .scroll-area-2 {
    // overflow-y: scroll;
    position: absolute;
    top: 50px;
    background-color: #fff;
    left: 0;
    right: 0;
    .items {
      font-size: 0.26rem;
      color: #757575;
      letter-spacing: 0;
      padding: 0.4rem 0.2rem;
      border-bottom: 1px solid #f3f3f3;
      display: flex;
      align-items: center;
      i {
        margin-right: 0.2rem;
      }
      span {
        flex: 1;
        line-height: 0.4rem;
      }
      &:last-child {
        border-bottom: 0;
      }
    }
  }
}
</style>
<template>
  <div class="z-search">
    <form action="/">
      <!-- <search
                ref="search"
                v-model="srcValue"
                placeholder="输入产品名称"
                show-action
                @search="onSearch"
                @cancel="onCancel"
                @input="onInput"/> -->
      <input />
    </form>
    <div class="scroll-area-1" :style="{ height: scrollH + 'px' }">
      <div v-if="historyList.length > 0" class="search-history">
        <div class="title">
          <div class="words">最近搜索</div>
          <div
            class="delete-history-btn dms-icon icon-shanchu"
            @click="onClear"
          />
        </div>
        <div
          class="items"
          v-for="item in partsHistoryList"
          @click="goBack(item)"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <div
      class="scroll-area-2"
      v-if="feedbackList.length > 0"
      :style="{ height: scrollH + 'px' }"
    >
      <div v-for="item in feedbackList" class="items" @click="goBack(item)">
        <i class="dms-icon icon-sousuo" /><span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>
<script>
// import {Search} from 'vant'
// import IDB from '@/tools/IDB-api'
// import {mapGetters} from 'vuex'
// import {trims} from '@/tools/utils'
// import {keywordsFeedbackAPI} from '@/service/api'
export default {
  name: "z-search",
  // beforeRouteEnter (to, from, next) {
  //     next(vm => {
  //         vm.$store.dispatch('set_hd', {
  //             topLevel: false,
  //             title: '',
  //             customR: true
  //         })
  //         vm.initData()
  //         if (to.name === 'nonListSearch') {
  //             vm.belong = 1
  //             vm.db.setStoreName('search_nonstandard_history')
  //         }
  //         if (to.name === 'partsListSearch') {
  //             vm.belong = 2
  //             vm.db.setStoreName('search_parts_history')
  //         }
  //         vm.db.get({usertokenIndex: vm.token}, (res) => {
  //             if (res) {
  //                 console.log('数据读取成功', res)
  //                 if (res.id) vm.storeId = res.id
  //                 vm.historyList = res.list
  //             }
  //         })
  //     })
  // },
  mixins: [],
  props: {},
  // components: {Search},
  data() {
    return {
      // db: null,
      storeId: null,
      historyList: [],
      srcValue: "",
      clkValue: "",
      scrollH: document.documentElement.clientHeight - 50,
      backFrom: -1,
      feedbackList: [],
      belong: 0
    };
  },
  computed: {
    // ...mapGetters({
    //     token: 'finalToken'
    // }),
    partsHistoryList() {
      const _historyList = JSON.parse(JSON.stringify(this.historyList));
      return _historyList.slice(0, 10);
    }
  },
  mounted() {},
  methods: {
    initData() {
      this.storeId = null;
      this.historyList = [];
      this.srcValue = "";
      this.clkValue = "";
      this.backFrom = -1;
      this.feedbackList = [];
    },
    onSearch() {
      // this.backFrom = 1
      // val = val.trims()
      // this.srcValue = val
      // if (val !== '') {
      //     let data = {}
      //     if (this.storeId) data.id = this.storeId
      //     data.usertoken = this.token
      //     let _list = JSON.parse(JSON.stringify(this.historyList))
      //     _list.unshift(val)
      //     if (_list.length > 20) _list.splice(-1, _list.length - 20)
      //     data.list = [...new Set(_list)]
      //     this.db.save(data, (e) => {
      //         if (e.type === 'success') console.log('数据写入成功', e)
      //         else console.log('数据写入失败', e)
      //         this.$router.go(-1)
      //     })
      // }
    },
    goBack() {
      // this.backFrom = 2
      // val = val.trims()
      // this.clkValue = val
      // this.$router.go(-1)
    },
    onCancel() {
      // this.$router.go(-1)
    },
    async onInput() {
      // val = val.trims()
      // if (val !== '') {
      //     let response = await keywordsFeedbackAPI(this.belong, val)
      //     let result = response.data
      //     if (result.code === 1) {
      //         this.feedbackList = result.data
      //     }
      // } else {
      //     this.feedbackList = []
      // }
    },
    onClear() {
      // this.db.clear((e) => {
      //     console.log('数据清空成功', e)
      //     if (e.type === 'success') {
      //         this.historyList = []
      //     }
      // })
    }
  }
  // beforeRouteLeave (to, from, next) {
  //     switch (this.backFrom) {
  //         case 1:
  //             if (this.srcValue !== '') to.query.search = this.srcValue
  //             break;
  //         case 2:
  //             if (this.clkValue !== '') to.query.search = this.clkValue
  //             break;
  //         default:
  //             break;
  //     }
  //     next()
  // }
};
</script>
