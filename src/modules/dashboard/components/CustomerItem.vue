<template>
    <div class="customer-item-container">
        <ul>
            <li class="customer">
                <div>name</div>
                <div>location</div>
            </li>
            <li class="licence bound">
                <div>99</div>
            </li>
            <li class="licence active">
                <div>99</div>
            </li>
            <li class="licence inactive">
                <div>99</div>
            </li>
            <li class="licence expired">
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

.customer-item-container {
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
        .customer div:nth-child(2) {
            font-size: .75em;
        }
        .licence {
            font-size: 1.7em;
            text-align: right;
        }
        .bound {
            color: $licence-bound-color;
        }
        .active {
            color: $licence-active-color;
        }
        .inactive {
            color: $licence-inactive-color;
        }
        .expired {
            color: $licence-expired-color;
        }
    }
}
.customer-item-container:nth-child(odd) {
    background-color: $tertiary-color-soft;
}
</style>


