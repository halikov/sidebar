'use strict';

let burger = document.querySelector('.sidebar__burger');
let sidebar = document.querySelector('.sidebar');
let themeDot = document.querySelector('.theme__input');
let label = document.querySelector('.theme');
let pageBody = document.querySelector('body');

burger.addEventListener('click', (ev) => {
  ev.preventDefault();
  sidebar.classList.toggle('active');
});

function themeSwitcher () {
  
  label.addEventListener('click', () => {
    if(themeDot.checked) {
      pageBody.classList.add('dark-mode');
    } else {
      pageBody.classList.remove('dark-mode');
    }
  });

};

label.addEventListener('click', () => {
  themeSwitcher();
})

