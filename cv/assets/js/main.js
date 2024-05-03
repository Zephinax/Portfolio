document.addEventListener('DOMContentLoaded', function () {
  // Variables
  var toggleDarkModeBtn,
    moonIcon,
    sunIcon,
    mobileMenu,
    closeIcon,
    menuIcon,
    btn,
    modals,
    closeBtns;

  toggleDarkModeBtn = document.querySelector('#toggleDarkMode');
  moonIcon = document.querySelector('#moonIcon');
  sunIcon = document.querySelector('#sunIcon');
  mobileMenu = document.querySelector('#mobileMenu');
  toggleMenuBtn = document.querySelector('#toggleMenu');
  closeIcon = document.querySelector('#closeIcon');
  menuIcon = document.querySelector('#menuIcon');
  btn = document.querySelectorAll('.btn-modal');
  modals = document.querySelectorAll('.modal');
  closeBtns = document.querySelectorAll('.btn-close');

  // Methods
  function toggleDarkMode() {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      moonIcon.style.display = 'block';
      sunIcon.style.display = 'none';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }
  }

  function toggleMenu() {
    if (toggleMenuBtn.dataset.toggle == 'false') {
      toggleMenuBtn.dataset.toggle = true;
      mobileMenu.style.display = 'block';
      menuIcon.style.display = 'none';
      closeIcon.style.display = 'flex';
    } else {
      toggleMenuBtn.dataset.toggle = false;
      mobileMenu.style.display = 'none';
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    }
  }

  function keyShortcuts(e) {
    switch (e.key.toLowerCase()) {
      case 'n':
        toggleDarkMode();
        break;
      default:
        break;
    }
  }

  // Initializes & Event Listerner
  if (localStorage.theme === 'dark') {
    sunIcon.style.display = 'block';
  } else {
    moonIcon.style.display = 'block';
  }

  toggleDarkModeBtn.addEventListener('click', toggleDarkMode);
  toggleMenuBtn.addEventListener('click', toggleMenu);
  window.addEventListener('keydown', keyShortcuts);

  for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function (e) {
      e.preventDefault();
      var modal = document.querySelector(e.target.getAttribute('data-href'));
      modal.style.display = 'block';
    };
  }

  for (var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].onclick = function () {
      for (var index in modals) {
        if (typeof modals[index].style !== 'undefined')
          modals[index].style.display = 'none';
      }
    };
  }

  window.onclick = function (e) {
    if (e.target.classList.contains('modal-area')) {
      for (var index in modals) {
        if (typeof modals[index].style !== 'undefined')
          modals[index].style.display = 'none';
      }
    }
  };
});
