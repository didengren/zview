<template>
    <div class="list">
        <slot />
        <div v-show="loading">
            <span>{{loadText}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'list',
    beforeRouteEnter (to, from, next) {
        next()
    },
    mixins: [],
    components: {},
    data () {
        return {}
    },
    model: {
        prop: 'loading'
    },
    props: {
        loading: {
            type: Boolean,
            default: false
        },
        loadText: {
            type: String,
            default: '加载中'
        }
    },
    methods: {},
    computed: {},
    mounted () {
        console.log(this.$el)
    },
    beforeRouteUpdate (to, from, next) {
        next()
    }
}
</script>

<style lang="scss"></style>
