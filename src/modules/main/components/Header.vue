<template>
    <header>
        <div class="hamburger-menu-container" @click="showMenuMethod()">
            <font-awesome-icon icon="bars" />
        </div>
        <side-menu :show="showMenu" :parentCallback="showMenuMethod"/>
        <div class="header-title">
            {{this.$route.meta.title}}
        </div>
        <div class="logo-container">
            <img class="gqlhospital-logo" :src="gqlhospitalLogoSimple" />
        </div>
    </header>
</template>

<script>
import SideMenu from './SideMenu/SideMenu.vue';
export default {
    data: () => ({
        gqlhospitalLogoSimple: require("../../../assets/logos/gqlhospital-icon.svg"),
        showMenu: false
    }),
    components: {
        sideMenu: SideMenu
    },
    methods: {
        showMenuMethod() {
            console.log('showing:', !this.showMenu);
            
            this.showMenu = !this.showMenu;
        },
        logout() {
            localStorage.setItem("sqlHospitalLogedInUserToken", null);
            this.$router.push("/");
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../../common/styles/gql_hospital.scss";

header {
    width: 100%;
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: $header-background;
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
