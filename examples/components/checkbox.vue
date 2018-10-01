<template>
<div id="checkbox">
    <div class="hd"><i class="zu-icon zu-icon-android-arrow-back" @click="goBack"></i></div>
    <div class="wrap">
        <checkbox :options="optionItems" :value="checkboxValue" @on-change="change">
            <template slot-scope="props" slot="each-item">
                <span>{{props.text}}</span>
            </template>
        </checkbox>
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
                {key: '004', value: '姐姐'}
            ],
            checkboxValue: ['002']
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
#checkbox{
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
    .zu-checkbox-wrapper{
        .zu-checkbox-items{
            font-size: 0.4rem;
        }
    }
}
</style>
