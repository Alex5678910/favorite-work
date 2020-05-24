<template>
    <div>
    <div class="main-menu">
        <v-cities></v-cities>
        <v-registration></v-registration>
        <v-enter></v-enter>
        <v-contacts></v-contacts>
    </div>
    <v-parallax></v-parallax>
    <v-footer></v-footer>
    </div>
</template>

<script>
    import vContacts from './v-contacts'
    import vRegistration from './v-registration'
    import vEnter from './v-enter'
    import vParallax from './v-parallax'
    import vFooter from './v-footer'
    import vCities from './v-cities'

    export default {
        name: 'v-main-wrapper',
        components: {
            vContacts,
            vRegistration,
            vEnter,
            vParallax,
            vFooter,
            vCities,
        },
    }
</script>


<style scoped>
    .main-menu {
        display: flex;
        justify-content: flex-end;
        margin: 2%;
    }
</style>
