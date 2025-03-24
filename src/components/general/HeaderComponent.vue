<template>
    <header>

        <ul>
            <li>
                <HeaderLink title='Главная' nav='home' />
            </li>
            <li>
                <HeaderLink title='Пример №1' nav='example' />
            </li>
            <li>
                <HeaderLink title='Пример №2' nav='secondExample' />
            </li>
            <li>
                <HeaderLink title='Пример №3' nav='thirdExample' />
            </li>
        </ul>
    </header>
</template>
<script setup lang="ts">
import HeaderLink from '../ui/HeaderLink.vue';
</script>
<style lang="scss" scoped>
ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 20px
}
</style>