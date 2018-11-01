import $ from 'jquery';
import {MainFormDispath} from './components/validator';

MainFormDispath('.formRegister');

$('.step-control--next').on('click', function () {
    let stepLenght = $('.formRegister__step').length;
    let activeStep = $('.formRegister__step--active').index();
    let inputError = $('.formRegister__step')[activeStep].querySelector('.input');
    let error = $('.formRegister__step--active').find('input');

    let inputs = document.querySelectorAll('.valid');

    if (error.hasClass('valid')) {
        $('.formRegister__step').removeClass('formRegister__step--active');
        $(`.formRegister__step:eq(${activeStep +1})`).addClass('formRegister__step--active');

        $('.step-control--prev').show();
    }
    else {
        return false;
    }

    // for
    for (let i = 0; i < inputs.length; i++) {
        $(`.line-controls-step__link:eq(${i})`).addClass('valid');
    }


    // disable link control
    $('.line-controls-step__link').removeClass('line-controls-step__link--active');
    $('.line-controls-step__link')[activeStep+1].classList.add('line-controls-step__link--active');
    

});

// prev
$('.step-control--prev').on('click', function (e) {
    e.preventDefault();
    let stepLenght = $('.formRegister__step').length;
    let activeStep = $('.formRegister__step--active').index() -1;
    let inputError = $('.formRegister__step')[activeStep].querySelector('.input');
    let error = $('.formRegister__step--active').find('input');

    if (activeStep  === 0) {
        $('.step-control--prev').hide();
    }
    
    $('.formRegister__step').removeClass('formRegister__step--active');
    $('.formRegister__step')[activeStep].classList.add('formRegister__step--active');
    
    // disable link control
    $('.line-controls-step__link').removeClass('line-controls-step__link--active');
    $('.line-controls-step__link')[activeStep].classList.add('line-controls-step__link--active');    


});

// line control
$('.step-control').on('click', function (e) {
    let stepLenght = $('.formRegister__step').length;
    let activeStep = $('.formRegister__step--active').index()+1;
    $('.line-controls-step__text span').text(activeStep+'/'+stepLenght);
});