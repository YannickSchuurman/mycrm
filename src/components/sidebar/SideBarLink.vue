<script setup lang="ts">
const props = defineProps(['isFavorite', 'label'])
</script>

<template>
    <div>
        <p class="sidebar--clientList--client">{{ props.label }} </p>
    </div>
</template>

<style scoped>

</style>
