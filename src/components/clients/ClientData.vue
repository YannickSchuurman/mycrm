<script setup lang="ts">
    import { ref } from "vue";
    import TabTable from "./TabTable.vue";
    import user from "../../../public/dummyclients.json";

    let currenttab = ref("algInfo");
    const client = user[0];

    function changeTab(tabTitle: string) {
        currenttab.value = tabTitle;
    }
</script>

<template>
    <div class="client-data-overview">
        <div class="client-overview-title" style="display: flex">
            <p><strong>Klant</strong></p>
            <p>- Yannick Schuurman</p>
        </div>
        <div class="client-card">
            <div class="client-card--topbar">
                <div class="client-card--profile-data">
                    <img
                        class="profile-photo"
                        src="../../../public/user-profile-yannick.png"
                        alt="user-profile-image" />
                    <p class="client-name">Yannick Schuurman</p>
                </div>
                <div class="client-card--topbar-actions">
                    <i class="fa-solid fa-pen action-icon iconhover"></i>
                    <i
                        class="fa-solid fa-ellipsis-vertical action-icon iconhover"></i>
                </div>
            </div>
            <div class="client-card--sub">
                <div class="client-contact-moments">
                    <div class="contact-moment">
                        <p>Laatste contact:</p>
                        <p class="contact-date">10 Mei 2022</p>
                    </div>
                    <div class="contact-moment">
                        <p>Volgende afspraak:</p>
                        <p class="contact-date">10 Mei 2022</p>
                    </div>
                </div>
                <div class="client-action-buttons">
                    <button class="button-primary darkedhover">
                        Klantstatus aanpassen
                    </button>
                </div>
            </div>
            <div class="client-info-tabcontainer">
                <div class="tabs">
                    <button
                        class="tablinks"
                        :class="[currenttab === 'algInfo' ? 'active' : '']"
                        @click="changeTab('algInfo')">
                        Algemene informatie
                    </button>
                    <button
                        class="tablinks"
                        :class="[currenttab === 'bedrInfo' ? 'active' : '']"
                        @click="changeTab('bedrInfo')">
                        Bedrijfs info
                    </button>
                    <button
                        class="tablinks"
                        :class="[currenttab === 'contDetails' ? 'active' : '']"
                        @click="changeTab('contDetails')">
                        Contract details
                    </button>
                </div>
                <TabTable :currenttab="currenttab" :client="client" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .client-data-overview {
        width: 70%;
    }
    .client-card {
        margin: 20px;
        padding: 20px;
        background-color: white;
        border: 1px solid $light-grey;

        &--topbar {
            display: flex;
            justify-content: space-between;
        }

        &--profile-data {
            display: flex;

            .profile-photo {
                width: 50px;
                border-radius: 50%;
            }

            .client-name {
                color: #4e4b4b;
                font-weight: bold;
                margin-left: 15px;
            }
        }

        &--topbar-actions {
            color: $dark-grey;

            .action-icon {
                padding: 10px;
            }
        }

        .client-contact-moments {
            display: flex;
        }

        .client-contact-moments > :first-child {
            margin-right: 20px;
        }

        &--sub {
            margin: 20px 0px;
            font-size: 14px;
            display: flex;
            justify-content: space-between;

            .contact-moment {
                border: 1px solid $light-grey;
                width: 150px;
                text-align: center;
                padding: 5px;

                .contact-date {
                    font-weight: bold;
                    margin-top: 5px;
                }
            }
        }

        .client-info-tabcontainer {
            .tabs {
                border-bottom: 1px solid $dark-grey;

                button {
                    border: none;
                    padding: 10px;
                    background-color: transparent;
                    color: #7e7676;
                    cursor: pointer;
                }

                .active {
                    border-bottom: 2px solid $secondary-color-darken;
                    background-color: $secondary-color;
                    color: white;
                }
            }
        }
    }
</style>
