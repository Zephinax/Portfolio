'use strict';
// const data = fetch('Languages.json')
//   .then((response) => response.json('/assets/Languages.json'))
//   .then((data) => {
//     return data;
//   })
//   .catch((error) => console.error('Error loading JSON file:', error));

// import data from 'Languages.json';

const fetchData = async () => {
  try {
    const response = await fetch('Languages.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading JSON file:', error);
  }
};

const selectElement = (id) => {
  return document.getElementById(id);
};

const elemToggleFunc = function (elem) {
  elem.classList.toggle('active');
};

const header = document.querySelector('[data-header]');
const navHome = selectElement('navHome');
const navAboutMe = selectElement('navAboutMe');
const navSkills = selectElement('navSkills');
const navGallery = selectElement('navGallery');
const navContact = selectElement('navContact');
const homeContent = selectElement('homeContent');
const homeBtn = selectElement('homeBtn');
const instaToolTip = selectElement('instaToolTip');
const teleToolTip = selectElement('teleToolTip');
const linkedToolTip = selectElement('linkedToolTip');
const aboutSubTitle = selectElement('aboutSubTitle');
const aboutTitle = selectElement('aboutTitle');
const aboutContent = selectElement('aboutContent');
const galleryBtn = selectElement('galleryBtn');
const downloadCvBtn = selectElement('downloadCvBtn');
const skillsSubTitle = selectElement('skillsSubTitle');
const skillsTitle = selectElement('skillsTitle');
const skillsContent = selectElement('skillsContent');
const skillsTool = selectElement('skillsTool');
const skillsSkill = selectElement('skillsSkill');
const skillsToggle = selectElement('skillsToogle');
const contactSubTitle = selectElement('contactSubTitle');
const contactTitle = selectElement('contactTitle');
const contactContent = selectElement('contactContent');
const contactList = selectElement('contactList');
const email = selectElement('email');
const linkedin = selectElement('linkedin');
const telins = selectElement('telins');
const github = selectElement('github');
const contactForm = selectElement('contactForm');
const nameLastName = selectElement('formNameLastName');
const nameInput = selectElement('name');
const formEmail = selectElement('formEmail');
const emailInput = selectElement('email');
const formNumber = selectElement('formNumber');
const formMassage = selectElement('formMassage');
const formMessageInput = selectElement('message');
const footerContent = selectElement('footerContent');
const languageOptions = selectElement('languageOptions');
const languageSelector = selectElement('lang');
const navList = selectElement('navList');
const body = selectElement('body');
const directionNeeded = [
  homeBtn,
  aboutTitle,
  aboutContent,
  skillsTitle,
  skillsContent,
  contactTitle,
  contactContent,
  contactList,
  contactForm,
  navList,
];

const toggleLanguage = (language) => {
  const data = fetchData().then((data) => {
    if (language == 'Fa') {
      directionNeeded.map((elem) => {
        elem.style.direction = 'rtl';
        elem.parentElement.style.flexDirection = 'row';
      });
      body.style.fontFamily = 'Vazir';
      homeBtn.parentElement.style.paddingBottom = '8px';
      galleryBtn.style.paddingBottom = '8px';
      downloadCvBtn.style.paddingBottom = '8px';
      skillsToggle.classList.remove('skill-toggle-english');
      skillsToggle.classList.remove('skill-toggle-germany');
      navHome.innerHTML = data.Fa.home;
      navAboutMe.innerHTML = data.Fa.aboutMe;
      navSkills.innerHTML = data.Fa.skills;
      navGallery.innerHTML = data.Fa.gallery;
      navContact.innerHTML = data.Fa.contact;
      homeContent.innerHTML = data.Fa.homeContent;
      homeBtn.innerHTML = data.Fa.contact;
      instaToolTip.innerHTML = data.Fa.instagram;
      teleToolTip.innerHTML = data.Fa.telegram;
      linkedToolTip.innerHTML = data.Fa.linkedin;
      aboutSubTitle.innerHTML = data.Fa.aboutMe;
      aboutTitle.innerHTML = data.Fa.aboutTitle;
      aboutContent.innerHTML = data.Fa.aboutContent;
      galleryBtn.innerHTML = data.Fa.gallery;
      downloadCvBtn.innerHTML = data.Fa.downloadCv;
      skillsSubTitle.innerHTML = data.Fa.skillsSubTitle;
      skillsTitle.innerHTML = data.Fa.skillsTitle;
      skillsContent.innerHTML = data.Fa.skillsContent;
      skillsTool.innerHTML = data.Fa.tools;
      skillsSkill.innerHTML = data.Fa.skills;
      contactSubTitle.innerHTML = data.Fa.contact;
      contactTitle.innerHTML = data.Fa.contactTitle;
      contactContent.innerHTML = data.Fa.contactContent;
      email.innerHTML = data.Fa.email;
      linkedin.innerHTML = data.Fa.linkedin;
      telins.innerHTML = `${data.Fa.telegram} & ${data.Fa.instagram}`;
      github.innerHTML = data.Fa.github;
      nameLastName.innerHTML = data.Fa.nameLastName;
      nameInput.placeholder = data.Fa.nameLastNamePlaceHolder;
      formEmail.innerHTML = data.Fa.email;
      emailInput.placeholder = data.Fa.emailPlaceHolder;
      formNumber.innerHTML = data.Fa.phoneNumber;
      formMassage.innerHTML = data.Fa.message;
      formMessageInput.placeholder = data.Fa.messagePlaceHolder;
      footerContent.innerHTML = data.Fa.footerContent;
    } else if (language == 'En') {
      directionNeeded.map((elem) => {
        elem.style.direction = 'ltr';
        elem.parentElement.style.flexDirection = 'row-reverse';
      });
      body.style.fontFamily = 'Ger';
      homeBtn.parentElement.style.paddingBottom = '6px';
      galleryBtn.style.paddingBottom = '6px';
      downloadCvBtn.style.paddingBottom = '6px';
      skillsToggle.classList.remove('skill-toggle-germany');
      skillsToggle.classList.add('skill-toggle-english');
      navHome.innerHTML = data.En.home;
      navAboutMe.innerHTML = data.En.aboutMe;
      navSkills.innerHTML = data.En.skills;
      navGallery.innerHTML = data.En.gallery;
      navContact.innerHTML = data.En.contact;
      homeContent.innerHTML = data.En.homeContent;
      homeBtn.innerHTML = data.En.contact;
      instaToolTip.innerHTML = data.En.instagram;
      teleToolTip.innerHTML = data.En.telegram;
      linkedToolTip.innerHTML = data.En.linkedin;
      aboutSubTitle.innerHTML = data.En.aboutMe;
      aboutTitle.innerHTML = data.En.aboutTitle;
      aboutContent.innerHTML = data.En.aboutContent;
      galleryBtn.innerHTML = data.En.gallery;
      downloadCvBtn.innerHTML = data.En.downloadCv;
      skillsSubTitle.innerHTML = data.En.skillsSubTitle;
      skillsTitle.innerHTML = data.En.skillsTitle;
      skillsContent.innerHTML = data.En.skillsContent;
      skillsTool.innerHTML = data.En.tools;
      skillsSkill.innerHTML = data.En.skills;
      contactSubTitle.innerHTML = data.En.contact;
      contactTitle.innerHTML = data.En.contactTitle;
      contactContent.innerHTML = data.En.contactContent;
      email.innerHTML = data.En.email;
      linkedin.innerHTML = data.En.linkedin;
      telins.innerHTML = `${data.En.telegram} & ${data.En.instagram}`;
      github.innerHTML = data.En.github;
      nameLastName.innerHTML = data.En.nameLastName;
      nameInput.placeholder = data.En.nameLastNamePlaceHolder;
      formEmail.innerHTML = data.En.email;
      emailInput.placeholder = data.En.emailPlaceHolder;
      formNumber.innerHTML = data.En.phoneNumber;
      formMassage.innerHTML = data.En.message;
      formMessageInput.placeholder = data.En.messagePlaceHolder;
      footerContent.innerHTML = data.En.footerContent;
    } else if (language == 'Ger') {
      directionNeeded.map((elem) => {
        elem.style.direction = 'ltr';
        elem.parentElement.style.flexDirection = 'row-reverse';
      });
      body.style.fontFamily = 'Ger';
      homeBtn.parentElement.style.paddingBottom = '6px';
      galleryBtn.style.paddingBottom = '6px';
      downloadCvBtn.style.paddingBottom = '6px';
      skillsToggle.classList.remove('skill-toggle-germany');
      skillsToggle.classList.add('skill-toggle-germany');
      navHome.innerHTML = data.Ger.home;
      navAboutMe.innerHTML = data.Ger.aboutMe;
      navSkills.innerHTML = data.Ger.skills;
      navGallery.innerHTML = data.Ger.gallery;
      navContact.innerHTML = data.Ger.contact;
      homeContent.innerHTML = data.Ger.homeContent;
      homeBtn.innerHTML = data.Ger.contact;
      instaToolTip.innerHTML = data.Ger.instagram;
      teleToolTip.innerHTML = data.Ger.telegram;
      linkedToolTip.innerHTML = data.Ger.linkedin;
      aboutSubTitle.innerHTML = data.Ger.aboutMe;
      aboutTitle.innerHTML = data.Ger.aboutTitle;
      aboutContent.innerHTML = data.Ger.aboutContent;
      galleryBtn.innerHTML = data.Ger.gallery;
      downloadCvBtn.innerHTML = data.Ger.downloadCv;
      skillsSubTitle.innerHTML = data.Ger.skillsSubTitle;
      skillsTitle.innerHTML = data.Ger.skillsTitle;
      skillsContent.innerHTML = data.Ger.skillsContent;
      skillsTool.innerHTML = data.Ger.tools;
      skillsSkill.innerHTML = data.Ger.skills;
      contactSubTitle.innerHTML = data.Ger.contact;
      contactTitle.innerHTML = data.Ger.contactTitle;
      contactContent.innerHTML = data.Ger.contactContent;
      email.innerHTML = data.Ger.email;
      linkedin.innerHTML = data.Ger.linkedin;
      telins.innerHTML = `${data.Ger.telegram} & ${data.Ger.instagram}`;
      github.innerHTML = data.Ger.github;
      nameLastName.innerHTML = data.Ger.nameLastName;
      nameInput.placeholder = data.Ger.nameLastNamePlaceHolder;
      formEmail.innerHTML = data.Ger.email;
      emailInput.placeholder = data.Ger.emailPlaceHolder;
      formNumber.innerHTML = data.Ger.phoneNumber;
      formMassage.innerHTML = data.Ger.message;
      formMessageInput.placeholder = data.Ger.messagePlaceHolder;
      footerContent.innerHTML = data.Ger.footerContent;
    }
  });
};

window.addEventListener('scroll', () => {
  if (window.scrollY >= 10) {
    header.classList.add('active');
    languageOptions.classList.add('language-options-active');
  } else {
    header.classList.remove('active');
    languageOptions.classList.remove('language-options-active');
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
