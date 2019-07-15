<template>
    <div class="patient-data-section-content">
        <!-- <div class="patient-data-section-content-icon">
            <font-awesome-icon icon="chevron-right" />
        </div> -->
        <div class="patient-data-section-content-values">
            <ul>
                <li>{{type}}</li>
                <li>{{department}}</li>
                <li>{{date}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'type',
        'department',
        'date'
    ]
}
</script>

<style lang="scss" scoped>
@import '../../common/styles/gql_hospital.scss';

.patient-data-section-content {
    background-color: pink;
    // display: flex;
    // flex-direction: row;
    width: 100%;
    // height: 100%;
    // height: 10px;
    .patient-data-section-content-icon {
        margin-right: 10px;
    }
    .patient-data-section-content-values {
        width: 100%;
        ul {
            margin: 0;
            padding: 0;
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
</style>


