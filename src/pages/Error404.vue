<template>
<MainLayout>
    <div class="error">
        Упс 404...
    </div>

</MainLayout>
</template>
<script setup lang="ts">
import MainLayout from '../components/layout/MainLayout.vue';

</script>
<style lang="scss" scoped>
    .error{
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 100px;
        font-weight: 700;
        font-size: 50px;
    }
</style>