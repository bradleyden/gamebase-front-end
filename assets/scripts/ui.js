'use strict'

const store = require('./store')
const events = require('./events')
const showGamesTemplate = require('./templates/game-listing.handlebars')
const showPlaythroughsTemplate = require('./templates/playthrough-listing.handlebars')

const signUpSuccess = (data) => {
  $('#signUpModal').modal('hide')
  $('.text-field').val('')
}
const signUpFailure = () => {
  $('.signUpError').text('Oops! Something went wrong! Please try again!').fadeIn('fast')
  $('.signUpError').delay(3000).fadeOut('slow')
}

const signInSuccess = (data) => {
  store.user = data.user
  $('.logged-out').hide()
  $('.logged-in').show()
  $('.greeting').text('Hello, ' + data.user.email)
  $('#create-game').show(400)
  $('.instructions').text('Start a new game!')
  $('.error').text('')
  $('.text-field').val('')
}

const signInFailure = () => {
  $('.signInError').text('Oops! Something went wrong! Please check your username and password and try again!').fadeIn('fast')
  $('.signInError').delay(3000).fadeOut('slow')
}

const changePasswordSuccess = (data) => {
  $('#changePwModal').modal('hide')
  $('.text-field').val('')
}

const changePasswordFailure = () => {
  $('.changePwError').text('Oops! Something went wrong! Please try again!').fadeIn('fast')
  $('.changePwError').delay(3000).fadeOut('slow')
}

const signOutSuccess = (data) => {
  $('#create-game').hide()
  $('.logged-in').hide()
  $('.logged-out').show()
  $('#game-board').hide()
  $('.instructions').text('Welcome to Tic-Tac-Toe! Please sign in or sign up to start playing!')
}

const signOutFailure = (eror) => {
}

const createGameSuccess = (data) => {
  console.log(data)
  $('#addGameModal').modal('hide')
  const showGamesHtml = showGamesTemplate({ games: data.games })
  $('#library tbody').empty()
  $('#library').DataTable().destroy()
  $('#library tbody').append(showGamesHtml)
  loadGamesSuccess(data)
}

const createGameFailure = () => {
}

const createPlaythroughSuccess = (data) => {
  console.log('Success!')
}

const createPlaythroughFailure = () => {
}

const showPlaythroughsSuccess = (data) => {
  const filteredData = data.playthroughs.filter(function (item) {
    console.log(item.game_id)
    return item.game_id == document.getElementsByClassName('playthrough-content')[0].id
  })
  console.log(filteredData)
  console.log(document.getElementsByClassName('playthrough-content')[0].id)
  const showPlaythroughsHtml = showPlaythroughsTemplate({ playthroughs: filteredData })
  $('.playthrough-content').html(showPlaythroughsHtml)
}

const showPlaythroughsFailure = () => {
}

const loadGamesSuccess = (data) => {
  console.log(data)
  const showGamesHtml = showGamesTemplate({ games: data.games })
  $('#library tbody').empty()
  $('#library tbody').append(showGamesHtml)
  $('#library').show()
  $('#library').DataTable()
}

const loadGamesFailure = () => {
}

const loadGameSuccess = (data) => {
  console.log(data)
}

const loadGameFailure = () => {
}

const updateGameSuccess = (data) => {
  console.log('updatedata: ' + data)
  $('#updateGameModal').modal('hide')
  loadGamesSuccess(data)
}

const updateGameFailure = () => {
}

const deleteGameSuccess = (data) => {
  console.log(data)
  const showGamesHtml = showGamesTemplate({ games: data.games })
  $('#library tbody').empty()
  $('#library').DataTable().destroy()
  $('#library tbody').append(showGamesHtml)
  // $('#library').DataTable().draw()
}

const deleteGameFailure = () => {
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createGameSuccess,
  createGameFailure,
  loadGamesSuccess,
  loadGamesFailure,
  updateGameSuccess,
  updateGameFailure,
  loadGameSuccess,
  loadGameFailure,
  deleteGameSuccess,
  deleteGameFailure,
  createPlaythroughSuccess,
  createPlaythroughFailure,
  showPlaythroughsSuccess,
  showPlaythroughsFailure
}
