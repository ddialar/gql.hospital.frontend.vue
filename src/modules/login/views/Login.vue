<template>
    <div class="container">
        <div class="wrapper">
            <div class="login-logo">
                <img :src="omniaLogo">
                <p>Personal Panel</p>
            </div>
            <login-form></login-form>
        </div>
    </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue';

export default {
    data: () => ({
        omniaLogo: require('../../../assets/logos/gqlhospital-full-logo.svg')
    }),
    components: {
        loginForm: LoginForm
    }
};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5%;
}
.wrapper {
    margin: 0 auto;
    width: 80%;
}
.login-logo {
    img {
        width: 100%;
    }
    p {
        text-align: center;
    }
}
@media screen and (min-width: $break-small) {
    .container {
        padding-top: 10%;
    }
    .wrapper {
        width: 250px;
    }
    .login-logo {
        p {
            font-size: 1.14em;
        }
    }
}
@media screen and (min-width: $break-large) {
    .container {
        padding-top: 5%;
    }
    .wrapper {
        width: 300px;
    }
    .login-logo {
        p {
            font-size: 1.36em;
        }
    }
}
</style>

