<script setup lang="ts">
    import users from "../../../public/dummyclients.json";
    import Menubar from "primevue/menubar";
    import { onMounted, ref, watch, computed, reactive } from "vue";

    const menu = ref([
        {

        }
    ])
    const items = ref([
        {
            label: "File",
            icon: "pi pi-fw pi-file",
            items: [
                {
                    label: "New",
                    icon: "pi pi-fw pi-plus",
                    items: [
                        {
                            label: "Bookmark",
                            icon: "pi pi-fw pi-bookmark",
                        },
                        {
                            label: "Video",
                            icon: "pi pi-fw pi-video",
                        },
                    ],
                },
                {
                    label: "Delete",
                    icon: "pi pi-fw pi-trash",
                },
                {
                    separator: true,
                },
                {
                    label: "Export",
                    icon: "pi pi-fw pi-external-link",
                },
            ],
        },
        {
            label: "Edit",
            icon: "pi pi-fw pi-pencil",
            items: [
                {
                    label: "Left",
                    icon: "pi pi-fw pi-align-left",
                },
                {
                    label: "Right",
                    icon: "pi pi-fw pi-align-right",
                },
                {
                    label: "Center",
                    icon: "pi pi-fw pi-align-center",
                },
                {
                    label: "Justify",
                    icon: "pi pi-fw pi-align-justify",
                },
            ],
        },
        {
            label: "Users",
            icon: "pi pi-fw pi-user",
            items: [
                {
                    label: "New",
                    icon: "pi pi-fw pi-user-plus",
                },
                {
                    label: "Delete",
                    icon: "pi pi-fw pi-user-minus",
                },
                {
                    label: "Search",
                    icon: "pi pi-fw pi-users",
                    items: [
                        {
                            label: "Filter",
                            icon: "pi pi-fw pi-filter",
                            items: [
                                {
                                    label: "Print",
                                    icon: "pi pi-fw pi-print",
                                },
                            ],
                        },
                        {
                            icon: "pi pi-fw pi-bars",
                            label: "List",
                        },
                    ],
                },
            ],
        },
        {
            label: "Events",
            icon: "pi pi-fw pi-calendar",
            items: [
                {
                    label: "Edit",
                    icon: "pi pi-fw pi-pencil",
                    items: [
                        {
                            label: "Save",
                            icon: "pi pi-fw pi-calendar-plus",
                        },
                        {
                            label: "Delete",
                            icon: "pi pi-fw pi-calendar-minus",
                        },
                    ],
                },
                {
                    label: "Archieve",
                    icon: "pi pi-fw pi-calendar-times",
                    items: [
                        {
                            label: "Remove",
                            icon: "pi pi-fw pi-calendar-minus",
                        },
                    ],
                },
            ],
        },
        {
            label: "Quit",
            icon: "pi pi-fw pi-power-off",
        },
    ]);

    let data = reactive({
        clients: [],
    });
    let search = ref<string>("");

    watch(
        () => search.value,
        (newValue) => {
            if (search.value === "") {
                data.clients = [];
            } else {
                data.clients = users.filter((user) => {
                    return (
                        user.firstname
                            .toLowerCase()
                            .indexOf(search.value.toLowerCase()) != -1
                    );
                });
            }
        }
    );
</script>

<template>
    <Menubar :model="items">
        <template #start>
            <img
                alt="logo"
                src="../../assets/logo.png"
                height="40"
                class="mr-2"
            />
        </template>
        <template #end>
            <InputText placeholder="Search" type="text" />
            <Avatar icon="pi pi-user" class="mr-2" />
        </template>
    </Menubar>
</template>

<style lang="scss">
.p-menubar {
    border: none !important;
}
    .p-menubar-start {
        width: $leftSideBarOpenWidth;
        padding-left: 20px;

        &:after {
            content: "CRM YS";
        }
    }

    .p-avatar {
        margin-left: 20px;
        margin-right: 10px;

        &:hover {
            cursor: pointer;
        }
    }
</style>
