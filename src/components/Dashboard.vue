<script setup lang="ts">
import '@fullcalendar/core/vdom' // ! add it
import '@fullcalendar/core'
import FullCalendar from 'primevue/fullcalendar'

import { ref } from 'vue'
import DashboardItem from "./DashboardItem.vue"
import listPlugin from '@fullcalendar/list';

import {onMounted} from "vue";
import StretchComponents from "../utils/StretchComponents";

const options =  ref({
    plugins:[listPlugin],
    initialView: 'listWeek',
    height: "100%"
});

const events =  ref([
    {
        "id": 1,
        "title": "All Day Event",
        "start": "2022-11-16"
    },
]);



onMounted(()=> {
    new StretchComponents();
})


</script>


<template>
    <div class="dashboard">
        <div class="dashboard-overlay --green200"></div>
        <div class="dashboard-intro">
            <div class="dashboard-intro-welcome">
                <h2>Welkom, Yannick Schuurman</h2>
                <h5 class="dashboard-intro-welcome-subtitle">Bedrijf BV</h5>
            </div>
            <PrimeButton
                label="Klant aanmaken"
                icon="pi pi-user-plus"
                class="p-button"
                style="height: 35px"
            />
        </div>
        <PrimeDivider style="margin-bottom:40px"></PrimeDivider>
        <div class="dashboard-row row3 dashboard-actions" style="display: flex;">
            <DashboardItem
                dashboardIcon="pi pi-book"
            >
                <template v-slot:header>
                    <h1>8</h1><p>nieuwe taken:</p>
                </template>
                <template v-slot:content>
                    <div>
                        <h1>8</h1>
                        <div>
                            <p>Nieuwe taken</p>
                            <PrimeButton
                                label="Bekijk taken"
                                icon="pi pi-user-plus"
                                class="p-button"
                                style="height: 35px"
                            />
                        </div>
                    </div>
                </template>
            </DashboardItem>
            <DashboardItem>
                <template v-slot:header>
                    <p>Afgelopen dag</p>
                </template>
                <template v-slot:content>
                    <PrimeBadge value="2" severity="success"></PrimeBadge>
                </template>
            </DashboardItem>
            <DashboardItem>
                <template v-slot:header>
                    <p>Afgelopen dag</p>
                </template>
                <template v-slot:content>
                    <p>content</p>
                </template>
            </DashboardItem>
        </div>
        <div class="dashboard-row stretchtobottom substract-20 row3 dashboard-actions" style="display: flex;">
            <DashboardItem
                :disableButton="true"
                :disableHeader="true"
            >
                <template v-slot:header>
                    <p>Mijn agenda</p>
                </template>
                <template v-slot:content>
                    <FullCalendar :events="events" :options="options" defaultView:="list"/>
                </template>
            </DashboardItem>
            <DashboardItem>
                <template v-slot:header>
                    <p>Afgelopen dag</p>
                </template>
                <template v-slot:content>
                    <p>content</p>
                </template>
            </DashboardItem>
            <DashboardItem>
                <template v-slot:header>
                    <p>Afgelopen dag</p>
                </template>
                <template v-slot:content>
                    <p>content</p>
                </template>
            </DashboardItem>
        </div>
    </div>
</template>

<style lang="scss">
.dashboard {
    position: relative;

    &-row {
        margin: 20px 0px;
        height: 200px;
    }

    &-overlay{
        position: absolute;
        width: 100%;
        height: 35%;
        background-color: lightgrey;
        z-index: -1;
        top: 0;
        left: 0;
    }

    &-intro {
        display: flex;
        justify-content: space-between;
        position: relative;
        color:white;

        &-welcome {
            & > * {
                margin: 10px 0px;
            }
        }

        button {
            position: absolute;
            right: 0;
            bottom: 0;
            background-color: $home-color;
        }
    }
}

.row3 {
    justify-content: space-between;

    & > * {
        width: 30%;
    }
}

// Change default styling of Prime components
.fc-toolbar-title {
    font-size: 1rem !important;
}

.fc .fc-toolbar.fc-header-toolbar {
    margin: 1rem  !important;
}
.fc-list {
    border: unset !important;
    border-top: 1px solid $light-grey !important;
}
</style>
