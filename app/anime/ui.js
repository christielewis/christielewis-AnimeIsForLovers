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
        $('#err-msg').html('')
        $('#err-msg').removeClass('success')
    }, 4000)
    
    // reset all forms
    $('form').trigger('reset')

}

const onIndexSuccess = (data) => {
    console.log(data)
    const anime = data.anime

    let animeHtml = ''

    anime.forEach(anime => {
        animeHtml += `
            <h3>Title: ${anime.title}</h3>
            <h5>ID: ${anime._id}</h5>
            <p>Description: ${anime.description}</p>
            <form class="dynamic-anime-update" data-id=${anime._id}>
                <input type="text" name="anime[title]" placeholder="Anime Title Here" required>
                <input type="text" name="anime[description]" placeholder="Enter a brief desctiption" required>
                <button type="submit">Update Anime</button>
            </form>
            <button class="dynamic-anime-delete" data-id=${anime._id}>Delete Anime</button>
        `
    })
    
    $('#anime-display').html(animeHtml)
}

const onShowSuccess = () => {

    setTimeout(() => {
        $('#err-msg').html('')
        $('#err-msg').removeClass('success')
    }, 4000)
    
    // reset all forms
    $('form').trigger('reset')
}

const onUpdateSuccess = () => {

    setTimeout(() => {
        $('#err-msg').html('')
        $('#err-msg').removeClass('success')
    }, 4000)
    
    // reset all forms
    $('form').trigger('reset')
}

const onDeleteSuccess = () => {


    setTimeout(() => {
        $('#err-msg').html('')
        $('#err-msg').removeClass('success')
    }, 4000)
    
    // reset all forms
    $('form').trigger('reset')
}


module.exports = {
    onError,
    onCreateSuccess,
    onIndexSuccess,
    onShowSuccess,
    onUpdateSuccess,
    onDeleteSuccess
}