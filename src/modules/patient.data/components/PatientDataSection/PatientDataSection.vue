<template>
    <div class="patient-data-section-contanier">
        <patient-data-section-header 
            :name=name 
            :icon=icon 
            :showSearch="(data.length > 0) ? true : false"
            v-model="sectionContentFilter" />
        <div class="patient-data-section-content">
            <div class="section-content-wrapper" v-if="data.length > 0">
                <patient-data-section-content 
                    v-for="(content, index) in data" 
                    :type=content.reportType
                    :department=content.department
                    :date=content.reportDate
                    :key="`patient-report-${content.bindToReport}-${index}`" />
            </div>
            <div class="no-patient-data" v-if="data.length === 0">
                <div><font-awesome-icon icon="folder-open" /></div>
                <div>No data available</div>
            </div>
        </div>
    </div>
</template>

<script>
import PatientDataSectionHeader from './PatientDataSectionHeader.vue';
import PatientDataSectionContent from './PatientDataSectionContent.vue';

export default {
    data: () => ({
        sectionContentFilter: ''
    }),
    props: [
        'patient',
        'name',
        'icon',
        'data'
    ],
    components: {
        patientDataSectionHeader: PatientDataSectionHeader,
        patientDataSectionContent: PatientDataSectionContent
    },
    watch: {
        sectionContentFilter(value) {
            console.log(this.name, '==>', this.sectionContentFilter);
            
        }
    },
    mounted() {
        console.log(JSON.stringify(this.data));
        
    }
}
</script>

<style lang="scss" scoped>
@import '../../../common/styles/gql_hospital.scss';

.patient-data-section-contanier {
    background-color: cyan;
    width: 32.666%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border: 1px solid $tertiary-color;
    // .patient-data-section-header {
    //     display: flex;
    //     flex-direction: row;
    //     justify-content: space-between;
    //     margin-bottom: 20px;
    //     font-size: 1.4em;
    //     color: $secondary-font-color;
    //     .section-title {
    //         span {
    //             margin-right: 5px;
    //             font-size: .9em;
    //         }
    //     }
    //     .search-field {
    //         width: 40%;
    //         input:focus {
    //             outline: none;
    //         }
    //         input[type="text"] {
    //             width: 85%;
    //             margin-right: 10px;
    //             padding: 0 5px;
    //             box-sizing: border-box;
    //             font-size: 1em;
    //             border: none;
    //             border-bottom: 1px solid $tertiary-color;
    //         }
    //     }
    // }
    .patient-data-section-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-content: flex-start;
        height: 100%;
        .section-content-wrapper {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            flex-wrap: wrap;
            width: 100%;
            // height: 100%;
        }
        .no-patient-data {
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
        // color: $tertiary-font-color;
        // .patient-data-wrapper {
        //     div:nth-child(1) {
        //         font-size: 1.2em;
        //     }
        // }
    }
}
</style>


