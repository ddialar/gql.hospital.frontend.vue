<template>
    <div class="patient-dashboard-header">
        <div>{{name}}</div>
        <div>{{age}} yo.</div>
        <div>{{socialCareNumber}}</div>
    </div>
</template>

<script>
export default {
    props: [
        'name',
        'age',
        'socialCareNumber'
    ]
};
</script>

<style lang="scss" scoped>
.patient-dashboard-header {
    margin-bottom: 20px;
    div {
        color: $tertiary-font-color;
    }
    div:nth-child(2) {
        font-size: 1.2em;
    }
    div:first-child {
        font-size: 1.4em;
        color: $secondary-font-color;
    }
}
</style>

