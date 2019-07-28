<template>
    <div id="sidemenu" class="side-menu-container">
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
    </div>
</template>

<script>
export default {
    data: () => ({
        gqlhospitalLogoLandscape: require("../../../assets/logos/gqlhospital-landscape-logo.svg")
    }),
}
</script>

<style lang="scss" scoped>
.side-menu-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    z-index: 100;
    background-color: rgba(0,0,0,.3);
    .side-menu-content {
        position: relative;
        top: 0;
        bottom: 0;
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
            margin-bottom: 5px;
            padding: 15px;
            box-sizing: border-box;
            img {
                width: 100%;
            }
        }
    }
}
</style>


