import gql from 'graphql-tag';

const getTodayAppointments = () => ({
    // TODO Replace the 'getAllPatients' query by the valid one where are requested only the logedin doctor today appointments.
    query: gql`
        query {
            patients: getAllPatients {
                id
                socialCareNumber
                name
                surname
                birthDate
            }
        }
    `,
    fetchPolicy: 'network-only'
});

export {
    getTodayAppointments
};