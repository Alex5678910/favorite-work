<template>
    <div class="v-cities">
        <button
                class="btn"
                @click="showPopup"
        >Ваш город
        </button>
        <v-popup v-if="isIn"
                 @fill="showPopup"/>
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
                isIn: false
            }
        },
        methods: {
            showPopup() {
                this.isIn = !this.isIn
            }
        },
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
