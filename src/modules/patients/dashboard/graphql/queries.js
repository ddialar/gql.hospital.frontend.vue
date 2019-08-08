import gql from 'graphql-tag';

// const getPatientById = (id) => ({
//     query: gql`
//         query ($id: String!) {
//             patient: getPatientById (id: $id) {
//                 __typename
//                 ... on Patient {
//                     id
//                     socialCareNumber
//                     name
//                     surname
//                     birthDate
//                     medicalHistory {
//                         medicalReports {
//                             department
//                             reportType
//                             reportDate
//                         }
//                     }
//                 }
//                 ... on ApiError {
//                     code
//                     message
//                     description
//                 }
//             }
//         }
//     `,
//     variables: {
//         id
//     },
//     fetchPolicy: 'network-only'
// });
const getPatientById = (id) => ({
    query: gql`
        query ($id: String!) {
            patient: getPatientById (id: $id) {
                id
                socialCareNumber
                name
                surname
                birthDate
                medicalHistory {
                    medicalReports {
                        department
                        reportType
                        reportDate
                    }
                }
            }
        }
    `,
    variables: {
        id
    },
    fetchPolicy: 'network-only'
});

export {
    getPatientById
};