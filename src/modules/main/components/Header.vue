<template>
    <header>
        <div 
            class="hamburger-menu-container" 
            @click="showMenuMethod()"
            v-if="this.$route.meta.title === 'Appointments' || this.$route.meta.title === 'Hospitalized'">
            <font-awesome-icon icon="bars" />
        </div>
        <div 
            class="hamburger-menu-container" 
            @click="goBack()"
            v-else>
            <font-awesome-icon icon="chevron-left" />
        </div>
        <side-menu :show="showMenu" :parentCallback="showMenuMethod"/>
        <div class="header-title">
            {{headerTitle}}
        </div>
        <div class="logo-container">
            <img class="gqlhospital-logo" :src="gqlhospitalLogoSimple" />
        </div>
    </header>
</template>

<script>
import { mapGetters } from 'vuex';

import SideMenu from './SideMenu/SideMenu.vue';
export default {
    data: () => ({
        gqlhospitalLogoSimple: require("logos/gqlhospital-icon.svg"),
        showMenu: false
    }),
    components: {
        sideMenu: SideMenu
    },
    methods: {
        showMenuMethod() {
            this.showMenu = !this.showMenu;
        },
        goBack() {
            this.$router.go(-1);
        },
        logout() {
            localStorage.setItem("sqlHospitalLogedInUserToken", null);
            this.$router.push("/");
        }
    },
    computed: {
        ...mapGetters([
            'getSelectedPatientFullName'
        ]),
        headerTitle() {
            return (this.$route.meta.title === 'Patient') ?
                this.getSelectedPatientFullName :
                this.$route.meta.title;
        }
    }
};
</script>

<style lang="scss" scoped>

header {
    width: 100%;
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // background: $header-background;
    background-color: pink;
    padding: 20px;
    box-sizing: border-box;
    .hamburger-menu-container {
        // background-color: cyan;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 44px;
        font-size: 25px;
        color: $tertiary-font-color;
    }
    .header-title {
        line-height: 44px;
        font-size: 1.1em;
    }
    .logo-container {
        // background-color: cyan;
        width: 44px;
        height: 44px;
        margin: 0;
        padding: 0;
        .gqlhospital-logo {
            width: 100%;
        }
    }
}

/* ************************************************ */
/* ********      Tablet configuration      ******** */
/* ************************************************ */

@media screen 
    and (min-width: $min-tablet-width) {
    header {
        .header-title {
            font-size: 1.3em;
        }
    }
}

</style>
