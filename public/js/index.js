/* eslint-disable */
import '@babel/polyfill';
import { displayMap } from './mapbox';
import { login } from './login';
import { logout } from './logout';

const mapBox = document.getElementById('map');
const formLogin = document.querySelector('.form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const logOutBtn = document.querySelector('.nav__el--logout');

// DELEGATION
if (mapBox) {
  const locations = JSON.parse(mapBox.dataset.locations);
  displayMap(locations);
}

if (formLogin) {
  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    login(email.value, password.value);
  });
}

if (logOutBtn) {
  logOutBtn.addEventListener('click', logout);
}
