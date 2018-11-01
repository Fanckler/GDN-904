/**
 * Настройки эмуляции работы back-end'а.
 *
 * proxy - Проксирование адресов. Позволяет по URL-1 отдать контент, доступный по URL-2
 * bypass - При наличии свойства "path" будет возвращен файл из указанной директории. При наличии свойства "script"
 *          контент будет сгенерирован указанным скриптом. Свойство "script" может содержать как функцию, так и путь
 *          к файлу со скриптом. Функция должна принимать три параметра: объект запроса, объект ответа и объект доп. опций
 *
 *Пример:
 *  #Request: /api/abc/path/to/page; Result: /abc/path/to/page
 *  proxy: {
 *      '/api/abc': {
 *          target: 'http://localhost:8080',
 *          secure: false,
 *          method: 'GET',
 *          pathRewrite: {'^/api': ''}
 *      }
 *  }
 *
 *  #Запрос /api/v4/file/name вернет файл /path/to/files/file_name.json
 *  bypass: {
 *      '/api/v4': {
 *          method: 'GET',
 *          path: '/path/to/files'
 *      }
 *  }
 *
 *  #Запрос /api/v4/* вернет сгенерированный функцией ответ
 *  bypass: {
 *      '/api/v4': {
 *          method: 'POST',
 *          script: (req, res, options) => {...}
 *      }
 *  }
 *
 *  #Запрос /api/v4/* вернет в качестве ответа результат работы скрипта
 *  bypass: {
 *      '/api/v4': {
 *          method: 'GET',
 *          script: '/path/to/script'
 *      },
 *  }
 */
module.exports = {
    bypass: {
        '/api/v4': {
            method: 'GET',
            path: __dirname+'/src/twig/fixtures/data/api_v4'
        },

        '/api/v5/': {
            method: ['get', 'POST'],
            script: __dirname+'/proxy_scripts/bypass_example.js'
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