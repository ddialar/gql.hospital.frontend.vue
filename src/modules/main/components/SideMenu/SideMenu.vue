<template>
    <div 
        id="sidemenu" 
        class="side-menu-container" 
        :class="{ 'shown': show, 'hidden': !show }">
        <side-menu-background :parentCallback="parentCallback" v-show="show" />
        <side-menu-content v-show="show" />
    </div>
</template>

<script>
import SideMenuBackground from './SideMenuBackground';
import SideMenuContent from './SideMenuContent';

export default {
    data: () => ({
        gqlhospitalLogoLandscape: require("../../../../assets/logos/gqlhospital-landscape-logo.svg")
    }),
    components: {
        sideMenuBackground: SideMenuBackground,
        sideMenuContent: SideMenuContent
    },
    props: {
        show: { type: Boolean, value: false },
        parentCallback: { type: Function }
    }
};
</script>

<style lang="scss" scoped>
.side-menu-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    box-sizing: border-box;
    transition: opacity .5s;
}
.shown {
    z-index: 100;
    opacity: 1;
}
.hidden {
    opacity: 0;
}
</style>


