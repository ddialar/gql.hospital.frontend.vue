<template>
    <transition name="fade">
        <div class="side-menu-background" @click="parentCallback()"></div>
    </transition>
</template>

<script>
export default {
    props: {
        parentCallback: { type: Function }
    }
};
</script>

<style lang="scss" scoped>
.side-menu-background {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
}

.fade-enter-active,
.fade-leave-active {
    transition: 0.3s;
}
.fade-enter-active,
.fade-leave-active {
    opacity: 1;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>


