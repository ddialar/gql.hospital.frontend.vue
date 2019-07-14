<template>
    <div class="appointments-container">
        <div class="search-patient">
            <input type="text" placeholder="Patient name" :model="patientFilter">
            <font-awesome-icon class="search-icon" icon="search" />
        </div>
        <div class="patients-list-wrapper">
            <data-card v-for="i in 4" :key="`card-${i}`" />
        </div>
    </div>
</template>

<script>
import DataCard from '../components/DataCard.vue';

export default {
    data: () => ({}),
    components: {
        dataCard: DataCard
    }
};
</script>

<style lang="scss" scoped>
@import '../../common/styles/gql_hospital.scss';

.appointments-container {
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
    .search-patient {
        width: 40%;
        margin-bottom: 10px;
        padding: 10px;
        input:focus {
            outline: none;
        }
        input[type="text"] {
            width: 85%;
            margin-right: 10px;
            font-size: 1em;
            border: none;
            border-bottom: 1px solid $tertiary-color;
        }
    }
    .patients-list-wrapper{
        position: relative;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: nowrap;
    }
}
</style>

