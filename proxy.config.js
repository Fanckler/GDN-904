module.exports = {
    bypass: {
        '/api/v4': {
            method: 'GET',
            path: __dirname+'/src/twig/fixtures/data/api_v4'
        },
        
        '/account/signup/': {
            method: ['get', 'POST'],
            script: __dirname+'/proxy_scripts/serverResponseFormRegister.js'
        },
        '/account/login/': {
            method: ['get', 'POST'],
            script: __dirname+'/proxy_scripts/serverResponseFormLogin.js'
        },
        '/account/remind-password/': {
            method: ['get', 'POST'],
            script: __dirname+'/proxy_scripts/serverResponseFormRemind.js'
        },


        '/api/v6': {
            method: ['GET', 'POST'],
            script: (req, res, options) => {
                res.send('Example proxy bypass')
            }
        }
    },
    proxy: {
        '/test/proxy': {
            target: 'http://localhost:8080/data',
            secure: false,
            method: 'GET',
            pathRewrite: function(req, options) {
                return req.replace('/','').replace(/\//g,'_') + '.json';
            }
        }
    }
};
