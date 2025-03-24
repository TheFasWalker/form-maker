<template>
<button type="reset">{{ title }}</button>
</template>
<script setup lang="ts">
interface Props{
    title:string
}
defineProps<Props>()
</script>
<style scoped lang="scss">
    button {
        padding: 10px;
        border-radius: 20px;
        background-color: red;
        color: #000000;
        transition: all .3s linear;
        font-weight: 500;
        font-size: 20px;
    &:hover{
        color: #FFFFFF;
        background-color: rgb(161, 9, 9);
        transition: all .3s linear;
    }
    }
</style>