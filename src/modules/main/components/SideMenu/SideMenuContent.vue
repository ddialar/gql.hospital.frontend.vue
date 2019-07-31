<template>
    <transition name="slide">
        <div class="side-menu-content">
            <div class="side-menu-header">
                <img class="gqlhospital-logo" :src="gqlhospitalLogoLandscape" />
            </div>
            <ul>
                <li>Option 1</li>
                <li class="selected">Option 2</li>
                <li>Option 3</li>
            </ul>
        </div>
    </transition>
</template>

<script>
export default {
    data: () => ({
        gqlhospitalLogoLandscape: require("../../../../assets/logos/gqlhospital-landscape-logo.svg")
    })
};
</script>

<style lang="scss" scoped>
.side-menu-content {
    position: relative;
    width: 250px;
    height: 100%;
    background-color: $main-background;
    ul {
        margin: 0;
        padding: 0;
    }
    li {
        padding: 0 15px;
        line-height: 40px;
    }
    li.selected {
        border-right: 5px solid $primary-color;
        color: $primary-color;
    }
    .side-menu-header {
        padding: 15px;
        box-sizing: border-box;
        img {
            width: 100%;
            padding-bottom: 20px;
            border-bottom: 1px solid $tertiary-color;
        }
    }
}

.slide-enter-active,
.slide-leave-active {
    transition: .5s;
}
.slide-enter {
    transform: translateX(-250px);
}
.slide-leave-to {
    transform: translateX(-250px);
}
</style>


