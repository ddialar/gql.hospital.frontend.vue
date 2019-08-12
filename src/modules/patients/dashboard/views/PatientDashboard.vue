<template>
    <div class="patient-dashboard-container">
        <!-- <dashboard-header 
            :name=patientName 
            :age=patientAge
            :socialCareNumber=socialCareNumber /> -->
        <div class="patient-dashboard-wrapper">
            <dashboard-section 
                v-for="sectionName in Object.keys(sections)" 
                :patient=patientId
                :name=sections[sectionName].name
                :icon=sections[sectionName].icon
                :data=sections[sectionName].data
                :key="`patient-dashboard-${sectionName}`" />
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

// import Header from '../components/Header.vue';
import Section from '../components/Section/views/Section.vue';
import * as gql from "../graphql";

export default {
    data: () => ({
        patientId: '',
        patientName: '',
        patientAge: '',
        socialCareNumber: '',
        sections: {
            reports: {
                name: 'Reports',
                icon: 'file',
                data: []
            },
            treatments: {
                name: 'Treatments',
                icon: 'capsules',
                data: []
            },
            analytics: {
                name: 'Analytics',
                icon: 'tint',
                data: []
            },
            doctors: {
                name: 'Doctors',
                icon: 'stethoscope',
                data: []
            },
            appointments: {
                name: 'Appointments',
                icon: 'calendar',
                data: []
            },
            alerts: {
                name: 'Alerts',
                icon: 'exclamation-triangle',
                data: []
            },
        }
            
    }),
    porps: [
        'patientId'
    ],
    components: {
        // dashboardHeader: Header,
        dashboardSection: Section
    },
    methods: {
        ...mapActions([
            'setSelectedPatient'
        ]),
        processPatientData(patientData) {
            this.patientId = patientData.id;
            this.patientName = `${patientData.name} ${patientData.surname}`;
            this.patientAge = (new Date()).getFullYear() - (new Date(patientData.birthDate)).getFullYear();
            this.socialCareNumber = patientData.socialCareNumber;
            this.sections.reports.data = patientData.medicalHistory.medicalReports;

            this.$store.dispatch('setSelectedPatient', patientData);
        }
    },
    async beforeMount() {
        try {
            let patientData = (await this.$apollo.query(
                gql.getPatientById(this.$route.params.patientId)
            )).data.patient;
            
            if (patientData.__typeName !== 'ApiError') {
                this.processPatientData(patientData);
            } else {
                this.$toastr.error(
                    patientData.description,
                    patientData.message
                );
            }
        } catch (error) {
            this.$toastr.error(
                error.message,
                "Getting patient data"
            );
        }
    }
};
</script>

<style lang="scss" scoped>
.patient-dashboard-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 0px 20px 25px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: $main-background;
    .patient-data-header {
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
    .patient-dashboard-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: flex-start;
        // div {
        //     margin-right: 1%;
        //     margin-bottom: 1%;
        // }
        // div:nth-child(3n) {
        //     margin-right: 0;
        // }
    }
    // .search-patient {
    //     width: 40%;
    //     margin-bottom: 10px;
    //     padding: 10px;
    //     input:focus {
    //         outline: none;
    //     }
    //     input[type="text"] {
    //         width: 85%;
    //         margin-right: 10px;
    //         font-size: 1em;
    //         border: none;
    //         border-bottom: 1px solid $tertiary-color;
    //     }
    // }
}
</style>
