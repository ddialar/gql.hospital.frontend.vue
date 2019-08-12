var path = require('path');

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: "@import \"@/modules/common/styles/gql_hospital.scss\";"
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                'services': path.resolve(__dirname, 'src/core/services'),
                'logos': path.resolve(__dirname, 'src/assets/logos')
            }
        }
    }
}