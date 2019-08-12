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
                __typename
                ... on Patient {
                    id
                    socialCareNumber
                    name
                    surname
                    birthDate
                    genre
                    medicalHistory {
                        __typename
                        reports: medicalReports {
                            # NOTE: This two fields "__typename" and "id" could be needed in order to update reports into the cache memory.
                            # __typename
                            id
                            department
                            reportType
                            reportDate
                        }
                    }
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
        id
    },
    fetchPolicy: 'network-only'
});

export {
    getPatientById
};