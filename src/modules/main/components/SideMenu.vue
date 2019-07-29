<template>
    <transition name="fade">
        <div id="sidemenu" class="side-menu-container" v-if="show">
            <div class="side-menu-background" @click="parentCallback()"></div>
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
    </transition>
</template>

<script>
export default {
    data: () => ({
        gqlhospitalLogoLandscape: require("../../../assets/logos/gqlhospital-landscape-logo.svg")
    }),
    props: {
        'show': { type: Boolean, value: false },
        'parentCallback': { type: Function }
    },
    methods: {
        hideMenuMethod() {
            console.log('hidding menu...');
            
            this.showMethod();
        }
    }
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
    .side-menu-background {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,.3);
    }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>


