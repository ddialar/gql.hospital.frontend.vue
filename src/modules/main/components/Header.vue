<template>
    <header>
        <div class="logo-wrapper">
            <div class="logo-container">
                <img class="omnia-logo" :src="omniaLogoSimple">
            </div>
            <div class="moto">
                <p>Personal</p>
                <p>Panel</p>
            </div>
        </div>
        <div class="logout-wrapper">
            <div>Log out</div>
            <div><font-awesome-icon icon="sign-out-alt" /></div>
        </div>
    </header>
</template>

<script>
export default {
    data: () => ({
        omniaLogoSimple: require("../../../assets/logos/gqlhospital-short-logo.svg")
    })
};
</script>

<style lang="scss" scoped>
@import "../../common/styles/gql_hospital.scss";

header {
    width: 100%;
    padding: 0 10px;
    z-index: 1;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // border-bottom: 1px solid $tertiary-color;
    background: $header-background;
    .logo-wrapper {
        width: 170px;
        padding: 5px;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        .logo-container {
            width: 46px;
            height: 50px;
            padding: 0;
            .omnia-logo {
                width: 100%;
            }
        }
        .moto {
            width: 114px;
            height: 50px;
            p {
                margin: 5px 0 0 0;
                padding-left: 10px;
                box-sizing: border-box;
                font-size: 16px;
                text-align: left;
                color: $secondary-font-color;
            }
        }
    }
    .logout-wrapper {
        width: 170px;
        padding: 5px;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        color: $secondary-font-color;
        div:nth-child(2) {
            margin-left: 10px;
        }
    }
}
</style>
