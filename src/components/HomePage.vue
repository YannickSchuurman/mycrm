<script setup lang="ts">
import SideBar from "./sidebar/SideBar.vue";
import contentOverview from "./ContentOverview.vue";
import {onMounted, reactive, ref} from "vue";
import {emitter} from "../utils/Emitter";

const state = reactive({
    sidebarStatus: false
});

const sideBarStatusChanged = (status:boolean) => {
    state.sidebarStatus = status;
}

onMounted(()=> {
    const sideBarStatus = window.localStorage.getItem("LEFTSIDEBARSTATUS");
    if (sideBarStatus) {
        state.sidebarStatus = JSON.parse(sideBarStatus);
    } else {
        state.sidebarStatus = true;
        window.localStorage.setItem("LEFTSIDEBARSTATUS", true);
    }

    emitter.on("LEFTSIDEBARTOGGLED", sideBarStatusChanged);
})

</script>

<template>
    <div class="page-wrapper">
        <SideBar :sideBarStatusOpen="state.sidebarStatus"/>
        <contentOverview :sideBarStatusOpen="state.sidebarStatus"/>
    </div>
</template>


<style lang="scss">
    .page-wrapper {
        // Plus 1 because there is a possibility of a decimal number, because the topbar uses 0.5rem for padding
        height: calc(100vh - $topbar-height + 1);
    }
</style>
