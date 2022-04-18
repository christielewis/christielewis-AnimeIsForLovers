
const config = require('../config')
const store = require('../store')

const createAnime = (data) => {
    // console.log(data)
    // console.log(store)

    return $.ajax({
        method: 'POST',
        url: config.apiUrl + '/anime',
        data: data,
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

const miniIndexAnime = () => {
    return $.ajax({
        method: 'GET',
        url: config.apiUrl + '/anime',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

const indexAnime = () => {
    return $.ajax({
        method: 'GET',
        url: config.apiUrl + '/anime',
        headers: {
            Authorization: 'Bearer ' + store.user.token

        }
    })
}

const showAnime = (id) => {
    return $.ajax({
        method: 'GET',
        url: config.apiUrl + '/anime/' + id,
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

const updateAnime = (id, title, description, season, episode) => {
    // console.log(store)
    return $.ajax({
        method: 'PATCH',
        url: config.apiUrl + '/anime/' + id,
        data: {
            "anime": {
                "title": title,
                "description": description,
                "season": season,
                "episode": episode,
            }
        },
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

const deleteAnime = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: config.apiUrl + '/anime/' + id,
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

module.exports = {
    createAnime,
    indexAnime,
    miniIndexAnime,
    showAnime,
    updateAnime,
    deleteAnime
}
// npx kill-port 4741 - if app crashes

// single resourse
// relationships
// adding authorization