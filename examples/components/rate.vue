<template>
    <div id="rate">
        <div class="hd"><i class="zu-icon zu-icon-android-arrow-back" @click="goBack"></i></div>
        <Rate v-model="value"></Rate>
        <Rate allow-half v-model="valueHalf"></Rate>
        <Rate disabled allow-half v-model="valueDisabled"></Rate>
        <Rate show-text v-model="valueText"></Rate>
        <!--<Rate show-text v-model="valueText"></Rate>-->
        <!--<Rate show-text allow-half v-model="valueCustomText">-->
            <!--<span style="color: #f5a623">{{ valueCustomText }}</span>-->
        <!--</Rate>-->
        <!--<Rate disabled  allow-half v-model="valueDisabled"></Rate>-->
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value: 0,
                valueHalf: 2.5,
                valueText: 3,
                valueCustomText: 4.0,
                valueDisabled: 2.4
            }
        },
        methods: {
            goBack () {
                this.$router.go(-1)
            }
        }
    }
</script>
<style lang="scss">
#rate{
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
    .zu-rate{
        display: block;
        .zu-rate-star{
            font-size: 0.4rem;
            vertical-align: middle;
        }
        .zu-rate-text{
            span{
                font-size: 0.4rem;
                vertical-align: middle;
            }
        }
    }
}
</style>
