<template>
<div class="footer">
    <h4>© 2015 favorite-work  поиск работы: найти работу <br>
        без опыта, свежие вакансии от прямых работодателей.</h4>
    <h4>Наши контакты 89608441317</h4>
</div>
</template>

<script>
    export default {
        name: "v-footer"
    }
</script>

<style scoped>
.footer{
    width: 100%;
    height: 10em;
    background-color: #2c3e50;
    color: aliceblue;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
}
a {
    margin-right: 4em;
    text-decoration: none;
    color: #2c3e50;
    white-space: nowrap;
}
</style>
