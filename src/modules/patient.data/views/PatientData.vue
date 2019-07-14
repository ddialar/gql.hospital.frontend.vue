<template>
    <div class="patient-data-container">
        <patient-data-header name="John Wick" age="45" socialCareNumber="380000000012"/>
        <div class="patient-dashboard-wrapper">
            <patient-data-section 
                v-for="sectionName in Object.keys(sections)" 
                :name=sections[sectionName].name
                :icon=sections[sectionName].icon
                :data=sections[sectionName].data
                :key="`patient-data-${sectionName}`" />
        </div>
    </div>
</template>

<script>
import PatientDataHeader from '../components/PatientDataHeader.vue';
import PatientDataSection from '../components/PatientDataSection.vue';

export default {
    data: () => ({
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
    components: {
        patientDataHeader: PatientDataHeader,
        patientDataSection: PatientDataSection
    }
};
</script>

<style lang="scss" scoped>
@import '../../common/styles/gql_hospital.scss';

.patient-data-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 25px 20px;
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
        div {
            margin-right: 1%;
            margin-bottom: 1%;
        }
        div:nth-child(3n) {
            margin-right: 0;
        }
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

