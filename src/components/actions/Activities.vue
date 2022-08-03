<script setup lang="ts">
    import { useUserStore } from "../../stores/UserStore";
    const userStore = useUserStore();
    import Icons from "../../utils/IconEnums";

    interface ActionActivities {
        type: string;
        date: string;
        time: string;
        user: string;
    }

    defineProps<ActionActivities>();
</script>

<template>
    <div class="display-activity">
        <p class="display-activity--type">
            <i :class="Icons[type]" class="type-action-overview--icon"></i>
        </p>
        <div class="display-activity--data">
            <p>{{ date }} om {{ time }}</p>
            <p>{{ user }}</p>
        </div>
    </div>
</template>

<style lang="scss">
    .display-activity {
        display: flex;
        padding: 10px;

        &--data {
            padding: 0px 2 0px;
        }
    }
</style>
