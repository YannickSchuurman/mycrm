<template>
    <div class="rightcontent">
        <ClientOverview />
    </div>
</template>

<script setup lang="ts">
    import ClientOverview from "./clients/ClientOverview.vue";
</script>

<style lang="scss">
    .rightcontent {
        width: calc(100% - $sidebar-width);
        position: fixed;
        right: 0px;
        background-color: $ultra-light-grey;
        height: 100%;
    }
</style>
