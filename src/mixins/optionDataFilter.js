export default {
    filters: {
        optionText (item) {
            let _val = null
            if (typeof item === 'string') {
                _val = item
            } else if (typeof item === 'object') {
                _val = item.value ? item.value : ''
            }
            return _val
        }
    },
    methods: {
        optionReturn (item, i) {
            let _val = null
            if (typeof item === 'string') {
                _val = i
            } else if (typeof item === 'object') {
                _val = item.key ? item.key : ''
            }
            return _val
        },
        initSelected (vm) {
            if (!vm.options || !vm.iconStatus || !vm.curValue) return
            if (vm.options.length > 0) {
                vm.options.forEach((item, i) => {
                    vm.iconStatus.push(false)
                    if (typeof vm.curValue === 'string' && vm.curValue === vm.optionReturn(item, i)) {
                        vm.$set(vm.iconStatus, i, true)
                    } else if (vm.curValue instanceof Array) {
                        vm.curValue.forEach((cItem) => {
                            if (cItem === vm.optionReturn(item, i)) {
                                vm.$set(vm.iconStatus, i, true)
                            }
                        })
                    }
                })
            }
        }
    }
}
