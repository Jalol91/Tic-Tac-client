// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')


const Events = require('./auth/events.js')

$(() => {

  $('#sign_up').on('submit',Events.onSignUp)
  $('#sign_in').on('submit', Events.onSignIn)
    // $('.box').on('click',Events.boxClick)
    $('.sign_out').on('click',Events.onSignOut)
    $('#begin-game').on('click',Events.newGame)
    $('#display_2').hide()




})
