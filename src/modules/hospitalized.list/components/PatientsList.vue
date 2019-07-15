<template>
    <div class="patient-list-container">
        <ul>
            <li>
                <input type="text" placeholder="Patient name" :model="patientFilter">
                <font-awesome-icon icon="search" />
            </li>
            <li class="patient-data">
                <font-awesome-icon icon="heartbeat" /> Heartbeat
            </li>
            <li class="patient-data">
                <font-awesome-icon icon="arrows-alt-v" /> Blood Preasure
            </li>
            <li class="patient-data">
                <font-awesome-icon icon="thermometer-half" /> Temperature
            </li>
            <li class="patient-data">
                <font-awesome-icon icon="map-marker-alt" /> FRB
            </li>
        </ul>
        <div class="patient-list-content">
            <patient-item v-for="i in 5" :key="`patient-${i}`" />
        </div>
    </div>
</template>

<script>
import PatientItem from '../components/PatientItem.vue';

export default {
    data: () => ({
        patientFilter: ''
    }),
    components: {
        patientItem: PatientItem
    }
};
</script>

<style lang="scss" scoped>
@import "../../common/styles/gql_hospital.scss";

.patient-list-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: $main-background;
    ul {
        width: 100%;
        margin: 0 0 10px;
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        li {
            list-style: none;
            font-size: 1em;
            width: 15%;
        }
        li:first-child {
            width: 40%;
            input:focus {
                outline: none;
            }
            input[type="text"] {
                width: 85%;
                margin-right: 10px;
                font-size: 1em;
                border: none;
                border-bottom: 1px solid $tertiary-color;
            }
        }
        .patient-data {
            text-align: right;
            color: $secondary-font-color;
        }
    }
}
</style>


