// const { config } = require("grunt")

// const config = require('./../config')

const createAnime = (data) => {
    console.log(data)
    return $.ajax({
        method: 'POST',
        url: config.apiUrl + '/anime',
        data: data
    })
}

const indexAnime = () => {
    return $.ajax({
        method: 'GET',
        url: config.apiUrl + '/anime'
    })
}

const showAnime = (id) => {
    return $.ajax({
        method: 'GET',
        url: config.apiUrl + '/anime/' + id
    })
}

const updateAnime = (data, id) => {
    return $.ajax({
        method: 'PATCH',
        url: config.apiUrl + '/anime/' + id,
        data: data
    })
}

const deleteAnime = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: config.apiUrl + '/anime/' + id
    })
}

module.exports = {
    createAnime,
    indexAnime,
    showAnime,
    updateAnime,
    deleteAnime
}
// npx kill-port 4741 - if app crashes

// single resourse
// relationships
// adding authorization