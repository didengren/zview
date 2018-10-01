<template>
    <div id="search">
        <div class="hd"><i class="zu-icon zu-icon-android-arrow-back" @click="goBack"></i></div>
        <search></search>
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
        return {}
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
#search{
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
    .zu-search{
        .zu-search-bar{
            .search-bar-form{
                .search-bar-box{
                    .zu-icon{
                        font-size: 0.4rem;
                    }
                    .search-bar-input{
                        font-size: 0.4rem;
                    }
                }
                .search-bar-label{
                    font-size: 0.4rem;
                    text-align: center;
                }
            }
            .search-bar-cancel-btn{
                font-size: 0.4rem;
            }
        }
    }
}
</style>
