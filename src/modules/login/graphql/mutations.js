import gql from 'graphql-tag';

const logIn = (username, password) => ({
    mutation: gql`
        mutation login ($username: String!, $password: String!) {
            login (
                data: {
                    username: $username,
                    password: $password 
                }
            ) {
                ... on AuthenticatedUser {
                    name
                    surname
                    username
                    role
                    token
                }
                ... on ApiError {
                    code
                    message
                    description
                }
            }
        }
    `,
    variables: {
        username,
        password
    }
});

export {
    logIn
};