/**
 * Format:
 *
 * domain: {
 *   locale: {
 *      code1: value,
 *      code2: value,
 *      code3: {
 *          subcode1: value,
 *          subcode2: value
 *      }
 *   }
 * }
 *
 */

module.exports = {
    messages: {
        en: {
            PRIMITIVES: {
                OR: 'or',
                SIGN_IN: 'Sign In'
            },
            PAGINATION: {
                PREV: 'Previous',
                NEXT: 'Next'
            },
            NAV_MENU_HOMEPAGE_TEXT: 'Home',
            NAV_MENU_TERMS_TEXT: 'Terms and Conditions',
			
            NAV_LOGIN_LINK_TEXT: 'Login',
            NAV_JOIN_LINK_TEXT: 'Register',
			
			MAIN_PAGE_TITLE: 'Template skeleton',
			
			MAIN_LOGIN_FORM: {
				HEADER_TITLE: 'Join for free',
				HEADER_TEXT: 'Free free free!',
				NAME_PLACEHOLDER: 'Your name',
				EMAIL_PLACEHOLDER: 'Your email',
				PASSWORD_PLACEHOLDER: 'Create password',
				BY_CLICKING_TEXT: 'By clicking “Create account” you agree with the ' +
								  '%link1_open%Terms and Conditions%link1_close%',
				BTN_SUBMIT: 'Create account',
				HAVE_ACCOUNT: 'Already have an account?',
				LOGIN_FB: 'Login with Facebook',
				NO_PUBLISH_INFO: 'We will never publish anything on your behalf',
			},
        },
    },
};