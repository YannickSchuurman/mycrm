<script setup lang="ts">
import {emitter} from "../../utils/Emitter";
import {computed} from "vue";

const props = defineProps(['sideBarStatusOpen'])
const emit = defineEmits(['onLeftSideBarToggle', 'onLeftSideBarEnableHover', 'onLeftSideBarPreventHover']);

const switchToggle = () => {
    emitter.emit("hoi")
    if (props.sideBarStatusOpen) {
        window.localStorage.setItem("LEFTSIDEBARSTATUS", false);
        emitter.emit("LEFTSIDEBARTOGGLED", false);
        emit("onLeftSideBarToggle", false);
    } else {
        window.localStorage.setItem("LEFTSIDEBARSTATUS", true);
        emitter.emit("LEFTSIDEBARTOGGLED", true);
        emit("onLeftSideBarToggle", true);
    }
};

const guidanceSidebar = computed(() => {
    return props.sideBarStatusOpen ? 'Dichtklappen' : 'Openklappen'
})
</script>

<template>
    <div
        class="toggleLeftSideBar no-hover"
        v-tooltip="guidanceSidebar"
        @click="switchToggle"
        @mouseenter="$emit('onLeftSideBarPreventHover')"
        @mouseleave="$emit('onLeftSideBarEnableHover')"
    >
        <i :class="[sideBarStatusOpen ? ' fas fa-angle-left no-hover' : 'fas fa-angle-right no-hover']"></i>
    </div>
</template>

