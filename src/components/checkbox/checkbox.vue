<template>
    <div :class="wrapClasses">
        <div
            :class="prefixCls+'-items'"
            v-for="(item, i) in options"
            @click="handleStatusClk(item, i)">
            <i :class="['zu-icon', iconStatus[i]?'zu-icon-android-checkbox':'zu-icon-android-checkbox-blank', prefixCls+'-icon', iconStatus[i]?prefixCls+'-icon-active':'']"></i>
            <slot name="each-item" :text="item | optionText"></slot>
        </div>
    </div>
</template>

<script>
const prefixCls = 'zu-checkbox'
import opDataFlt from '../../mixins/optionDataFilter'
export default {
    name: 'Checkbox',
    mixins: [opDataFlt],
    props: {
        value: {
            type: Array,
            default: []
        },
        options: {
            type: Array,
            required: true
        }
    },
    data () {
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
            this.curValue.splice(0,this.curValue.length)
            this.$set(this.iconStatus, i, !this.iconStatus[i])
            this.iconStatus.forEach((item1, j) => {
                if (item1) {
                    this.curValue.push(this.optionReturn(this.options[j], j))
                }
            })
            this.$emit('on-change', this.curValue)
        }
    }
}
</script>

<style lang="scss"></style>
