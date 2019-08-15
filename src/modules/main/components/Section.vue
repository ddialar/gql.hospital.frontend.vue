<template>
    <section class="main-wrapper">
        <article>
            <router-view></router-view>
        </article>
    </section>
</template>

<script>
export default {
    data: () => ({}),
    components: {}
};
</script>

<style lang="scss" scoped>
.main-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>

