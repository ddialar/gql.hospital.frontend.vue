<template>
    <div 
        id="sidemenu" 
        class="side-menu-container" 
        :class="{ 'shown': show, 'hidden': !show }">
        <side-menu-background :parentCallback="parentCallback" v-show="show" />
        <side-menu-content v-show="show" />
        <!-- <side-menu-background :parentCallback="parentCallback" />
        <side-menu-content /> -->
    </div>
</template>

<script>
import SideMenuBackground from './SideMenuBackground';
import SideMenuContent from './SideMenuContent';

export default {
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
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    box-sizing: border-box;
    // transition: opacity .5s;
    // transition: transform .5s ease-out;
    transform-origin: left;
}
.shown {
    z-index: 100;
    transform: scaleX(1);
    opacity: 1;
}
.hidden {
    transform: scaleX(0);
    opacity: 0;
}
</style>


