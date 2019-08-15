<template>
    <div class="main-container">
        <nav-bar />
        <main-section />
    </div>
</template>

<script>
// import Header from '../components/Header';
import NavBar from './NavBar';
import Section from './Section';

export default {
    data: () => ({}),
    components: {
        // customHeader: Header
        navBar: NavBar,
        mainSection: Section
    }
};
</script>

<style lang="scss" scoped>
.main-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    background-color: $main-background;
}
</style>

