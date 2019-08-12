<template>
    <div class="section-content-row" @click="goToContent(linkTo)">
        <div class="section-content-row-values">
            <ul>
                <li>{{title}}</li>
                <li>{{subtitle}}</li>
                <li>{{complement}}</li>
            </ul>
        </div>
        <div class="section-content-row-icon" v-if="linkTo">
            <font-awesome-icon icon="chevron-right" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        'title': { type: String, value: '' },
        'subtitle': { type: String, value: '' },
        'complement': { type: String, value: '' },
        'linkTo': { type: String, value: '' }
    },
    methods: {
        goToContent(navigateTo) {
            if (navigateTo) {
                this.$router.push(navigateTo);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.section-content-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 10px;
    .section-content-row-icon {
        margin-right: 10px;
    }
    .section-content-row-values {
        width: 100%;
        ul {
            margin: 0;
            padding: 0;
        }
        li {
            height: auto;
            margin-bottom: 2px;
            list-style: none;
            color: $tertiary-font-color;
        }
        li:first-child {
            font-size: 1.1em;
            color: $secondary-font-color;
        }
        li:last-child {
            margin-bottom: 10px;
        }
    }
}
</style>


