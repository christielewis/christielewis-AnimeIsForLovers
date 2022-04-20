const animeApi = require('./api')
const animeUi = require('./ui')
const getFormFields = require('../../lib/get-form-fields')

const onCreateAnimeBtn = () => {
    // FORMS //
    $('#create-anime').show()
    $('#show-anime').hide()
    $('#update-anime').hide()
    $('#delete-anime').hide()

    // BUTTONS //
    $('#sign-out').show()
    $('#home-btn').show()
    $('#change-pw-btn').show()
    $('#anime-idx').show()
    $('#anime-add-btn').hide()
    $('#anime-show-btn').show()
    $('#anime-delete-btn').show()
    $('#anime-update-btn').show()

    $('#auth-status').html('')
    $('#err-msg').html('')
    $('#anime-display').html('')
}
const onShowAnimeBtn = () => {
    // FORMS //
    $('#create-anime').hide()
    $('#show-anime').show()
    $('#update-anime').hide()
    $('#delete-anime').hide()

    // BUTTONS //
    $('#sign-out').show()
    $('#home-btn').show()
    $('#change-pw-btn').show()
    $('#anime-idx').show()
    $('#anime-add-btn').show()
    $('#anime-show-btn').hide()
    $('#anime-delete-btn').show()
    $('#anime-update-btn').show()


    $('#auth-status').html('')
    $('#err-msg').html('')
    $('#anime-display').html('')

    animeApi.miniIndexAnime()
        .then(animeUi.onMiniIdxSuccess)
        .catch(animeUi.onError)
}

const onUpdateAnimeBtn = () => {
    // FORMS //
    $('#create-anime').hide()
    $('#show-anime').hide()
    $('#update-anime').show()
    $('#delete-anime').hide()

    // BUTTONS //
    $('#sign-out').show()
    $('#home-btn').show()
    $('#change-pw-btn').show()
    $('#anime-idx').show()
    $('#anime-add-btn').show()
    $('#anime-show-btn').show()
    $('#anime-delete-btn').show()
    $('#anime-update-btn').hide()
    
    $('#auth-status').html('')
    $('#err-msg').html('')
    $('#anime-display').html('')

    animeApi.miniIndexAnime()
        .then(animeUi.onMiniIdxSuccess)
        .catch(animeUi.onError)
}

const onDeleteAnimeBtn = () => {
    // FORMS //
    $('#create-anime').hide()
    $('#show-anime').hide()
    $('#update-anime').hide()
    $('#delete-anime').show()

    // BUTTONS //
    $('#sign-out').show()
    $('#home-btn').show()
    $('#change-pw-btn').show()
    $('#anime-idx').show()
    $('#anime-add-btn').show()
    $('#anime-show-btn').show()
    $('#anime-delete-btn').hide()
    $('#anime-update-btn').show()

    $('#auth-status').html('')
    $('#err-msg').html('')
    $('#anime-display').html('')

    animeApi.miniIndexAnime()
        .then(animeUi.onMiniIdxSuccess)
        .catch(animeUi.onError)
}


const onCreateAnime = (e) => {
    e.preventDefault()

    const data = getFormFields(e.target)

    animeApi.createAnime(data)
        .then(animeUi.onCreateSuccess)
        .catch(animeUi.onError)
}

const onIndexAnime = () => {
    animeApi.indexAnime()
        .then(animeUi.onIndexSuccess)
        .catch(animeUi.onError)
}

const onShowAnime = (e) => {
    e.preventDefault()

    const data = getFormFields(e.target)

    animeApi.showAnime(data.anime.id)
        .then(animeUi.onShowSuccess)
        .catch(animeUi.onError)
}

const onUpdateAnime = (e) => {
    e.preventDefault()

    const data = getFormFields(e.target)
    const id = data.anime.id
    const title = data.anime.title
    const description = data.anime.description
    const season = data.anime.season
    const episode = data.anime.episode

    animeApi.updateAnime(id, title, description, season, episode)
        .then(animeUi.onUpdateSuccess)
        .catch(animeUi.onError)
}

const onDeleteAnime = (e) => {
    e.preventDefault()

    const data = getFormFields(e.target)

    animeApi.deleteAnime(data.anime.id)
        .then(animeUi.onDeleteSuccess)
        .catch(animeUi.onError)
}

const onDynamicUpdateAnime = (e) => {
    e.preventDefault()
    
    // onDynUpBtn()

    const dynUpdate = e.target
    const id = $(dynUpdate).data('id')

    const data = getFormFields(e.target)
    const title = data.anime.title
    const description = data.anime.description
    const season = data.anime.season
    const episode = data.anime.episode
    
    animeApi.updateAnime(id, title, description, season, episode)
        .then(animeUi.onUpdateSuccess)
        .catch(animeUi.onError)
}

const onDynamicDeleteAnime = (e) => {
    const deleteBtn = e.target
    const id = $(deleteBtn).data('id')

    animeApi.deleteAnime(id)
        .then(animeUi.onDeleteSuccess)
        .catch(animeUi.onError)
}

module.exports = {
    onCreateAnime,
    onIndexAnime,
    onShowAnime,
    onUpdateAnime,
    onDeleteAnime,
    onDynamicUpdateAnime,
    onDynamicDeleteAnime,
    onCreateAnimeBtn,
    onUpdateAnimeBtn,
    onDeleteAnimeBtn,
    onShowAnimeBtn
}