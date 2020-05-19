<template>
    <div class="v-cities">
        <button
                class="btn"
                @click="showPopupInfo"
        >Ваш город
        </button>
        <v-popup v-if="isInfoPopupVisible"/>
    </div>
</template>

<script>
    import vPopup from './v-popup'

    export default {
        name: "v-button",
        components: {
            vPopup,
        },
        props: {},
        data() {
            return {
                isInfoPopupVisible: false
            }
        },
        computed: {},
        methods: {
            showPopupInfo() {
                this.isInfoPopupVisible = !this.isInfoPopupVisible
            }
        },
        watch: {},
        mounted() {
        }
    }
</script>


<style scoped>
    button {
        background: transparent;
        border: none;
        font-size: 17px;
        margin-right: 500px;
        padding: 0;
        margin-top: -1px;
        cursor: pointer;
        white-space: nowrap;
    }

    button:focus {
        outline: none;
    }
</style>
