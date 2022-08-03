<template>
    <div class="footer">
        <div class="footer--item">1</div>
        <div class="footer--item">2</div>
        <div class="footer--item">3</div>
        <div class="footer--item" title="Uitloggen">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer",
    };
</script>

<style lang="scss">
    .footer {
        display: flex;
        position: fixed;
        bottom: 0px;
        width: $sidebar-width;
        color: $dark-grey;
        border-top: 1px solid $light-grey-darked;

        &--item {
            width: 25%;
            background-color: $light-grey;
            height: 50px;
            text-align: center;
            line-height: 50px;
            cursor: pointer;
            border-left: 1px solid $light-grey-darked;

            &:hover {
                background-color: $light-grey-darked;
            }
        }
    }
</style>
