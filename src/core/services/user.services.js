const calculateAge = birthDate => {
    return (new Date()).getFullYear() - (new Date(birthDate)).getFullYear()
};

const User = {
    calculateAge
};

export default User;
