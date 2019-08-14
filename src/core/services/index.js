import User from './user.services';

// ###############################################################
// ##########            AVAILABLE SERVICES             ##########
// ###############################################################

const services = {
    User
};

// ###############################################################
// ##########            PLUGIN DEFINITION              ##########
// ###############################################################

var ServicesPlugin = {};

ServicesPlugin.install = Vue => {
    Vue.prototype.$services = services;
}

// ###############################################################

export default ServicesPlugin;