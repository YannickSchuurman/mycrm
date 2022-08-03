<script setup lang="ts">
    import ClientData from "./ClientData.vue";
    import ClientActionContainer from "./ClientActionContainer.vue";
</script>

<template>
    <div class="client-overview">
        <ClientData />
        <ClientActionContainer />
    </div>
</template>

<style lang="scss">
    .client-overview {
        height: 100%;
        display: flex;
    }

    .client-overview-title {
        margin: 20px;
    }
</style>
