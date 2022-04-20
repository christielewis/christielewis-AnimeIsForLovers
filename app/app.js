const authEvents = require('./auth/events')
const animeEvents = require('./anime/events')

$(() => {
  // BUTTONS //
  $('#home-pg').hide()
  $('#home-btn').hide()
  $('#change-pw-btn').hide()
  
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-pw').hide()
  $('#sign-out').hide()
  
  
  $('#home-btn').on('click', authEvents.onHomeBtn)
  $('#change-pw-btn').on('click', authEvents.onChangePwBtn)
  
  $('#welcome-sign-up').on('click', authEvents.onWelcomeSignUp)
  $('#welcome-sign-in').on('click', authEvents.onWelcomeSignIn)
  
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out-btn').on('click', authEvents.onSignOut)
  $('#change-pw-form').on('submit', authEvents.onChangePW)
  
  // ///////// ANIME EVENT LISTENERS /////////////
  
  $('#anime-add-btn').hide()
  $('#anime-idx').hide()
  $('#anime-show-btn').hide()
  $('#anime-delete-btn').hide()
  $('#anime-update-btn').hide()
  
  $('#create-anime').hide()
  $('#anime-idx').hide()
  $('#show-anime').hide()
  $('#update-anime').hide()
  $('#delete-anime').hide()
  
  $('#anime-add-btn').on('click', animeEvents.onCreateAnimeBtn)
  $('#anime-show-btn').on('click', animeEvents.onShowAnimeBtn)
  $('#anime-update-btn').on('click', animeEvents.onUpdateAnimeBtn)
  $('#anime-delete-btn').on('click', animeEvents.onDeleteAnimeBtn)

  $('#anime-create').on('submit', animeEvents.onCreateAnime)
  $('#anime-idx').on('click', animeEvents.onIndexAnime)
  $('#anime-show').on('submit', animeEvents.onShowAnime)
  $('#anime-update').on('submit', animeEvents.onUpdateAnime)
  $('#anime-delete').on('submit', animeEvents.onDeleteAnime)

  $('#anime-display').on('submit', '.dynamic-anime-update', animeEvents.onDynamicUpdateAnime)
  $('#anime-display').on('click', '.dynamic-anime-delete', animeEvents.onDynamicDeleteAnime)
})
