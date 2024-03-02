'use strict';

const elemToggleFunc = function (elem) {
  elem.classList.toggle('active');
};

const header = document.querySelector('[data-header]');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 10) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});

const navToggleBtn = document.querySelector('[data-nav-toggle-btn]');
const navbar = document.querySelector('[data-navbar]');

function toggleNav() {
  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);
}

const toggleBtnBox = document.querySelector('[data-toggle-box]');
const toggleBtns = document.querySelectorAll('[data-toggle-btn]');
const skillsBox = document.querySelector('[data-skills-box]');

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener('click', () => {
    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) {
      elemToggleFunc(toggleBtns[i]);
    }
    elemToggleFunc(skillsBox);
  });
}

const themeToggleBtn = document.querySelector('[data-theme-btn]');

themeToggleBtn.addEventListener('click', () => {
  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains('active')) {
    document.body.classList.remove('dark_theme');
    document.body.classList.add('light_theme');

    localStorage.setItem('theme', 'light_theme');
  } else {
    document.body.classList.add('dark_theme');
    document.body.classList.remove('light_theme');

    localStorage.setItem('theme', 'dark_theme');
  }
});

if (localStorage.getItem('theme') === 'light_theme') {
  themeToggleBtn.classList.add('active');
  document.body.classList.remove('dark_theme');
  document.body.classList.add('light_theme');
} else {
  themeToggleBtn.classList.remove('active');
  document.body.classList.remove('light_theme');
  document.body.classList.add('dark_theme');
}

function subFrm() {
  const frm = document.getElementById('contactForm');
  setTimeout(() => {
    frm.reset();
    return false;
  }, 3000);
}
