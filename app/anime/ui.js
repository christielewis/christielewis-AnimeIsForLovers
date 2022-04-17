const onError = (err) => {
    console.error(err)

    // display error message to inform user of an error in user action
    $('#err-msg').html('Something went wrong. Please try again.')
    $('#err-msg').addClass('failure')

    // set a 4 second timer to "clear" the error message and remove the 'failure' class 
    setTimeout(() => {
        $('#err-msg').html('')
        $('#err-msg').removeClass('failure')
    }, 4000)

    // reset all forms
    $('form').trigger('reset')
}

const onCreateSuccess = () => {
    $('#anime-create-msg').html('<h4>You added an anime!</h4>')
    $('#anime-create-msg').addClass('success')

    // set a 4 second timer to "clear" the message and remove the 'success' class 
    setTimeout(() => {
        $('#anime-create-msg').html('')
        $('#anime-create-msg').removeClass('success')
    }, 4000)
    
    // reset all forms
    $('form').trigger('reset')

}

const onMiniIdxSuccess = (data) => {
    const anime = data.anime
    let animeHtml = ''

    anime.forEach(anime => {
        animeHtml += `
            <p>Title: ${anime.title} | ID: ${anime._id}</p>
        `
    })

    $('#anime-display').html(animeHtml)
}

const onIndexSuccess = (data) => {
    const anime = data.anime
    console.log(data)

    let animeHtml = ''

    anime.forEach(anime => {
        animeHtml += `
            <h3>Title: ${anime.title}</h3>
            <p>ID: ${anime._id}</p>
            <p>Description: ${anime.description}</p>
            <p>Season: ${anime.season}</p>
            <p>Episode: ${anime.episode}</p>
            <form class="dynamic-anime-update" data-id=${anime._id}>
                <input type="text" name="anime[title]" placeholder="Anime Title Here" required>
                <input type="text" name="anime[description]" placeholder="Enter a brief desctiption" required>
                <input type="number" name="anime[season]" placeholder="Season" required>
                <input type="number" name="anime[episode]" placeholder="Episode" required>
                <button type="submit">Update Anime</button>
            </form>
            <button class="dynamic-anime-delete" data-id=${anime._id}>Delete</button>
        `
    })
    
    $('#anime-display').html(animeHtml)

    $('#create-anime').hide()
    $('#show-anime').hide()
    $('#update-anime').hide()
    $('#delete-anime').hide()

    $('#home-btn').show()
    $('#change-pw-btn').show()
    $('#anime-add-btn').show()
    $('#anime-idx').show()
    $('#anime-show-btn').hide()
    $('#anime-delete-btn').hide()
    $('#anime-update-btn').hide()
}

const onShowSuccess = (data) => {
    console.log(data)

    const animeHtml = `
        <h3>Title: ${data.anime.title}</h3>
        <p>ID: ${data.anime._id}</p>
        <p>Description: ${data.anime.description}</>
        <p>Season: ${data.anime.season}</p>
        <p>Episode: ${data.anime.episode}</p>
        <form class="dynamic-anime-update" data-id=${data.anime._id}>
            <input type="text" name="anime[title]" placeholder="Anime Title Here" required>
            <input type="text" name="anime[description]" placeholder="Enter a brief desctiption" required>
            <input type="number" name="anime[season]" placeholder="Season" required>
            <input type="number" name="anime[episode]" placeholder="Episode" required>
            <button type="submit">Update Anime</button>
        </form>
        <button class="dynamic-anime-delete" data-id=${data.anime._id}>Delete Anime</button>
        <div id="anime-dyn-msg"></div>
    `

    $('#anime-display').html(animeHtml)

    $('#anime-show-btn').show()
    
    $('#create-anime').hide()
    $('#show-anime').hide()
    $('#update-anime').hide()
    $('#delete-anime').hide()
    $('#home-btn').show()
    
    // reset all forms
    $('form').trigger('reset')
}

const onUpdateSuccess = () => {

    $('#anime-update-msg').html('Anime updated successfully!')
    $('#anime-dyn-msg').html('Anime updated successfully!')
    $('#anime-update-msg').addClass('success')

    // $('anime-idx').show()


    setTimeout(() => {
        $('#anime-update-msg').html('')
        $('#anime-dyn-update-msg').html('')
        $('#anime-update-msg').removeClass('success')
    }, 4000)
    
    // reset all forms
    $('form').trigger('reset')

    $('#anime-update-btn').show()

    // $('#home-btn').show()
}

const onDeleteSuccess = () => {
    $('#anime-delete-msg').html('Anime deleted successfully!')
    $('#anime-dyn-msg').html('Anime deleted successfully!')
    $('#anime-delete-msg').addClass('success')

    // $('anime-idx').show()
    $('#anime-delete-btn').show()


    setTimeout(() => {
        $('#anime-delete-msg').html('')
        $('#anime-dyn-msg').html('')
        $('#anime-delete-msg').removeClass('success')
    }, 4000)
    
    // reset all forms
    $('form').trigger('reset')

    // $('#home-btn').show()
}


module.exports = {
    onError,
    onCreateSuccess,
    onIndexSuccess,
    onMiniIdxSuccess,
    onShowSuccess,
    onUpdateSuccess,
    onDeleteSuccess
}