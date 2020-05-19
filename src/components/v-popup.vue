<template>
    <div class="v-popup">
        <div class="v-popup_footer">
            <button class="close">Закрыть</button>
        </div>
        <div class="v-popup_header">
            <ul>
                <li><a href="#">Самара</a></li>
                <li><a href="#">Тольятти</a></li>
                <li><a href="#">Москва</a></li>
                <li><a href="#">Ростов</a></li>
                <li><a href="#">Саратов</a></li>
                <li><a href="#">Челябинск</a></li>
                <li><a href="#">Оренбург</a></li>
                <li><a href="#">Сызрань</a></li>
                <li><a href="#">Воронеж</a></li>
                <li><a href="#">Орск</a></li>
            </ul>
            <ul>
                <li><a href="#">Махачкала</a></li>
                <li><a href="#">Хабаровск</a></li>
                <li><a href="#">Мурманск</a></li>
                <li><a href="#">Петергов</a></li>
                <li><a href="#">Грозный</a></li>
                <li><a href="#">Липецк</a></li>
                <li><a href="#">Рязань</a></li>
                <li><a href="#">Астрахань</a></li>
                <li><a href="#">Вологда</a></li>
                <li><a href="#">Киров</a></li>
            </ul>
            <ul>
                <li><a href="#">Пенза</a></li>
                <li><a href="#">Ульяновск</a></li>
                <li><a href="#">Красноярск</a></li>
                <li><a href="#">Краснодар</a></li>
                <li><a href="#">Сочи</a></li>
                <li><a href="#">Адлер</a></li>
                <li><a href="#">Новочеркаск</a></li>
                <li><a href="#">Черкеск</a></li>
                <li><a href="#">Уфа</a></li>
                <li><a href="#">Новороссийск</a></li>
            </ul>
            <ul>
                <li><a href="#">Казань</a></li>
                <li><a href="#">Ярославль</a></li>
                <li><a href="#">Свердловск</a></li>
                <li><a href="#">Благовещенск</a></li>
                <li><a href="#">Ставрополь</a></li>
                <li><a href="#">Смоленск</a></li>
                <li><a href="#">Тамбов</a></li>
                <li><a href="#">Тула</a></li>
                <li><a href="#">Саранск</a></li>
                <li><a href="#">Псков</a></li>
            </ul>
            <!--<span><i clas#s="material-icons">close</i></span> иконки разные нормальные-->
        </div>
        <div class="v-popup_content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-popup",
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
