const animeApi = require('./api')
const animeUi = require('./ui')
const getFormFields = require('../../lib/get-form-fields')

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

    animeApi.updateAnime(id, title, description)
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

// const onDynUpBtn = () => {
//     $('.dynamic-anime-update-form').show()
//     $('.dynamic-anime-update-btn').hide()
// }

const onDynamicUpdateAnime = (e) => {
    e.preventDefault()
    
    // onDynUpBtn()

    const dynUpdate = e.target
    const id = $(dynUpdate).data('id')

    const data = getFormFields(e.target)
    const title = data.anime.title
    const description = data.anime.description

    animeApi.updateAnime(id, title, description)
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
    onDynamicDeleteAnime
}