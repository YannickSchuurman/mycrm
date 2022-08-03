<script setup lang="ts">
    import users from "../../../public/dummyclients.json";

    import { onMounted, ref, watch, computed, reactive } from "vue";

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
    <div class="topbar">
        <div class="topbar--abovesidebar">
            <button
                class="menu darkedhover"
                onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))"
                aria-label="Main Menu">
                <svg width="35" height="35" viewBox="0 0 100 100">
                    <path
                        class="line line1"
                        d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                    <path class="line line2" d="M 20,50 H 80" />
                    <path
                        class="line line3"
                        d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>
            </button>
            <div class="topbar--logo darkedhover">
                <i class="fa-solid fa-network-wired"></i>
                <p style="display: inline; padding-left: 5px">
                    My<strong>CRM</strong>
                </p>
            </div>
        </div>
        <div class="topbar--right-content-container">
            <div class="topbar--searchbar">
                <input
                    type="text"
                    v-model="search"
                    placeholder="Zoeken naar klanten" />
            </div>
            <div v-if="data.clients.length" class="topbar--searchbar--results">
                <p v-for="client in data.clients">
                    {{ client.firstname }}
                </p>
            </div>
            <div style="display: flex">
                <div class="topbar__block">
                    <i class="fa-solid fa-bell"></i>
                </div>
                <div class="notification topbar__block">
                    <i class="fa-solid fa-circle-info"></i>
                </div>
                <div class="topbar__block">
                    <img
                        class="user-profile-photo"
                        src="../../../public/user-profile-yannick.png"
                        alt="Afbeelding gebruiker" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import "src/styling/themeColors";

    .menu {
        background-color: transparent;
        border: none;
        cursor: pointer;
        width: 50px;
    }
    .line {
        fill: none;
        stroke: white;
        stroke-width: 6;
        transition: stroke-dasharray 400ms cubic-bezier(0.4, 0, 0.2, 1),
            stroke-dashoffset 400ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    .line1 {
        stroke-dasharray: 60 207;
        stroke-width: 6;
    }
    .line2 {
        stroke-dasharray: 60 60;
        stroke-width: 6;
    }
    .line3 {
        stroke-dasharray: 60 207;
        stroke-width: 6;
    }
    .opened .line1 {
        stroke-dasharray: 90 207;
        stroke-dashoffset: -134;
        stroke-width: 6;
    }
    .opened .line2 {
        stroke-dasharray: 1 60;
        stroke-dashoffset: -30;
        stroke-width: 6;
    }
    .opened .line3 {
        stroke-dasharray: 90 207;
        stroke-dashoffset: -134;
        stroke-width: 6;
    }

    .topbar {
        display: flex;
        height: $topbar-height;
        background-color: $home-color;
        font-family: "Quicksand", sans-serif;
        color: white;
        font-size: 20px;
        justify-content: space-between;

        &--abovesidebar {
            display: flex;
            width: $sidebar-width;
        }

        &--searchbar {
            line-height: 2.5rem;
            margin-left: 1rem;

            &--results {
                height: fit-content;
                background-color: white;
                position: absolute;
                left: 15px;
                top: 35px;
                z-index: 5;
                padding: 0.5rem;
                width: 200px;
                border: 1px solid #726c6c;
                color: $dark-grey;
                font-size: 14px;
            }

            input {
                padding: 0.5rem;
                font-size: 12px;
                width: 200px;
                border: none;
                border-radius: 5px;
            }
        }

        &--logo {
            cursor: pointer;
            height: $topbar-height;
            line-height: $topbar-height;
            padding: 0px 1rem;
            width: 100%;
            text-align: center;
        }

        &__block {
            line-height: $topbar-height;
            cursor: pointer;
            width: 50px;
            text-align: center;

            &:hover {
                background-color: $home-color-darken;
            }
        }

        &--right-content-container {
            display: flex;
            justify-content: space-between;
            width: calc(100% - $sidebar-width);
            position: relative;
        }

        .user-profile-photo {
            border-radius: 50%;
            width: 40px;
            line-height: $topbar-height;
            padding: 0.3rem;
        }
    }
</style>
