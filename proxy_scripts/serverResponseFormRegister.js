/**
 * req.body - POST параметры
 * req.query - GET параметры
 */
module.exports = (req, res, options) => {
    let post = req.body; //Получаем POST данные
    if (post['formRegistration[email]'] === undefined || post['formRegistration[plainPassword]'] === undefined) {
        //Если нет какого-либо поля, то вернем ошибку обычным HTML
        res.statusCode = 400;
        // res.json({
        //     result: 'error',
        //     url: '/account/cabinet/'
        // });
    } 

    else if (post['formRegistration[email]'] == 'test@gmail.com' && post['formRegistration[plainPassword]'] == '123456') {
        res.statusCode = 200;
        res.json({
            result: 'ok',
            action: 'redirect',
            show_captcha: false,
            url: '/account/cabinet/'
        });
    }

    else if (post['formRegistration[email]'] == 'test2@gmail.com' && post['formRegistration[plainPassword]'] == '123456') {
        res.statusCode = 400;
        res.json({
            result: 'error',
            show_captcha: '6LcGE0YUAAAAAIQBAWSFHR9UYt8RJDZhWZAal5Cp',
            error: {
                message: 'You can’t use this email or password. Please try once again.',
                fields: {
                    email: 'Email is used',
                    plainPassword: 'Password is too easy'
                }
            }
        });
    }

    else if (post['formRegistration[email]'] == 'test3@gmail.com' && post['formRegistration[plainPassword]'] == '123456') {
        res.statusCode = 400;
        res.json({
            result: 'error',
            show_captcha: false,
            error: {
                message: 'The email or password you entered is incorrect.',
            }
        });
    }    

    else {
        res.statusCode = 200;
        
        res.json({
            result: 'ok',
            url: '/account/cabinet/'
        });
        // res.send('Rule not found');
    }

    
};
