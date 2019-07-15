import Login from './modules/login/views/Login.vue';
import Main from './modules/main/views/Main.vue';
// import Dashboard from './modules/dashboard/views/Dashboard.vue';
import AppointmentsList from './modules/appointments.list/views/AppointmentsList.vue';
import HospitalizedList from './modules/hospitalized.list/views/HospitalizedList.vue';
import PatientData from './modules/patient.data/views/PatientData.vue';

export const routes = [
    {
        path: '',
        component: Login
    },
    {
        path: '/gql',
        component: Main,
        children: [
            // {
            //     path: '/dashboard',
            //     component: Dashboard
            // },
            {
                path: '/appointments',
                component: AppointmentsList
            },
            {
                path: '/hospitalized',
                component: HospitalizedList
            },
            {
                path: '/patient/:patientId',
                component: PatientData,
                props: true
            }
        ]
    }
];