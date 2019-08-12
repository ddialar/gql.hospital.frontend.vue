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
            this.$router.push(`/patient/${patientId}`);
        }
    }
}
</script>

<style lang="scss" scoped>
.card-contanier {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    padding: 10px;
    box-sizing: border-box;
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

/* ************************************************ */
/* ********      Mobile configuration      ******** */
/* ************************************************ */

@media screen 
    and (min-width: $min-mobile-width) {
    .card-contanier {
        width: 100%;
        
    }
}

/* ************************************************ */
/* ********      Tablet configuration      ******** */
/* ************************************************ */

@media screen 
    and (min-width: $min-tablet-width) {
    .card-contanier {
        width: 49.5%;
        margin-bottom: 10px;
    }
}

/* ************************************************ */
/* ********      Laptop configuration      ******** */
/* ************************************************ */

@media screen 
    and (min-width: $min-laptop-width) {
    .card-contanier {
        width: 24.205%;
        margin: 0 1% 10px 0;
    }
    .card-contanier:nth-child(4n) {
        margin-right: 0;
    }
}
</style>


