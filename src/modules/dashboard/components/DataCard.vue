<template>
    <div class="card-contanier">
        <div>title</div>
        <div>99</div>
        <!-- <p>{{title}}</p>
        <p>{{value}}</p> -->
    </div>
</template>

<script>
export default {
    props: [
        'title',
        'value'
    ]
}
</script>

<style lang="scss" scoped>
.card-contanier {
    width: 24%;
    height: 100px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border: 1px solid $tertiary-color;
    // border: 1px solid $primary-color;
    div:nth-child(1) {
        font-size: 1.2em;
        color: $secondary-font-color
    }
    div:nth-child(2) {
        margin-top: auto;
        font-size: 3.2em;
        text-align: right;
        color: $primary-font-color
    }
}
</style>


