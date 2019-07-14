<template>
    <div class="customer-list-container">
        <ul>
            <li class="customer name">
                <input type="text" placeholder="Customer" :model="customerFilter">
                <font-awesome-icon class="search-icon" icon="search" />
            </li>
            <li class="licence bound">
                <font-awesome-icon icon="link" /> Bound
            </li>
            <li class="licence active">
                <font-awesome-icon icon="check" /> Active
            </li>
            <li class="licence inactive">
                <font-awesome-icon icon="pause" /> Inactive
            </li>
            <li class="licence expired">
                <font-awesome-icon icon="times" /> Expired
            </li>
        </ul>
        <div class="customer-list-content">
            <customer-item v-for="i in 5" :key="`customer-${i}`" />
        </div>
    </div>
</template>

<script>
import CustomerItem from '../components/CustomerItem.vue';

export default {
    data: () => ({}),
    components: {
        customerItem: CustomerItem
    }
};
</script>

<style lang="scss" scoped>
@import "../../common/styles/gql_hospital.scss";

.customer-list-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: $main-background;
    ul {
        width: 100%;
        margin: 0 0 10px;
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        li {
            list-style: none;
            font-size: .8em;
            width: 15%;
        }
        li:first-child {
            width: 40%;
            input:focus {
                outline: none;
            }
            input[type="text"] {
                width: 85%;
                margin-right: 10px;
                border: none;
                border-bottom: 1px solid $tertiary-color;
            }
        }
        .customer div:nth-child(2) {
            font-size: .75em;
        }
        .licence {
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
        .search-icon {
            color: $licence-inactive-color;
        }
    }
}
</style>


