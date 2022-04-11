// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#welcome-sign-up').on('click', authEvents.onWelcomeSignUp)
  $('#welcome-sign-in').on('click', authEvents.onWelcomeSignIn)

  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-pw-form').on('submit', authEvents.onChangePW)

})
