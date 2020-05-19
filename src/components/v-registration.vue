<template>
    <div class="v-registration">
        <a href="#">Регистрация</a>
        <v-vuelidate></v-vuelidate>
    </div>
</template>

<script>
    import vVuevalidate from './v-vuelidate'

    export default {
        name: "v-registration",
        comments: {
            vVuevalidate,
        },
        props: {},
        data() {
            return{

            }
        },
        computed: {},
        methods: {},
        watch:{},
        mounted() {
        }
    }
</script>

<style scoped>
    a {
        margin-right: 4em;
        text-decoration: none;
        color: #2c3e50;
        white-space: nowrap;
    }
</style>
