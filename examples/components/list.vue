<template>
    <div id="list">
        <div class="hd"><i class="zu-icon zu-icon-android-arrow-back" @click="goBack"></i></div>
        <list
            ref="scroller"
            v-model="loading"
            @on-scroll="">
            <div class="items" v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]">{{item}}</div>
        </list>
    </div>
</template>

<script>
export default {
    beforeRouteEnter (to, from, next) {
        next()
    },
    mixins: [],
    components: {},
    data () {
        return {
            loading: false
        }
    },
    methods: {
        goBack () {
            this.$router.go(-1)
        }
    },
    computed: {},
    created () {},
    beforeRouteUpdate (to, from, next) {
        next()
    }
}
</script>

<style lang="scss">
#list{
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
}
</style>
