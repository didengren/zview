<template>
    <div :class="classes" @mouseleave="handleMouseleave">
        <input type="hidden" :name="name" :value="currentValue">
        <div
            v-for="item in count"
            :class="starCls(item)"
            @mousemove="handleMousemove(item, $event)"
            @click="handleClick(item)">
            <span :class="[prefixCls + '-star-content']" type="half"></span>
        </div>
        <div :class="[prefixCls + '-text']" v-if="showText" v-show="currentValue > 0">
            <slot><span>{{ currentValue }}</span> <span v-if="currentValue <= 1">星</span><span v-else>star</span></slot>
        </div>
    </div>
</template>
<script>
    const prefixCls = 'zu-rate'
    export default {
        name: 'Rate',
        props: {
            count: {
                type: Number,
                default: 5
            },
            value: {
                type: Number,
                default: 0
            },
            allowHalf: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            showText: {
                type: Boolean,
                default: false
            },
            name: {
                type: String
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                hoverIndex: -1,
                isHover: false,
                isHalf: this.allowHalf && this.value.toString().indexOf('.') >= 0, // 打开了allow&&有小数点的话isHalf为true
                currentValue: this.value
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-disabled`]: this.disabled
                    }
                ];
            }
        },
        watch: {
            value (val) {
                this.currentValue = val;
            },
            currentValue (val) {
                this.setHalf(val);
            }
        },
        methods: {
            /**
             * 控制star的样式
             * @params value 遍历到的star是第几颗
             * @key currentIndex 当前有几颗star
             */
            starCls (value) {
                const hoverIndex = this.hoverIndex;
                const currentIndex = this.isHover ? hoverIndex : this.currentValue;
                let full = false;
                let isLast = false;
                if (currentIndex >= value) full = true; // // 当前value被currentValue填满时full为true
                if (this.isHover) {
                    isLast = currentIndex === value;
                } else {
                    isLast = Math.ceil(this.currentValue) === value; // 当前value匹配到currentValue的最后一颗star时isLast为true
                }
                return [
                    `${prefixCls}-star`,
                    {
                        ['zu-rate-android-star zu-rate-star-full']: (!isLast && full) || (isLast && !this.isHalf),
                        ['zu-rate-android-star-half zu-rate-star-half']: isLast && this.isHalf,
                        ['zu-rate-android-star-outline zu-rate-star']: !full
                    }
                ];
            },
            handleMousemove(value, event) {
                if (this.disabled) return;
                this.isHover = true;
                if (this.allowHalf) {
                    const type = event.target.getAttribute('type') || false;
                    this.isHalf = type === 'half';
                } else {
                    this.isHalf = false;
                }
                this.hoverIndex = value;
            },
            handleMouseleave () {
                if (this.disabled) return;
                this.isHover = false;
                this.setHalf(this.currentValue);
                this.hoverIndex = -1;
            },
            // currentValue变动时触发
            setHalf (val) {
                this.isHalf = this.allowHalf && val.toString().indexOf('.') >= 0; // 打开了allow&&有小数点的话isHalf为true
            },
            handleClick (value) {
                if (this.disabled) return;
//                 value++;
                if (this.isHalf) value -= 0.5;
                this.currentValue = value;
                this.$emit('input', value);
                this.$emit('on-change', value);
            }
        }
    };
</script>