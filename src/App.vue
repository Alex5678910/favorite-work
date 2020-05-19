<template>
    <div id="app">
        <div class="main-menu">
            <v-button></v-button>
            <v-registration></v-registration>
            <v-enter></v-enter>
            <v-contacts></v-contacts>
        </div>
        <v-parallax></v-parallax>
        <v-footer></v-footer>
    </div>
</template>
<script>
    import vContacts from './components/v-contacts'
    import vRegistration from './components/v-registration'
    import vEnter from './components/v-enter'
    import vParallax from './components/v-parallax'
    import vFooter from './components/v-footer'
    import vButton from './components/v-button'

    export default {
        name: 'App',
        components: {
            vContacts,
            vRegistration,
            vEnter,
            vParallax,
            vFooter,
            vButton,
        },
        props: {},
        data() {
            return {

            }
        },
        computed: {},
        methods: {},
        watch: {},
        mounted() {
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    .main-menu {
        display: flex;
        justify-content: flex-end;
        margin: 2%;
    }

</style>
