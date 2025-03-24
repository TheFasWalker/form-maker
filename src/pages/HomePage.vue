<template>
    <MainLayout>
        <div class="main-page">
        <h1>Главная разводящая страница</h1>
        Спасибо что потратили своё время на ознакомление с моей работой!
        <a href="mailto:krinickij.v.a@gmail.com">krinickij.v.a@gmail.com</a>
        <a href="https://t.me/krinickijva">tg: @krinickijva</a>
    </div>
    </MainLayout>
</template>
<script setup lang="ts">
import MainLayout from '../components/layout/MainLayout.vue'
</script>
<style lang="scss" scoped>
    .main-page{
        width: 600px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 25px auto;
    }
</style>