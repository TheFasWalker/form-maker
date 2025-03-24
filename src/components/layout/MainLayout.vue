<template>
    <div class="main">
        <div class="content">
    <HeaderComponent/>
    
    <slot></slot>
</div>
</div>
</template>

<script lang="ts" setup>
import HeaderComponent from '../general/HeaderComponent.vue';


</script>
<style lang="scss">
    .main{
        max-width: 1920px;
        margin: 0 auto;
    }
    .content{
        padding:20px;
    }
</style>