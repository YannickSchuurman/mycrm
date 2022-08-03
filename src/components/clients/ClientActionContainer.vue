<script setup lang="ts">
    import DisplayAction from "../actions/DisplayAction.vue";
    import ActionActivities from "../actions/ActionActivities.vue";
</script>

<template>
    <div class="client-action-container">
        <div>
            <p><strong>| Acties</strong></p>
            <button class="action-button lighthover">
                <i class="fa-solid fa-plus"></i>
                Actie aanmaken
            </button>
            <DisplayAction icon="fa-note-sticky" type="Notitie" />
            <DisplayAction icon="fa-list-check" type="Taak" />
            <DisplayAction icon="fa-paperclip" type="Bijlages" />
            <DisplayAction icon="fa-calendar-check" type="Afspraken" />
        </div>
        <ActionActivities />
        <!--    v-for="activity in client.recentactivities"-->
        <!--  />-->
    </div>
</template>

<style lang="scss">
    .client-action-container {
        width: 30%;
        background-color: white;
        padding: 20px 40px 20px 20px;
        border-left: 1px solid $light-grey;

        .action-button {
            margin: 20px 0px;
            padding: 7px;
            color: $dark-grey;
            border: 1px solid $dark-grey;
            border-radius: 5px;
            background-color: transparent;
            cursor: pointer;
        }
    }
</style>
