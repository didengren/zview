/**
 *
 * <pre>
 *  Version         Date            Author          Description
 * ---------------------------------------------------------------------------------------
 *  1.0.0           2017/07/25      Sam Xu          -
 * </pre>
 * @author Sam Xu
 * @version 1.0.0 2018/3/14 13:06
 * @date 2018/3/14 13:06
 * @since 1.0.0
 */
// 这个难道是一个es6的补丁？正常的vue-cli中已经包含了补丁了应该。所以这个暂时不知道去掉后怎么重现故障
import 'core-js/fn/array/find-index'

import Hello from './components/hello'
import ZInput from './components/input'
import Radio from './components/radio'
import Checkbox from './components/checkbox'
import Rate from './components/rate'
import Search from './components/search'
import List from './components/list'
let VueComponentsLib = {
  Hello,
  ZInput,
  Radio,
  Checkbox,
  Rate,
  Search,
  List
}

const install = function (Vue, opts = {}) {
  Object.keys(VueComponentsLib).forEach((key) => {
    Vue.component(key, VueComponentsLib[key])
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
// 把 install方法添加到 VueComponentsLib 中
export default Object.assign(VueComponentsLib, {install})
