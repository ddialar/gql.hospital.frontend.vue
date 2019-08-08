<template>
    <div class="patient-section-header">
        <div class="section-title"><span><font-awesome-icon :icon=icon /></span> {{name}}</div>
        <div class="search-field" v-if="showSearch">
            <input 
                type="text" 
                :value="value" 
                @input="($event) => $emit('input', $event.target.value)">
            <font-awesome-icon icon="search" />
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'name',
        'icon',
        'value',
        'showSearch'
    ]
}
</script>

<style lang="scss" scoped>
.patient-section-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex: 1;
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
            font-size: .8em;
            border: none;
            border-bottom: 1px solid $tertiary-color;
        }
    }
}
</style>


