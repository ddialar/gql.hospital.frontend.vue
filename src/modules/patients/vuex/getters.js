const getters = {
    getSelectedPatientFullName: (state) => {
        return state.selectedPatient.name + ' ' + state.selectedPatient.surname;
    }
};

export default getters;