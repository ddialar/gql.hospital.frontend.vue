<template>
    <div class="hospitalized-patients-container">
        <div class="hospitalized-list-content">
            <patients-list />
        </div>
    </div>
</template>

<script>
import PatientsList from '../components/PatientsList.vue';

export default {
    data: () => ({}),
    components: {
        patientsList: PatientsList
    }
};
</script>

<style lang="scss" scoped>
.hospitalized-patients-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 25px 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: $main-background;
    .cards-row {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: nowrap;
    }
    .hospitalized-list-content {
        padding: 0;
        box-sizing: border-box;
    }
}
</style>

