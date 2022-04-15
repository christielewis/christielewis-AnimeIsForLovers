const animeApi = require('./api')
const animeUi = require('./ui')
const getFormFields = require('../../lib/get-form-fields')

const onCreateAnime = (e) => {
    e.preventDefault()

    const data = getFormFields(e.target)
    
    animeApi.create(data)
        .then(animeUi.onCreateSuccess)
        .catch(animeUi.onError)
}

const onIndexAnime = () => {

}

const onShowAnime = () => {

}
const onUpdateAnime = () => {

}

const onDeleteAnime = () => {

}

module.exports = {
    onCreateAnime,
    onIndexAnime,
    onShowAnime,
    onUpdateAnime,
    onDeleteAnime
}