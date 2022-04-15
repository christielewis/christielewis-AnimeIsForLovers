const store = require('../store.js')

const onSignUpSuccess = function() {
    $('#auth-status').html('<p>Sign Up Successful!</p>')
    $('form').trigger('reset')
}

const onSignUpFailure = function() {
    $('#auth-status').html('<p>There was an error signing up.<br>Try again!</p>')
}
const onSignInSuccess = function(response) {
    $('#auth-status').html('<p>Sign In Successful!</p>')
    $('#sign-in').hide()
    $('#sign-out').show()
    $('#games').show()
    $('form').trigger('reset')
    console.log(response)
    store.user = response.user
    // gameApi
    //     .createGame()
    //     .then((response) => {store.game = response.game})

}

const onSignInFailure = function() {
    $('#auth-status').html('<p>There was an error signing in.<br>Try again!</p>')
    $('#sign-in').show()
    $('#sign-out').hide()
    $('#games').hide()
}

const onChangePWSuccess = function() {
    $('#auth-status').html('<p>Password Successfully Changed!</p>')
    $('form').trigger('reset')
}

const onChangePWFailure = function() {
    $('#auth-status').html('<p>Error.<br>Try again!</p>')
}

const onSignOutSuccess = function() {
    $('#auth-status').html('<p>Signed Out Successfully !</p>')
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