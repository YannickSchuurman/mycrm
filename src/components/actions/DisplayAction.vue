<script setup lang="ts">
    import { reactive, ref, watch } from "vue";

    const props = defineProps<{
        type: string;
        icon: string;
    }>();
</script>

<template>
    <div class="type-action-overview">
        <div class="info-action">
            <i
                class="fa-solid fa-sm fa-border type-action-overview--icon"
                :class="icon"></i>
            <p class="action--title">{{ type }}</p>
            <p class="type-action-overview--action-counter">4</p>
        </div>
        <div class="action-initiators">
            <button class="type-action-overview--add-action">Voeg toe+</button>
            <i class="fa-solid fa-chevron-right"></i>
        </div>
    </div>
</template>

<style lang="scss">
    .type-action-overview {
        border-bottom: 1px solid $light-grey;
        height: 50px;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        line-height: 50px;

        &:hover {
            background-color: $ultra-light-grey;
            cursor: pointer;
        }

        &--icon {
            color: $dark-grey;
            width: 40px;
            text-align: center;
            height: 40px;
            border-radius: 50%;
            line-height: 40px;
            border: 1px solid;
            border-color: #cecece;
        }

        &--action-counter {
            background-color: #9670f1;
            width: 20px;
            height: 20px;
            text-align: center;
            line-height: 20px;
            color: white;
            border-radius: 50%;
        }

        &--add-action {
            border: none;
            background-color: transparent;
            margin-right: 20px;

            &:hover {
                text-decoration: underline;
                cursor: pointer;
            }
        }

        .info-action {
            display: flex;
            align-items: center;
        }

        .info-action * {
            margin-right: 10px;
        }

        .action-initiators {
            display: flex;
            align-items: center;
        }
    }
</style>
