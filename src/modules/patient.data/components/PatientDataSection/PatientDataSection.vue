<template>
    <div class="patient-data-section-contanier">
        <patient-data-section-header 
            :name=name 
            :icon=icon 
            :showSearch="(data.length > 0) ? true : false"
            v-model="sectionContentFilter" />
        <div class="patient-data-section-content">
            <div class="patient-data-section-content-wrapper" v-if="data.length > 0">
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
        // sectionContentFilter(value) {
        //     // console.log(this.name, '==>', this.sectionContentFilter);
            
        // }
    },
    mounted() {
        // console.log(JSON.stringify(this.data));
        
    }
}
</script>

<style lang="scss" scoped>
.patient-data-section-contanier {
    width: 32.666%;
    height: 100%;
    max-height: 300px;
    margin-bottom: 1%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid $tertiary-color;
    .patient-data-section-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-content: flex-start;
        .patient-data-section-content-wrapper,
        .no-patient-data {
            width: 100%;
            height: 230px;
        }
        .patient-data-section-content-wrapper {
            overflow-y: scroll;
        }
        .no-patient-data {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
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


