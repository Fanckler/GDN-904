/**
 * req.body - POST параметры
 * req.query - GET параметры
 */
module.exports = (req, res, options) => {
    let post = req.body; //Получаем POST данные
    if (post['formRegistration[email]'] === undefined || post['formRegistration[plainPassword]'] === undefined) {
        //Если нет какого-либо поля, то вернем ошибку обычным HTML
        res.statusCode = 400;
        res.send('Bad request');
    }
    else if (post['formRegistration[email]'] == 'test@gmail.com' && post['formRegistration[plainPassword]'] == '123456') {
        res.statusCode = 200; //Можно не указывать явно
        res.json({
            result: 'error',
            message: 'Error message'
        });
    }
    else if (post['formRegistration[email]'] == 'test2@gmail.com' && post['formRegistration[plainPassword]'] == '123456') {
        res.statusCode = 400;
        res.json({
            result: 'error',
            message: 'Bad request'
        });
    }
    else if (post['formRegistration[email]'] == 'test3@gmail.com' && post['formRegistration[plainPassword]'] == '123456') {
        res.json({
            result: 'ok'
        });
    }
    else if (post['formRegistration[email]'] == 'test4@gmail.com' && post['formRegistration[plainPassword]'] == '123456') {
        //Перенаправление
        res.statusCode = 301;
        res.setHeader('Location', 'https://google.com');
        res.end();
    }
    else {
        res.send('Rule not found');
    }
};