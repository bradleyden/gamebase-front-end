'use strict'

const getFormFields = require(`../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onShowGames = function (event) {
  event.preventDefault()
  api.getAllGames()
     .then(ui.loadGamesSuccess)
     .catch(ui.loadGamesFailure)
}
// const onNewGame = function (event) {
//   event.preventDefault()
//   api.createGame()
//     .then(ui.createGameSuccess)
//     .catch(ui.createGameFailure)
//   api.getAllGames()
//     .then(ui.loadGamesSuccess)
//     .catch(ui.loadGamesFailure)
//   engine.resetGame()
// }
//
// const onLoadGames = function (event) {
//   event.preventDefault()
//   api.getAllGames()
//     .then(ui.loadGamesSuccess)
//     .catch(ui.loadGamesFailure)
// }
//
// const onUpdateGame = function (event) {
//   event.preventDefault()
//   api.updateGame()
//   .then(ui.updateGameSuccess)
//   .catch(ui.updateGameFailure)
// }

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-pw').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#index').on('submit', onShowGames)
}

module.exports = {
  addHandlers
}
