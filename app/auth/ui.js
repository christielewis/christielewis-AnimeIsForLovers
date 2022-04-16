const store = require('../store.js')

const onSignUpSuccess = function() {
    $('#auth-status').html('<p>Sign Up Successful!</p>')

    $('#sign-up').hide()
    $('#sign-in').show()
    $('#sign-out').hide()
    $('#home-btn').hide()
    // $('#welcome-pg').show()
    // $('#welcome-pg').hide()

    setTimeout(() => {
        $('#auth-status').html('')
    }, 4000)

    $('form').trigger('reset')
}

const onSignUpFailure = function() {
    $('#auth-status').html('<p>There was an error signing up.<br>Try again!</p>')

    $('#sign-up').show()
    $('#sign-out').hide()
    $('#sign-in').hide()
    $('#welcome-pg').hide()
    $('#change-pw').hide()
    $('#home-btn').hide()

    $('#create-anime').hide()
    $('#idx-anime').hide()
    $('#show-anime').hide()
    $('#update-anime').hide()
    $('#delete-anime').hide()
}
const onSignInSuccess = function(response) {
    $('#auth-status').html('<p>Sign In Successful!</p>')

    $('#home-btn').hide()
    $('#change-pw-btn').show()
    $('#anime-idx').show()
    $('#anime-add-btn').show()
    $('#sign-out').show()

    $('#sign-in').hide()
    $('#sign-up').hide()
    // $('#welcome-pg').hide()
    $('#change-pw').hide()

    // $('#create-anime').hide()
    // $('#idx-anime').hide()
    // $('#show-anime').hide()
    // $('#update-anime').hide()
    // $('#delete-anime').hide()

    $('form').trigger('reset')
    console.log(response)
    store.user = response.user

    setTimeout(() => {
        $('#auth-status').html('')
    }, 4000)

}

const onSignInFailure = function() {
    $('#auth-status').html('<p>There was an error signing in.<br>Try again!</p>')

    $('#sign-in').show()
    $('#sign-out').hide()
    $('#sign-up').hide()
    $('#welcome-pg').hide()
    $('#change-pw').hide()
    $('#home-btn').hide()

    $('#create-anime').hide()
    $('#idx-anime').hide()
    $('#show-anime').hide()
    $('#update-anime').hide()
    $('#delete-anime').hide()
}

const onChangePWSuccess = function() {
    $('#auth-status').html('<p>Password Successfully Changed!</p>')
    $('form').trigger('reset')

    setTimeout(() => {
        $('#auth-status').html('')
    }, 4000)
}

const onChangePWFailure = function() {
    $('#auth-status').html('<p>Error.<br>Try again!</p>')
}

const onSignOutSuccess = function() {
    $('#auth-status').html('<p>Signed Out Successfully !</p>')
    $('#anime-display').html('')
    $('#home-btn').hide()

    setTimeout(() => {
        $('#auth-status').html('')
    }, 4000)

    $('form').trigger('reset')
    store.user = null
}

const onSignOutFailure = function() {
    $('#auth-status').html('<p>Error.<br>Try again!</p>')
}


module.exports = {
    onSignUpSuccess,
    onSignUpFailure,
    onSignInSuccess,
    onSignInFailure,
    onChangePWSuccess,
    onChangePWFailure,
    onSignOutSuccess,
    onSignOutFailure
}