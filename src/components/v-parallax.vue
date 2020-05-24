<template>
    <div>
        <div class="parallax">
            <div class="parallax-content">
                <h1>Найди себе работу...</h1>
            </div>
        </div>
        <div class="parallax-item">
            <ul>
                <li>Экономисты</li>
                <li>Юристы</li>
                <li>Менеджеры</li>
                <li>Программисты</li>
                <li>Маркетологи</li>
            </ul>
            <ul>
                <li>Музыканты</li>
                <li>Актеры</li>
                <li>Архитекторы</li>
                <li>Врачи</li>
                <li>Сантехники</li>
            </ul>
            <ul>
                <li>Дипломаты</li>
                <li>Каскадеры</li>
                <li>Дизайнеры</li>
                <li>Пиар менеджеры</li>
                <li>Продюсеры</li>
            </ul>
            <ul>
                <li>Учёные</li>
                <li>Таксисты</li>
                <li>Психологи</li>
                <li>Режиссеры</li>
                <li>Художники</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-parallax"
    }
</script>

<style scoped>
    .parallax {
        background-image: url(./imegs/fotka.jpg);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-attachment: fixed;
        height: 40vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .parallax h1 {
        color: #2199bd;
        font-size: 70px;
    }

    .parallax-item {
        display: flex;
        justify-content: center;
    }

    ul{
        list-style:none;
        margin:0;
        padding: 0;
    }
    li{
        padding:5px;
        font-size:16px;
    }

    li:before{
        content: '';
        display: inline-block;
        height:7px;
        width: 7px;
        vertical-align: middle;
        border-radius:50%;
        background: linear-gradient(to top, #0fea07, #042ef6);
        margin-right:5px;
    }
</style>
