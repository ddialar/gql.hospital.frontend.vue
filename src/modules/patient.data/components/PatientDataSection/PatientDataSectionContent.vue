<template>
    <div class="patient-data-section-content-row">
        <div class="patient-data-section-content-row-icon">
            <font-awesome-icon icon="chevron-right" />
        </div>
        <div class="patient-data-section-content-row-values">
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
.patient-data-section-content-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 10px;
    .patient-data-section-content-row-icon {
        margin-right: 10px;
    }
    .patient-data-section-content-row-values {
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


