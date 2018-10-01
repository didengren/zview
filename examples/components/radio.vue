<template>
<div id="radio">
    <div class="hd"><i class="zu-icon zu-icon-android-arrow-back" @click="goBack"></i></div>
    <div class="wrap">
        <radio :options="optionItems" :value="radioValue" @on-change="change">
            <template slot-scope="props" slot="each-item">
                <span>{{props.text}}</span>
            </template>
        </radio>
    </div>
</div>
</template>

<script>
export default {
    data () {
        return {
            optionItems: [
                {key: '001', value: '爸爸'},
                {key: '002', value: '妈妈'},
                {key: '003', value: '我'},
                {key: '004', value: '姐姐'},
            ],
            radioValue: '001'
        }
    },
    methods: {
        goBack () {
            this.$router.go(-1)
        },
        change (value) {
            console.log('change:', value)
        }
    }
}
</script>

<style lang="scss">
#radio{
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
    .zu-radio-wrapper{
        .zu-radio-items{
            font-size: 0.4rem;
        }
    }
}
</style>
