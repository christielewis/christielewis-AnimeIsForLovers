// const { config } = require("grunt")

const createAnime = function(data) {
    console.log(data)
    return $.ajax({
        method: 'POST',
        url: '<apiUrl>' + '/anime',
        data: data
    })
}

const indexAnime = function() {
    return $.ajax({
        method: 'GET',
        url: '<apiUrl>' + '/anime'
    })
}

const showAnime = function(data) {
    return $.ajax({
        method: 'GET',
        url: '<apiUrl>' + '/anime/' + data
    })
}

const updateAnime = function(data, id) {
    return $.ajax({
        method: 'PATCH',
        url: '<apiUrl>' + '/anime/' + id,
        data: data
    })
}

const deleteAnime = function(id) {
    return $.ajax({
        method: 'DELETE',
        url: '<apiUrl>' + '/anime/' + id
    })
}

module.exports = {
    createAnime,
    indexAnime,
    showAnime,
    updateAnime,
    deleteAnime
}
