<template>
    <div class="patient-data-section-contanier">
        <div class="patient-data-section-header">
            <div class="section-title"><span><font-awesome-icon :icon=icon /></span> {{name}}</div>
            <div class="search-field" v-if="data.length > 0">
                <input type="text" :model="patientFilter">
                <font-awesome-icon icon="search" />
            </div>
        </div>
        <div class="patient-data-section-content">
            <div class="patient-data-wrapper" v-if="data.length > 0">
                <patient-Data-Section-Content 
                    v-for="content in data" 
                    :type=content.reportType
                    :department=content.department
                    :date=content.reportDate
                    :key="`patient-report-${content.id}`" />
            </div>
            <div class="no-patient-data" v-if="data.length === 0">
                <div><font-awesome-icon icon="folder-open" /></div>
                <div>No data available</div>
            </div>
        </div>
    </div>
</template>

<script>
import PatientDataSectionContent from './PatientDataSectionContent.vue';

export default {
    props: [
        'name',
        'icon',
        'data'
    ],
    components: {
        patientDataSectionContent: PatientDataSectionContent
    }
}
</script>

<style lang="scss" scoped>
@import '../../common/styles/gql_hospital.scss';

.patient-data-section-contanier {
    width: 32.666%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border: 1px solid $tertiary-color;
    .patient-data-section-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 20px;
        font-size: 1.4em;
        color: $secondary-font-color;
        .section-title {
            span {
                margin-right: 5px;
                font-size: .9em;
            }
        }
        .search-field {
            width: 40%;
            input:focus {
                outline: none;
            }
            input[type="text"] {
                width: 85%;
                margin-right: 10px;
                padding: 0 5px;
                box-sizing: border-box;
                font-size: 1em;
                border: none;
                border-bottom: 1px solid $tertiary-color;
            }
        }
    }
    .patient-data-section-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-content: flex-start;
        height: 100%;
        .section-content {
            display: flex;
            flex-direction: row;
            // align-items: center;
            // justify-content: center;
            width: 100%;
            height: 100%;
            // background-color: pink;
            .section-content-icon {
                margin-right: 10px;
            }
            .section-content-values {
                width: 100%;
                ul {
                    margin: 0;
                    padding: 0;
                    // background-color: cyan;
                }
                li {
                    height: auto;
                    margin-bottom: 2px;
                    list-style: none;
                    color: $tertiary-font-color;
                }
                li:first-child {
                    font-size: 1.1em;
                    color: $secondary-font-color;
                }
                li:last-child {
                    margin-bottom: 10px;
                }
            }
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


