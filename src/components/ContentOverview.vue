<template>
    <div
        class="rightcontent"
        :class="[sideBarStatusOpen ? 'rightcontent--sharedview' : 'rightcontent--fullview']"
    >
        <router-view style="padding: 25px 45px;"></router-view>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['sideBarStatusOpen'])
</script>

<style lang="scss">
    .rightcontent {
        width: calc(100% - $leftSideBarOpenWidth);
        position: fixed;
        right: 0px;
        background-color: #fbfbfb;
        height: 100%;

        &--fullview {
            width: calc(100% - #{$leftSideBarClosedWidth});
        }

        &--sharedview {
            width: calc(100% - #{$leftSideBarOpenWidth});
        }
    }
</style>
