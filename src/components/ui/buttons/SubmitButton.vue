<template>
<button type="submit">{{ title }}</button>
</template>
<script lang="ts" setup>
interface Props {
    title:string
}
defineProps<Props>()

</script>
<style lang="scss" scoped>
button{
    padding: 10px;
    border-radius: 20px;
    background-color: gainsboro;
    color: #000000;
    transition: all .3s linear;
    font-weight: 500;
    font-size: 20px;
    &:hover{
        color: #FFFFFF;
        background-color: gray;
        transition: all .3s linear;
    }
}
</style>