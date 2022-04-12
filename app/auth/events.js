const authApi = require('./api.js')
const authUi = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onWelcomeSignUp = function() {
    $('#welcome-pg').hide()
    // $('#title').hide()
    $('#sign-up').show()
}
const onWelcomeSignIn = function() {
    $('#welcome-pg').hide()
    $('#sign-up').hide()
    $('#sign-in').show()
}

const onSignUp = function(e) {
    e.preventDefault()
    // console.log('yerrrrr');

    const form = e.target
    const data = getFormFields(form)
    console.log(data)

    // $('#welcome-pg').show()
    $('#welcome-pg').hide()
    $('#sign-up').hide()
    // $('#sign-in').show()
    // $('#sign-out').hide()
    // $('#games').hide()
    
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

const onSignIn = function(e) {
    e.preventDefault()

    // $('#sign').toggleClass('hidden')
    const form = e.target
    const data = getFormFields(form)
    console.log(data)

    // $('#welcome-pg').hide()
    $('#welcome-pg').hide()
    // $('#sign-up').hide()
    // $('#sign-in').hide()
    // $('#sign-out').show()
    // $('#games').show()
    
    authApi.signIn(data)
        .then((response) => authUi.onSignInSuccess(response))
        .catch(() => authUi.onSignInFailure())
}

const onChangePW = function(e) {
    e.preventDefault()

    const form = e.target
    const data = getFormFields(form)

    authApi
        .changePW(data)
        .then((response) => authUi.onChangePWSuccess(response))
        .catch(() => authUi.onChangePWFailure())
}

const onSignOut = function() {

    // $('#sign-up').show()
    // $('#sign-in').show()
    // $('#sign-out').hide()
    $('#welcome-pg').show()
    $('#games').hide()

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