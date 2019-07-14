<template>
    <div class="login-form-container">
        <div>
            <input 
                placeholder="Email" 
                type="text" 
                v-model="username.value"
                :class="{'error-field': usernameError}">
            <input 
                placeholder="Password" 
                type="password" 
                v-model="password.value"
                class="error-field">
                <!-- :class="{'error-field': !passwordError}"> -->
        </div>
        <div class="login-form-sigin-section">
            <button class="login-button" @click="login">Log in</button>
        </div>
    </div>
</template>

<script>
// import { gqlLogIn } from '../graphql';

export default {
    data: () => ({
        username: {
            value: 'admin',
            error: false
        },
        password: {
            value: 'iwipsqlepaneladmin',
            error: false
        },
        errors: []
    }),
    components: {},
    methods: {
        async signin() {
            // const username = this.username.value;
            // const password = this.password.value;

            try {
                // let userSignedInData = (await this.$apollo.mutate(gqlLogIn(username, password))).data.login;
                let userSignedInData = {};

                if (userSignedInData.token) {
                    localStorage.setItem('iwipSignedInUserToken', userSignedInData.token);
                    this.$router.push('/dashboard');
                } else {
                    throw new Error('No valid token received.');
                }
            } catch (apiError) {
                // let processedError = processGraphQLApiErrorMessage(apiError);
                // this.$toastr.error(processedError[0].description, processedError[0].message);
            }
        }
    },
    computed: {
        usernameError() { return this.username.error },
        passwordError() { return this.password.error }
    }
};
</script>

<style lang="scss">
@import '../../common/styles/gql_hospital.scss';

.login-form-container {
    width: 100%;
    margin-top: 50px;
    padding: 0;

    input[type="text"],
    input[type="password"] {
        width: 100%;
        margin-bottom: 10px;
        padding: 5px;
        font-size: 1em;
        box-sizing: border-box;
        border: none;
        border-bottom: solid 1px;
        border-color: #262626
    }

    .error-message {
        color: $error-color;

        ul {
            margin: 0;
            padding: 0px;
        }

        li {
            padding: 0 5px 3px 5px;
            list-style: none;
        }
    }

    .login-form-sigin-section {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: center;

        button {
            width: 100%;
            height: 30px;
            border: none;
            border-radius: 3px;
        }

        .login-button {
            font-size: 1em;
            background-color: $primary-color;
            color: white;
        }
    } 
}
</style>


