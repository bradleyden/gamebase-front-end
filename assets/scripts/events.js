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
    .then(api.getAllGames)
        .then(ui.loadGamesSuccess)
        .catch(ui.loadGamesFailure)
  $('.playthrough-content').show()
  $('#library').show()
  $(document).on('submit', '.delete-game', onDeleteGame)
  $(document).on('submit', '.add-playthrough', onCreatePlaythrough)
  $(document).on('submit', '.show-playthroughs', onShowPlaythroughs)
  $(document).on('click', '.update-game-button', openEditGameModal)
  $(document).on('click', '.add-playthrough-prompt', showNewPlaythroughForm)
}

const showNewPlaythroughForm = function () {
  $('.add-playthrough').show()
  $(document).on('click', '.close-new-playthrough', hideNewPlaythroughForm)
}

const hideNewPlaythroughForm = function () {
  $('.add-playthrough').hide()
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
  $(document).on('submit', '.delete-game', onDeleteGame)
  $(document).on('submit', '.add-playthrough', onCreatePlaythrough)
  $(document).on('submit', '.show-playthroughs', onShowPlaythroughs)
  $('#library').show()
}

const openEditGameModal = function (event) {
  $('#updateGameModal').modal('show')
  fillGameValues(event)
}

const fillGameValues = function (event) {
  $('#update-game-id').val($(event.target).data('id'))
  $('#update-game-title').val($(event.target).data('title'))
  $('#update-game-genre').val($(event.target).data('genre'))
  $('#update-game-platform').val($(event.target).data('platform'))
  $('#update-game-release').val($(event.target).data('release'))
  $('#update-game-developer').val($(event.target).data('developer'))
  $('#update-game-publisher').val($(event.target).data('publisher'))
  $('#update-game-playtime').val($(event.target).data('playtime'))
}

const onShowGame = function (event) {
  event.preventDefault()
  api.getGame()
     .then(ui.loadGameSuccess)
     .catch(ui.loadGameFailure)
}

const onShowPlaythroughs = function (event) {
  document.getElementsByClassName('playthrough-content')[0].id = $(event.target).data('id')
  event.preventDefault()
  api.getPlaythroughs()
     .then(ui.showPlaythroughsSuccess)
     .catch(ui.showPlaythroughsFailure)
  $(document).on('click', '.playthrough-update-button', onUpdatePlaythroughPrompt)
  $(document).on('submit', '.playthrough-delete', onDeletePlaythrough)
}

const onCreateGame = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.createGame(data)
     .then(ui.createGameSuccess)
     .catch(ui.createGameFailure)
}

const onCreatePlaythrough = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  $('.add-playthrough').hide()
  api.createPlaythrough(data)
     .then(ui.createPlaythroughSuccess)
     .catch(ui.createPlaythroughFailure)
}

const onUpdateGame = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.updateGame(data)
     .then(ui.updateGameSuccess)
     .catch(ui.updateGameFailure)
}

const onUpdatePlaythrough = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  api.updatePlaythrough(data)
     .then(ui.updatePlaythroughSuccess)
     .catch(ui.updatePlaythroughFailure)
}

const onUpdatePlaythroughPrompt = function (event) {
  $('#updatePlaythroughModal').modal('show')
  $('#update-playthrough-id').val($(event.target).data('id'))
  $('#update-playthrough-completion').val($(event.target).data('completion'))
  $('#update-playthrough-time').val($(event.target).data('time'))
  $('#update-playthrough-start').val($(event.target).data('start'))
  $('#update-playthrough-finish').val($(event.target).data('finish'))
  $(document).on('submit', '#update-playthrough', onUpdatePlaythrough)
}

const onDeleteGame = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  api.deleteGame(data)
     .then(ui.deleteGameSuccess)
     .catch(ui.deleteGameFailure)
     .then(api.getAllGames)
        .then(ui.loadGamesSuccess)
        .catch(ui.loadGamesFailure)
}

const onDeletePlaythrough = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.deletePlaythrough(data)
    .then(ui.deletePlaythroughSuccess)
    .catch(ui.deletePlaythroughFailure)
}

$(() => {
  $('#lib-wrapper').hide()
  $('#hide-lib').hide()
  $('.logged-in').hide()
  $('#library').hide()
  $('.playthrough-content').hide()
})

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-pw').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#index-games').on('submit', onShowGames)
  $('#show-game').on('submit', onShowGame)
  $('#create-game').on('submit', onCreateGame)
  $('#update-game').on('submit', onUpdateGame)
}

module.exports = {
  addHandlers
}
