<template>
    <div class="main-container">
        <custom-header></custom-header>
        <section class="main-wrapper">
            <article class="main-content">
                <router-view></router-view>
            </article>
        </section>
    </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
    data: () => ({}),
    components: {
        customHeader: Header
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
    flex-direction: column;
    background-color: $main-background;
    .main-wrapper {
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
}
</style>

