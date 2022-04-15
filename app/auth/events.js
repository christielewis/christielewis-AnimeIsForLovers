const authApi = require('./api.js')
const authUi = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onWelcomeSignUp = () => {
    $('#welcome-pg').hide()
    // $('#title').hide()
    $('#sign-up').show()
}
const onWelcomeSignIn = () => {
    $('#welcome-pg').hide()
    $('#sign-up').hide()
    $('#sign-in').show()
}

const onSignUp = (e) => {
    e.preventDefault()
    // console.log('yerrrrr');

    const form = e.target
    const data = getFormFields(form)
    console.log(data)

    // $('#welcome-pg').show()
    // $('#welcome-pg').hide()
    $('#sign-up').hide()
    $('#sign-in').show()
    $('#sign-out').hide()
    
    if(data.credentials.password !== data.credentials.password_confirmation) {
        $('#auth-status').html('<p>Passwords entered do not match.<br>Try again!</p>');
        $('#sign-up').show()
    } else {
        $('#sign-up').hide()
        $('#sign-in').show()
        authApi.signUp(data)
            .then(() => authUi.onSignUpSuccess())
            .catch(() => authUi.onSignUpFailure())
    }
}

const onSignIn = (e) => {
    e.preventDefault()

    // $('#sign').toggleClass('hidden')
    const form = e.target
    const data = getFormFields(form)
    console.log(data)

    $('#welcome-pg').hide()
    $('#sign-up').hide()
    $('#sign-in').hide()
    $('#sign-out').show()
    $('#change-pw').show()
    
    authApi.signIn(data)
        .then((response) => authUi.onSignInSuccess(response))
        .catch(() => authUi.onSignInFailure())
}

const onChangePW = (e) => {
    e.preventDefault()

    const form = e.target
    const data = getFormFields(form)

    $('#welcome-pg').hide()
    $('#sign-up').hide()
    $('#sign-in').hide()
    $('#sign-out').show()
    $('#change-pw').hide()

    authApi
        .changePW(data)
        .then((response) => authUi.onChangePWSuccess(response))
        .catch(() => authUi.onChangePWFailure())
}

const onSignOut = () => {

    $('#sign-up').show()
    $('#sign-in').show()
    $('#sign-out').hide()
    $('#welcome-pg').show()
    $('#change-pw').hide()

    authApi
        .signOut()
        .then(() => authUi.onSignOutSuccess())
        .catch(() => authUi.onSignOutFailure())
}

module.exports = {
    onSignUp,
    onSignIn,
    onChangePW,
    onSignOut,
    onWelcomeSignUp,
    onWelcomeSignIn
}