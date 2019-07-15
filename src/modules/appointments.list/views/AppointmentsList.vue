<template>
    <div class="appointments-container">
        <div class="search-patient">
            <input type="text" placeholder="Patient name" :model="appointmentFilter">
            <font-awesome-icon class="search-icon" icon="search" />
        </div>
        <div class="appointments-wrapper">
            <div class="appointments-list" v-if="appointments.length !== 0">
                <data-card 
                    v-for="appointment in appointments" 
                    :patientId=appointment.id
                    :patientName="getFullName(appointment.name, appointment.surname)"
                    :patientAge="getAge(appointment.birthDate)"
                    :socialCareNumber=appointment.socialCareNumber
                    :key="`patient-${appointment.id}`" />
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

export default {
    data: () => ({
        appointments: [],
        appointmentFilter: ''
    }),
    components: {
        dataCard: DataCard
    },
    methods: {
        getFullName(name, surname) {
            return `${name} ${surname}`;
        },
        getAge(birthDate) {
            return (new Date()).getFullYear() - (new Date(birthDate)).getFullYear();
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
@import '../../common/styles/gql_hospital.scss';

.appointments-container {
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
    .search-patient {
        width: 40%;
        margin-bottom: 10px;
        padding: 10px;
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
            flex-direction: row;
            justify-content: flex-start;
            flex-wrap: nowrap;
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
</style>

