<template>
    <div class="patient-item-container">
        <ul>
            <li class="patient">
                <div>name</div>
                <div>location</div>
            </li>
            <li class="patient-data">
                <div>99</div>
            </li>
            <li class="patient-data">
                <div>99</div>
            </li>
            <li class="patient-data">
                <div>99</div>
            </li>
            <li class="patient-data">
                <div>99</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../common/styles/gql_hospital.scss";

.patient-item-container {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: $main-background;
    ul {
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        li {
            list-style: none;
            width: 15%;
        }
        li:first-child {
            width: 40%;
        }
        .patient div:nth-child(2) {
            font-size: .75em;
        }
        .patient-data {
            font-size: 1.7em;
            text-align: right;
            color: $secondary-font-color;
        }
    }
}
.patient-item-container:nth-child(odd) {
    background-color: $tertiary-color-soft;
}
</style>


