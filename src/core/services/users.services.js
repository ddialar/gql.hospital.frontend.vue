const calculateAge = (birthDate) => {
    return (new Date()).getFullYear() - (new Date(birthDate)).getFullYear()
};

export default {
    calculateAge
};