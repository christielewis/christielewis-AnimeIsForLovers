// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events')
const animeEvents = require('./anime/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-pw').hide()
  $('#sign-out').hide()
  $('#welcome-sign-up').on('click', authEvents.onWelcomeSignUp)
  $('#welcome-sign-in').on('click', authEvents.onWelcomeSignIn)

  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-pw-form').on('submit', authEvents.onChangePW)

  // ///////// ANIME EVENT LISTENERS /////////////

  $('#anime-create').on('submit', animeEvents.onCreateAnime)
  $('#anime-idx').on('click', animeEvents.onIndexAnime)
  $('#anime-show').on('submit', animeEvents.onShowAnime)
  $('#anime-update').on('submit', animeEvents.onUpdateAnime)
  $('#anime-delete').on('submit', animeEvents.onDeleteAnime)

  $('#anime-display').on('click', '.dynamic-anime-update', animeEvents.onDynamicUpdateAnime)
  $('#anime-display').on('submit', '.dynamic-anime-delete', animeEvents.onDynamicDeleteAnime)

})
