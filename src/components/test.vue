<script setup lang="ts">
    import { onMounted, ref, watch } from "vue";
    import { convertValueToBoolean } from "@/utils/utils";
    import "./YesNoSwitch.scss";

    interface YesNoSwitchProps {
        activeLabel?: string;
        activeKey?: string | boolean;
        inactiveLabel?: string;
        inactiveKey?: string | boolean;
        editMode?: boolean;
        value?: string | boolean;
        fieldName?: string;
    }

    // Set default values for props
    const props = withDefaults(defineProps<YesNoSwitchProps>(), {
        activeLabel: "Ja",
        activeKey: "Ja",
        inactiveLabel: "Nee",
        inactiveKey: "Nee",
        editMode: true,
        value: "Nee",
        fieldName: "",
    });

    const emit = defineEmits(["onChange", "update:value"]);

    // State
    let active = ref<boolean>(false);

    // Methods
    // Converts the current active state to correct value
    const convertBooleanToValue = () => {
        if (active.value) {
            return props.activeKey;
        } else {
            return props.inactiveKey;
        }
    };

    const onActivate = () => {
        if (props.editMode) {
            active.value = !active.value;
            emit("update:value", convertBooleanToValue()); //to make v-model work
            emit("onChange", active.value);
        }
    };

    // Watchers
    watch(
        () => props.value,
        (newValue) => {
            active.value = convertValueToBoolean(newValue);
        }
    );

    // Mounted hook
    onMounted(() => (active.value = convertValueToBoolean(props.value)));
</script>

<template>
    <div>
        <div
            v-if="editMode"
            :data-ac-fieldid="fieldName"
            class="ac-yesno__start"
            @click="onActivate">
            <span class="ac-yesno__container">
                <span class="ac-yesno">
                    <span class="ac-yesno__root">
                        <span
                            class="ac-yesno__switchbase"
                            :class="active && 'active'">
                            <span class="ac-yesno__label">
                                <span
                                    class="ac-yesno__thumb"
                                    :class="active && 'defaultbgcolor'" />
                            </span>
                        </span>
                        <span
                            class="ac-yesno__track"
                            :class="active && 'defaultbgcolor'" />
                    </span>
                </span>
                <span class="ac-yesno__label">{{
                    active ? activeLabel : inactiveLabel
                }}</span>
            </span>
        </div>
        <span v-if="!editMode">{{ active ? activeLabel : inactiveLabel }}</span>
    </div>
</template>
