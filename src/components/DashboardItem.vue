<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps(['disableButton', 'disableHeader', 'dashboardIcon'])
</script>

<template>
    <div class="dashboard-item">
        <div
            v-if="!disableHeader"
            class="dashboard-item--header"
        >
            <slot name="header"></slot>
            <PrimeAvatar
                v-if="dashboardIcon"
                :icon="dashboardIcon"
                class="mr-2 dashboard-item--header--icon"
                size="large"
                shape="circle"
                style="background-color:#2196F3;
                color: #ffffff"
            />
        </div>
        <div class="dashboard-item--content">
            <slot name="content"></slot>
        </div>
    </div>
</template>


<style lang="scss">
.dashboard-item {
    background-color: white;
    border: 1px solid $light-grey;
    border-radius: 10px;

    &--header {
        display: flex;
        justify-content: left;
        position: relative;
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid $light-grey;
        padding: 0px 40px;

        &--icon {
            position: absolute;
            right: -20px;
            top: -15px;
        }

        .p-dropdown {
            border: unset !important;
            height: 40px;
            margin: auto 0;
            line-height: 20px;
        }

     }

    &--content {
        height: calc(100% - 60px);
        text-align: center;
    }
}
</style>
