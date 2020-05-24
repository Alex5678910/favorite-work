<template>
    <div class="v-contacts">
        <router-link to="/contacts">О нас</router-link>
    </div>
</template>

<script>
    export default {
        name: "v-contacts",
        components: {},
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
