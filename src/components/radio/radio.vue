<template>
    <div :class="wrapClasses">
        <div 
            :class="prefixCls+'-items'" 
            v-for="(item, i) in options"
            @click="handleStatusClk(item, i)">
            <i :class="['zu-icon', iconStatus[i]?'zu-icon-ios-checkmark':'zu-icon-ios-checkmark-outline', prefixCls+'-icon', iconStatus[i]?prefixCls+'-icon-active':'']"></i>
            <slot name="each-item" :text="item | optionText"></slot>
        </div>
    </div>
</template>

<script>
const prefixCls = 'zu-radio'
import opDataFlt from '../../mixins/optionDataFilter'
export default {
    name: 'Radio',
    mixins: [opDataFlt],
    props: {
        value: {
            type: [String, Number],
            default: ''
        },
        options: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            prefixCls: prefixCls,
            curValue: this.value,
            iconStatus: []
        }
    },
    mounted () {
        this.initSelected(this)
    },
    computed: {
        wrapClasses () {
            return [
                `${prefixCls}-wrapper`,
            ]
        }
    },
    methods: {
        handleStatusClk (item, i) {
            if (this.curValue === this.optionReturn(item, i)) return
            this.iconStatus.forEach((item1, j) => {
                this.$set(this.iconStatus, j, false)
            })
            this.$set(this.iconStatus, i, true)
            this.curValue = this.optionReturn(item, i)
            this.$emit('on-change', this.curValue)
        }
    }
}
</script>

<style lang="scss"></style>
