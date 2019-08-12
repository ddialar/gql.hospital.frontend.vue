const calculateAge = (birthDate) => {
    return (new Date()).getFullYear() - (new Date(birthDate)).getFullYear()
};

const userServices = {
    calculateAge
}

export default userServices;