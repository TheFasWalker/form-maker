<template>
    <router-link :to="{ name: nav }" class="link">
        {{ title }}
    </router-link>
</template>
<script setup lang="ts">

interface Props {
    title: string,
    nav: string
}
defineProps<Props>()
</script>
<style lang="scss" scoped>
.link {
    font-size: 16px;
    font-weight: 400;
}

.router-link-active {
    font-weight: 700;
    text-decoration: underline;
}
</style>