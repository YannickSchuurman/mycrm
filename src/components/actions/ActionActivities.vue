<script setup lang="ts">
    import Activities from "./Activities.vue";
    import { useUserStore } from "../../stores/UserStore";
    const userStore = useUserStore();
</script>

<template>
    <div class="action-activities-container">
        <p style="margin: 20px 0px">
            <strong>| Recente activiteiten</strong>
        </p>
        <div class="activities-overview">
            <Activities
                v-for="activities in userStore.recentactivities"
                :type="activities.type"
                :date="activities.date"
                :time="activities.time"
                :user="activities.user"
                :status-call="activities.statusCall" />
            <div class="solid"></div>
        </div>
    </div>
</template>

<style lang="scss">
    .action-activities-container {
        margin-top: 15px;
    }

    .solid:after {
        content: "";
        display: block;
        width: 100%;
    }
</style>
