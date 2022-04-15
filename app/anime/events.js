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

    animeApi.updateAnime(id, data)
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

module.exports = {
    onCreateAnime,
    onIndexAnime,
    onShowAnime,
    onUpdateAnime,
    onDeleteAnime
}