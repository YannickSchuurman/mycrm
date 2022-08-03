<script setup lang="ts">
    import { reactive, ref } from "vue";

    interface clientType {
        name: string;
        age: number;
    }

    const props = defineProps<{
        client: clientType;
        currenttab: string;
    }>();

    const data = reactive({
        algInfo: ref<HTMLInputElement | null>(null),
        bedrInfo: ref<HTMLInputElement | null>(null),
        contDetails: ref<HTMLInputElement | null>(null),
    });
</script>

<template>
    <div>
        <table
            v-show="currenttab === 'algInfo'"
            style="width: 100%"
            class="client-info--table">
            <tr>
                <td>
                    <p>Naam</p>
                    <p>
                        <strong>{{
                            `${client.firstname} ${client.lastname}`
                        }}</strong>
                    </p>
                </td>
                <td>
                    <p>Geslacht</p>
                    <p>
                        {{ client.gender }}
                    </p>
                </td>
                <td>
                    <p>Mobiel</p>
                    <p>
                        {{ client.telephoneNumber }}
                    </p>
                </td>
                <td>
                    <p>Email</p>
                    <p>
                        {{ client.email }}
                    </p>
                </td>
                <td>
                    <p>Datum lead</p>
                    <p>
                        {{ client.leadDate }}
                    </p>
                </td>
                <td>
                    <p>Bedrijf</p>
                    <p>
                        {{ client.company }}
                    </p>
                </td>
                <td>
                    <p>Functie</p>
                    <p>
                        {{ client.function }}
                    </p>
                </td>
                <td>
                    <p>Land</p>
                    <p>
                        {{ client.address.country }}
                    </p>
                </td>
                <td>
                    <p>Lead afkomstig</p>
                    <p>
                        {{ client.leadSource }}
                    </p>
                </td>
            </tr>
        </table>
        <table
            v-show="currenttab === 'bedrInfo'"
            style="width: 100%"
            class="client-info--table">
            <tr>
                <td>
                    <p>Bedrijfsnaam</p>
                    <p>
                        <strong>{{ `${client.company}` }}</strong>
                    </p>
                </td>
                <td>Geslacht</td>
                <td>Mobiel</td>
                <td>Email</td>
                <td>Datum lead</td>
                <td>Bedrijf</td>
                <td>Functie</td>
                <td>Land</td>
                <td>Lead afkomstig</td>
            </tr>
        </table>
        <table
            v-show="currenttab === 'contDetails'"
            style="width: 100%"
            class="client-info--table">
            <tr>
                <td>
                    <p>Bedrijfsnaam</p>
                    <p>
                        <strong>{{ `${client.company}` }}</strong>
                    </p>
                </td>
                <td>Geslacht</td>
                <td>Mobiel</td>
                <td>Email</td>
                <td>Datum lead</td>
                <td>Bedrijf</td>
                <td>Functie</td>
                <td>Land</td>
                <td>Lead afkomstig</td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
    tr {
        display: flex;
        flex-wrap: wrap;
    }

    td {
        width: 20%;
        padding: 10px;
    }
</style>
