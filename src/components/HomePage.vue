<template>
    <div class="page-wrapper">
        <SideBar />
        <contentOverview />
    </div>
</template>

<script>
    import SideBar from "./sidebar/SideBar.vue";
    import contentOverview from "./ContentOverview.vue";

    export default {
        name: "HomePage",
        components: { SideBar, contentOverview },
    };
</script>

<style scoped>
    .page-wrapper {
        font-family: "Quicksand", sans-serif;
    }
</style>
