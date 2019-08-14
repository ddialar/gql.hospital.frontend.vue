import Login from './modules/login/views/Login.vue';
import Main from './modules/main/views/Main.vue';
// import Dashboard from './modules/dashboard/views/Dashboard.vue';
import AppointmentsList from './modules/appointments.list/views/AppointmentsList.vue';
import HospitalizedList from './modules/hospitalized.list/views/HospitalizedList.vue';
import PatientDashboard from './modules/patients/dashboard/views/PatientDashboard.vue';

const routes = [
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
                component: AppointmentsList,
                meta: {
                    title: 'Appointments'
                }
            },
            {
                path: '/hospitalized',
                component: HospitalizedList,
                meta: {
                    title: 'Hospitalized'
                }
            },
            {
                path: '/patient/:patientId',
                component: PatientDashboard,
                meta: {
                    title: 'Patient'
                },
                props: true
            }
        ]
    }
];

export default routes;