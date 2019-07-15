<template>
    <div class="card-contanier" @click="showPatientData(patientId)">
        <div class="patient-card-header">
            <div class="patient-name">{{patientName}}</div>
            <div class="open-card"><font-awesome-icon icon="chevron-right" /></div>
        </div>
        <div class="secondary-data-container">
            <div class="patient-data-wrapper">
                <div>{{patientAge}} yo.</div>
                <div>{{socialCareNumber}}</div>
            </div>
            <div class="appointment-data-wrapper">
                <div>19/07/19 10:15</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'patientId',
        'patientName',
        'patientAge',
        'socialCareNumber'
    ],
    methods: {
        showPatientData(patientId) {
            // this.$router.push(`/patient/${patientId}`);
            this.$router.push(`/patient/${patientId}`);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../common/styles/gql_hospital.scss';

.card-contanier {
    width: 24%;
    padding: 10px;
    margin-right: 10px; // This value must be deleted.
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border: 1px solid $tertiary-color;
    cursor: pointer;
    .patient-card-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 1.4em;
        color: $secondary-font-color;
    }
    .secondary-data-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        align-content: flex-end;
        color: $tertiary-font-color;
        .patient-data-wrapper {
            div:nth-child(1) {
                font-size: 1.2em;
            }
        }
    }
}
</style>


