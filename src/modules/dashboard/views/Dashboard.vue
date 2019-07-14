<template>
    <div class="dashboard-container">
        <div class="cards-row">
            <data-card v-for="i in 4" :key="`card-${i}`" />
        </div>
        <div class="dashboard-content">
            <customer-list />
        </div>
    </div>
</template>

<script>
import DataCard from '../components/DataCard.vue';
import CustomerList from '../components/CustomerList.vue';

export default {
    data: () => ({}),
    components: {
        dataCard: DataCard,
        customerList: CustomerList
    }
};
</script>

<style lang="scss" scoped>
@import '../../common/styles/gql_hospital.scss';

.dashboard-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 25px 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: $main-background;
    .cards-row {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: nowrap;
    }
    .dashboard-content {
        padding: 30px 0;
        box-sizing: border-box;
    }
}
</style>

