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

const onIndexSuccess = (data) => {
    const anime = data.anime
    console.log(data)

    let animeHtml = ''

    anime.forEach(anime => {
        animeHtml += `
            <h3>Title: ${anime.title}</h3>
            <p>ID: ${anime._id}</p>
            <p>Description: ${anime.description}</p>
            <form class="dynamic-anime-update" data-id=${anime._id}>
                <input type="text" name="anime[title]" placeholder="Anime Title Here" required>
                <input type="text" name="anime[description]" placeholder="Enter a brief desctiption" required>
                <button type="submit">Update Anime</button>
            </form>
            <button class="dynamic-anime-delete" data-id=${anime._id}>Delete</button>
        `
    })
    
    $('#anime-display').html(animeHtml)

    $('#create-anime').hide()
    // $('#idx-anime').hide()
    $('#show-anime').hide()
    $('#update-anime').hide()
    $('#delete-anime').hide()
    $('#home-btn').show()
}

const onShowSuccess = (data) => {
    console.log(data)
    const animeHtml = `
        <h3>Title: ${data.anime.title}</h3>
        <p>ID: ${data.anime._id}</p>
        <p>Description: ${data.anime.description}</>
        <form class="dynamic-anime-update" data-id=${data.anime._id}>
            <input type="text" name="anime[title]" placeholder="Anime Title Here" required>
            <input type="text" name="anime[description]" placeholder="Enter a brief desctiption" required>
            <button type="submit">Update Anime</button>
        </form>
        <button class="dynamic-anime-delete" data-id=${data.anime._id}>Delete Anime</button>
    `
    $('#anime-display').html(animeHtml)

    // reset all forms
    $('form').trigger('reset')

    $('#create-anime').hide()
    $('#idx-anime').hide()
    // $('#show-anime').hide()
    $('#update-anime').hide()
    $('#delete-anime').hide()
    $('#home-btn').show()
}

const onUpdateSuccess = () => {

    $('#anime-update-msg').html('Anime updated successfully!')
    $('#anime-update-msg').addClass('success')


    setTimeout(() => {
        $('#anime-update-msg').html('')
        $('#anime-update-msg').removeClass('success')
    }, 4000)
    
    // reset all forms
    $('form').trigger('reset')

    $('#home-btn').show()
}

const onDeleteSuccess = () => {
    $('#anime-delete-msg').html('Anime deleted successfully!')
    $('#anime-delete-msg').addClass('success')


    setTimeout(() => {
        $('#anime-delete-msg').html('')
        $('#anime-delete-msg').removeClass('success')
    }, 4000)
    
    // reset all forms
    $('form').trigger('reset')

    $('#home-btn').show()
}


module.exports = {
    onError,
    onCreateSuccess,
    onIndexSuccess,
    onShowSuccess,
    onUpdateSuccess,
    onDeleteSuccess
}