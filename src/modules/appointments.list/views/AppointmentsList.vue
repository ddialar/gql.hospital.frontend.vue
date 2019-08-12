<template>
    <div class="appointments-container">
        <div class="search-patient" v-if="appointments.length !== 0">
            <input type="text" placeholder="Patient name" v-model="patientFilter">
            <font-awesome-icon class="search-icon" icon="search" />
        </div>
        <div class="appointments-wrapper">
            <div class="appointments-list" v-if="appointments.length !== 0">
                <data-card 
                    v-for="patient in patientsList" 
                    :patientId=patient.id
                    :patientName="getFullName(patient.name, patient.surname)"
                    :patientAge="getAge(patient.birthDate)"
                    :socialCareNumber=patient.socialCareNumber
                    :key="`patient-${patient.id}`" />
            </div>
            <div class="no-appointments-data" v-if="appointments.length === 0">
                <div><font-awesome-icon icon="folder-open" /></div>
                <div>No appointments available</div>
            </div>
        </div>
    </div>
</template>

<script>
import DataCard from '../components/DataCard.vue';
import * as gql from "../graphql";

import userServices from '../../../core/services';
// import * as CustomServices from 'services';

// console.log(JSON.stringify(CustomServices, null, 4));


export default {
    data: () => ({
        appointments: [],
        patientFilter: ''
    }),
    components: {
        dataCard: DataCard
    },
    computed: {
        // REFACTOR: This process could be handled by a core service.
        patientsList() {
            let filter = this.patientFilter.trim().replace(/\s/g, '').toLowerCase();
            return this.appointments.filter(appointment => {
                return appointment.name.toLowerCase().indexOf(filter) >= 0 ||
                       appointment.surname.toLowerCase().indexOf(filter) >= 0 ||
                       appointment.socialCareNumber.indexOf(filter) >= 0;
            });
        }
    },
    methods: {
        getFullName(name, surname) {
            return `${name} ${surname}`;
        },
        getAge(birthDate) {
            // return (new Date()).getFullYear() - (new Date(birthDate)).getFullYear();
            return userServices.calculateAge(birthDate);
        }
    },
    async mounted() {
        try {
            this.appointments = (await this.$apollo.query(
                gql.getTodayAppointments()
            )).data.patients;
        } catch (error) {
            this.$toastr.error(
                error.message,
                "Getting appointments"
            );
        }
    },
};
</script>

<style lang="scss" scoped>
.appointments-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 0 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: $main-background;
    .search-patient {
        margin-bottom: 10px;
        padding: 10px;
        display: flex;
        flex: row;
        justify-content: space-between;
        input:focus {
            outline: none;
        }
        input[type="text"] {
            width: 100%;
            margin-right: 10px;
            padding: 0 5px;
            box-sizing: border-box;
            font-size: 1em;
            border: none;
            border-bottom: 1px solid $tertiary-color;
        }
    }
    .appointments-wrapper{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-content: flex-start;
        height: 100%;
        .appointments-list{
            position: relative;
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
        }
        .no-appointments-data {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            color: $tertiary-font-color;
            div:first-child {
                margin: 0;
                padding: 0;
                font-size: 2em;
            }
        }
    }
}

/* ************************************************ */
/* ********      Mobile configuration      ******** */
/* ************************************************ */

@media screen 
    and (min-width: $min-mobile-width) {
    .appointments-container {
        .appointments-wrapper{
            .appointments-list{
                flex-direction: column;
            }
        }
    }
}

/* ************************************************ */
/* ********      Tablet configuration      ******** */
/* ************************************************ */

@media screen 
    and (min-width: $min-tablet-width) {
    .appointments-container {
        .appointments-wrapper{
            .appointments-list{
                flex-direction: row;
                justify-content: space-between;
                flex-wrap: wrap;
            }
        }
    }
}

/* ************************************************ */
/* ********      Laptop configuration      ******** */
/* ************************************************ */

@media screen 
    and (min-width: $min-laptop-width) {
    .appointments-container {
        .search-patient {
            justify-content: flex-start;
            input[type="text"] {
                width: 50%;
            }
        }
        .appointments-wrapper{
            .appointments-list{
                flex-direction: row;
                align-content: flex-start;
                justify-content: flex-start;
                flex-wrap: wrap;
            }
        }
    }
}

</style>

