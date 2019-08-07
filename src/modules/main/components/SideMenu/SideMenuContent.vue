<template>
    <transition name="slide">
        <div class="side-menu-content">
            <div class="side-menu-header">
                <img class="gqlhospital-logo" :src="gqlhospitalLogoLandscape" />
            </div>
            <ul>
                <router-link
                    v-for="(option, index) in options"
                    :key="'option-' + index"
                    :to="option.link"
                    tag="li"
                    active-class="selected"
                    exact>
                    {{ option.text }}
                </router-link>
            </ul>
        </div>
    </transition>
</template>

<script>
export default {
    data: () => ({
        gqlhospitalLogoLandscape: require("logos/gqlhospital-landscape-logo.svg"),
        // REFACTOR: These options must be provided via props and maybe, some of then should be filtered based on the active user's role.
        options: [
            {
                icon: "fa-chart-pie",
                text: "Appointments",
                link: '/appointments'
            },
            {
                icon: "fa-chart-pie",
                text: "New patient",
                link: '/new_patient'
            },
        ]
    })
};
</script>

<style lang="scss" scoped>
.side-menu-content {
    position: relative;
    width: 250px;
    height: 100%;
    background-color: $main-background;
    ul {
        margin: 0;
        padding: 0;
    }
    li {
        padding: 0 15px;
        line-height: 40px;
        list-style: none;
    }
    li.selected {
        border-right: 5px solid $primary-color;
        color: $primary-color;
    }
    .side-menu-header {
        padding: 15px;
        box-sizing: border-box;
        img {
            width: 100%;
            padding-bottom: 20px;
            border-bottom: 1px solid $tertiary-color;
        }
    }
}

.slide-enter-active,
.slide-leave-active {
    transition: .5s;
}
.slide-enter {
    transform: translateX(-250px);
}
.slide-leave-to {
    transform: translateX(-250px);
}
</style>


