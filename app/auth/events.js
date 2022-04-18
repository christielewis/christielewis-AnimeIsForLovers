const authApi = require('./api.js')
const authUi = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onHomeBtn = () => {
    // BUTTONS //
    $('#sign-out').show()
    $('#home-btn').hide()
    $('#change-pw-btn').show()
    $('#anime-idx').show()
    $('#anime-add-btn').show()
    $('#anime-show-btn').show()
    $('#anime-delete-btn').show()
    $('#anime-update-btn').show()

    // FORMS //
    $('#create-anime').hide()
    $('#show-anime').hide()
    $('#update-anime').hide()
    $('#delete-anime').hide()
    $('#change-pw').hide()

    $('#auth-status').html('')
    $('#err-msg').html('')
    $('#anime-display').html('')
}

const onChangePwBtn = () => {
    // FORMS //
    $('#change-pw').show()
    $('#create-anime').hide()
    $('#show-anime').hide()
    $('#update-anime').hide()
    $('#delete-anime').hide()

    // BUTTONS //
    $('#sign-out').show()
    $('#home-btn').show()
    $('#change-pw-btn').hide()
    $('#anime-idx').hide()
    $('#anime-add-btn').hide()
    $('#anime-show-btn').hide()
    $('#anime-delete-btn').hide()
    $('#anime-update-btn').hide()

    $('#auth-status').html('')
    $('#err-msg').html('')
    $('#anime-display').html('')
}

const onWelcomeSignUp = () => {
    $('#welcome-pg').hide()
    $('#sign-up').show()
    $('#home-btn').hide()
}
const onWelcomeSignIn = () => {
    $('#welcome-pg').hide()
    $('#sign-up').hide()
    $('#sign-in').show()
    $('#home-btn').hide()
}

const onSignUp = (e) => {
    e.preventDefault()

    const form = e.target
    const data = getFormFields(form)
    // console.log(data)

    
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
    // console.log(data)

    $('#home-pg').show()
    
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
    $('#home-pg').hide()

    $('#sign-up').hide()
    $('#sign-in').hide()
    $('#sign-out').hide()
    $('#welcome-pg').show()
    $('#change-pw').hide()

    $('#create-anime').hide()
    $('#anime-idx').hide()
    $('#show-anime').hide()
    $('#update-anime').hide()
    $('#delete-anime').hide()

    authApi
        .signOut()
        .then(() => authUi.onSignOutSuccess())
        .catch(() => authUi.onSignOutFailure())
}

module.exports = {
    onHomeBtn,
    onChangePwBtn,
    onSignUp,
    onSignIn,
    onChangePW,
    onSignOut,
    onWelcomeSignUp,
    onWelcomeSignIn
}