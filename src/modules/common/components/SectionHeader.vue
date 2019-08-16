<template>
    <header>
        <div class="search-bar" v-if="search">
            <input 
                type="text" 
                :placeholder="searchPlaceholder" 
                :value="filterContent"
                @input="$event => $emit('input', $event.target.value)">
            <font-awesome-icon icon="search" />
        </div>
    </header>
</template>

<script>
export default {
    data: () => ({
        filterContent: ''
    }),
    props: {
        search: { type: Boolean, default: false },
        searchPlaceholder: { type: String, default: 'Search' }
    },
    components: {}
};
</script>

<style lang="scss" scoped>

header {
    width: 100%;
    height: $section-header-height;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .search-bar {
        width: 50%;
        height: 25px;
        padding: 10px 20px;
        display: flex;
        flex: row;
        justify-content: space-between;
        align-items: center;
        border-radius: 25px;
        border: 1px solid $tertiary-color;
        input:focus {
            outline: none;
        }
        input[type="text"] {
            width: 100%;
            margin-right: 10px;
            padding: 0 5px;
            box-sizing: border-box;
            font-size: 1em;
            line-height: 25px;
            border: none;
        }
    }
}

/* ************************************************ */
/* ********      Tablet configuration      ******** */
/* ************************************************ */

// @media screen 
//     and (min-width: $min-tablet-width) {
//     header {
//         .header-title {
//             font-size: 1.3em;
//         }
//     }
// }

</style>
