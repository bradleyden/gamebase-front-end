'use strict'

const store = require('./store')

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
}

const getCurrentGame = function () {
}

const createGameFailure = () => {
}

const loadGamesSuccess = (data) => {
  console.log(data)
}

const loadGamesFailure = () => {
}

const updateGameSuccess = (data) => {
}

const updateGameFailure = () => {
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
  getCurrentGame
}
