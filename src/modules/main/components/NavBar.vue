<template>
    <!-- <transition name="slide"> -->
        <nav class="side-menu-wrapper">
            <div class="side-menu-header">
                <img class="gqlhospital-logo" :src="gqlhospitalLogo" />
            </div>
            <div class="side-menu-content">
                <ul>
                    <router-link
                        v-for="(option, index) in options"
                        :key="'option-' + index"
                        :to="option.link"
                        tag="li"
                        active-class="selected"
                        exact>
                        <div class="menu-option">
                            <div>
                                <font-awesome-icon :icon="option.icon" />
                            </div>
                            <div>
                                {{ option.text }}
                            </div>
                        </div>
                    </router-link>
                </ul>
            </div>
        </nav>
    <!-- </transition> -->
</template>

<script>
export default {
    data: () => ({
        gqlhospitalLogo: require("logos/gqlhospital-icon-light.svg"),
        // REFACTOR: These options must be provided via props and maybe, some of them should be filtered based on the active user's role.
        options: [
            {
                icon: "calendar-alt",
                text: "Appointments",
                link: '/appointments'
            },
            {
                icon: "user-circle",
                text: "New patient",
                link: '/new_patient'
            },
        ]
    })
};
</script>

<style lang="scss" scoped>
.side-menu-wrapper {
    position: relative;
    width: 104px;
    height: 100%;
    background-color: $menu-background;
    ul {
        margin: 0;
        padding: 0;
    }
    li {
        padding: 0;
        list-style: none;
        color: $menu-text;
        text-align: center;
    }
    li:first-child {
        margin-top: 13px
    }
    li.selected {
        // border-right: 5px solid $menu-activated-background;
        // color: $menu-activated-text;
        background-color: $menu-activated-background;
        // div:first-child {
        //     color: $primary-color;
        // }
        // div:last-child {
        //     color: $tertiary-color-soft;
        // }
    }
    .side-menu-header, 
    .menu-option {
        box-sizing: border-box;
        height: 74px;
    }
    .side-menu-header {
        padding: 15px 30px;
        img {
            width: 100%;
            padding-bottom: 14px;
            border-bottom: 1px solid $tertiary-color;
        }
    }
    .menu-option {
        padding: 13px 5px;
        div:first-child {
            font-size: 1.8em;
        }
        div:last-child {
            font-size: .8em;
            margin: 0;
            padding: 0;
        }
    }
}

// .slide-enter-active,
// .slide-leave-active {
//     transition: .5s;
// }
// .slide-enter {
//     transform: translateX(-250px);
// }
// .slide-leave-to {
//     transform: translateX(-250px);
// }
</style>


