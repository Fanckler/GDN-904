import $ from 'jquery';
import FormDispatcher from '@alldigitalads/form-tools/FormDispatcher';
import Validator from '@alldigitalads/form-tools/Validator';

//main form
export function MainFormDispath(selector)
{
    var registerFormSelector = document.querySelector(selector);
    var registerFormValidator = new Validator(registerFormSelector,{hideErrorOnFocus: true});
    var registerFormDispatcher = new FormDispatcher(registerFormValidator);

    registerFormValidator.initialValidate();
    registerFormDispatcher
    .addSubmitListener()
    .addSuccessHandler( (data) => {
        if (data.result === 'ok') {
            window.location.href = data.url
        }
        else {
            return false;
        }
    })
    .addErrorHandler( (data) => {

       
    
        // return error
        formErrorsHandler(registerFormValidator, data);

  });
}
