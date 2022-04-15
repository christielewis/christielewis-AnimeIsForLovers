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
const onIndexSuccess = () => {}
const onShowSuccess = () => {}
const onUpdateSuccess = () => {}
const onDeleteSuccess = () => {}


module.exports = {
    onError,
    onCreateSuccess,
    onIndexSuccess,
    onShowSuccess,
    onUpdateSuccess,
    onDeleteSuccess
}