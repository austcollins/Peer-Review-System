var config = {
    development: {
        //url to be used in link generation
        url: 'localhost',
        //db connection settings
        database: {
            host:   'localhost',
            port:   '5432',
            db:     'peer-review-system',
            user:   'austincollins',
            password: 'up904254'
        },
        //server details
        server: {
            host: 'localhost',
            port: '8080'
        }
    },
    production: {
        //url to be used in link generation
        url: '',
        //db connection settings
        database: {
            host: '',
            port: '',
            db:     ''
        },
        //server details
        server: {
            host:   '',
            port:   ''
        }
    }
    };
    module.exports = config;