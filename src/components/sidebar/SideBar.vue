<script setup lang="ts">
    import "./SideBar.scss";
    import toggleLeftSideBar from "./ToggleLeftSideBar.vue";
    import SideBarLink from "./SideBarLink.vue";
    import clientsList from "../../../public/clients.json";
    import { reactive, ref } from "vue";

    const props = defineProps(["sideBarStatusOpen"]);
    const acSidebar = ref(null);
    const state = reactive({
        clients: clientsList,
    });

    const onMouseEnter = () => {
        if (props.sideBarStatusOpen) {
            return;
        }
        // because Vue needs to process sideBarStatusOpen first, so we change hover state after 10ms
        setTimeout(() => {
            if (!acSidebar.value.classList.contains("preventhover")) {
                acSidebar.value.classList.add("open");
            }
        }, 10);
    };

    const onMouseLeave = () => {
        if (props.sideBarStatusOpen) {
            return;
        }
        // because Vue needs to process sideBarStatusOpen first, so we change hover state after 10ms
        setTimeout(() => {
            if (!acSidebar.value.classList.contains("preventhover")) {
                acSidebar.value.classList.remove("open");
            }
        }, 10);
    };

    const onLeftSideBarToggle = (isOpen: boolean) => {
        !isOpen
            ? acSidebar.value.classList.remove("open")
            : acSidebar.value.classList.add("open");
    };
</script>

<template>
    <div
        ref="acSidebar"
        class="sidebar"
        :class="[sideBarStatusOpen ? 'pinned' : 'not-pinned']"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
    >
        <toggleLeftSideBar
            :sideBarStatusOpen="sideBarStatusOpen"
            @onLeftSideBarToggle="onLeftSideBarToggle"
            @onLeftSideBarPreventHover="
                $refs.acSidebar.classList.add('preventhover')
            "
            @onLeftSideBarEnableHover="
                $refs.acSidebar.classList.remove('preventhover')
            "
        ></toggleLeftSideBar>
        <div class="sidebar-content">
            <span class="p-input-icon-left sidebar--menu-item">
                <i class="pi pi-search" />
                <InputText type="text" v-model="value3" placeholder="Search" class="sidebar-search"/>
            </span>
            <PrimeDivider class="sidebar-divider"/>
            <SideBarLink
                v-for="client in state.clients"
                :key="client.id"
                :label="client.name"
                :isFavorite="client.favorite"
            />
        </div>
    </div>
</template>
