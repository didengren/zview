<template>
    <div :class="prefixCls">
        <div
            :class="[prefixCls+'-bar', {'search-bar-focus': !isCancel || currentValue}]">
            <slot name="left"></slot>
            <form 
                class="search-bar-form"
                @submit.prevent="$emit('on-submit', value)"
                action=".">
                <div class="search-bar-box">
                    <i class="zu-icon zu-icon-search"></i>
                    <input
                        v-model="currentValue"
                        ref="input"
                        type="search"
                        class="search-bar-input"
                        :placeholder="placeholder"
                        :id="`search_input_${uuid}`"
                        @focus="onFocus"
                        @blur="onBlur"/>
                </div>
                <label
                    :for="`search_input_${uuid}`"
                    class="search-bar-label"
                    v-show="!isFocus && !currentValue">
                    <i class="zu-icon zu-icon-search"></i>
                    <span>{{placeholder}}</span>
                </label>
            </form>
            <a
                href="javascript:"
                class="search-bar-cancel-btn"
                @click="clear">{{cancelText}}</a>
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
import uuidMixin from '../../mixins/uuid'
const prefixCls = 'zu-search'
export default {
    name: 'Search',
    mixins: [uuidMixin],
    props: {
        value: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: '请输入。。。'
        },
        cancelText: {
            type: String,
            default: '取消'
        }
    },
    data () {
        return {
            prefixCls: prefixCls,
            currentValue: this.value,
            isCancel: true,
            isFocus: false
        }
    },
    methods: {
        touch () {
            this.isCancel = false
            // this.$emit('on-touch')
        },
        onFocus () {
            this.isFocus = true
            this.$emit('on-focus')
            this.touch()
        },
        onBlur () {
            this.isFocus = false
            this.$emit('on-blur')
        },
        clear () {
            this.currentValue = ''
            this.emitEvent()
            this.isFocus = true
            this.setFocus()
        },
        emitEvent () {
            this.$nextTick(() => {
                this.$emit('input', this.currentValue)
                this.$emit('on-change', this.currentValue)
            })
        },
        setFocus () {
            this.$refs.input.focus()
        }
    },
    computed: {},
    watch: {
        value (val) {
            this.currentValue = val
        }
    },
    created () {}
}
</script>
