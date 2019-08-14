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
                'logos': path.resolve(__dirname, 'src/assets/logos')
            }
        }
    }
}