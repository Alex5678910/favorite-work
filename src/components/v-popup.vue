<template>
    <div class="v-popup">
        <div class="v-popup_footer">
            <button class="close" @click="showPop">Закрыть</button>
        </div>
        <div class="v-popup_header">
            <ul>
                <router-link :to="item.city" tag="li" v-for="item in itemsOne" :key="item"><a>{{item.city}}</a></router-link>
            </ul>
            <ul>
                <router-link :to="item.city" tag="li" v-for="item in itemsTwo" :key="item"><a>{{item.city}}</a></router-link>
            </ul>
            <ul>
                <router-link :to="item.city" tag="li" v-for="item in itemsThree" :key="item"><a>{{item.city}}</a></router-link>
            </ul>
            <ul>
                <router-link :to="item.city" tag="li" v-for="item in itemsFour" :key="item"><a>{{item.city}}</a></router-link>
            </ul>
            <!--<span><i class="material-icons">close</i></span> иконки разные нормальные-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-popup",
        data() {
            return {
                itemsOne: [
                    {city: 'Самара' },
                    {city: 'Тольятти' },
                    {city: 'Москва' },
                    {city: 'Ростов' },
                    {city: 'Саратов' },
                    {city: 'Челябинск' },
                    {city: 'Оренбург' },
                    {city: 'Сызрань' },
                    {city: 'Воронеж' },
                    {city: 'Орск' },
                ],
                itemsTwo: [
                    {city: 'Махачкала' },
                    {city: 'Хабаровск' },
                    {city: 'Мурманск' },
                    {city: 'Петергов' },
                    {city: 'Грозный' },
                    {city: 'Липецк' },
                    {city: 'Рязань' },
                    {city: 'Астрахань' },
                    {city: 'Вологда' },
                    {city: 'Киров' },
                ],
                itemsThree: [
                    {city: 'Пенза' },
                    {city: 'Ульяновск' },
                    {city: 'Красноярск' },
                    {city: 'Краснодар' },
                    {city: 'Сочи' },
                    {city: 'Адлер' },
                    {city: 'Новочеркаск' },
                    {city: 'Черкеск' },
                    {city: 'Уфа' },
                    {city: 'Новороссийск' },
                ],
                itemsFour: [
                    {city: 'Казань' },
                    {city: 'Ярославль' },
                    {city: 'Свердловск' },
                    {city: 'Благовещенск' },
                    {city: 'Ставрополь' },
                    {city: 'Смоленск' },
                    {city: 'Тамбов' },
                    {city: 'Тула' },
                    {city: 'Саранск' },
                    {city: 'Псков' },
                ]
            }
        },
        methods: {
            showPop() {
                this.$emit('fill')
            },
        }
    }
</script>

<style scoped>
    .v-popup {
        padding: 16px;
        position: fixed;
        background-color: #363434;
        z-index: 10;
        width: 54em;
        border-radius: 5px;
        height: 23em;
    }

    .close {
        color: aliceblue;
        border-radius: 5px;
        background-color: chocolate;
    }

    .close:focus {
        outline: none;
    }

    .v-popup_header {
        display: flex;
        justify-content: space-around;
    }

    .v-popup_header li a {
        color: aliceblue;
        padding: 10px;
    }

    .v-popup_header li {
        list-style: none;
        padding: 5px;
    }
</style>
