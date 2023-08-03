'use strict';

const btnSecurity = document.querySelector('.securitybtn');
const btnPrivacy = document.querySelector('.privacybtn');

const privacySection = document.querySelector('.section__cards-privacy');
const securitySection = document.querySelector('.section__cards-security');
const backToTop = document.querySelector('.back-to-top');

btnPrivacy.addEventListener('click', function () {
  btnPrivacy.classList.add('btn-privacy--active');
  btnSecurity.classList.remove('btn-privacy--active');
  privacySection.classList.remove('section__cards-privacy--unactive');
  securitySection.classList.add('section__cards-security--unactive');
});

btnSecurity.addEventListener('click', function () {
  btnSecurity.classList.add('btn-privacy--active');
  btnPrivacy.classList.remove('btn-privacy--active');
  privacySection.classList.add('section__cards-privacy--unactive');
  securitySection.classList.remove('section__cards-security--unactive');
});

document.addEventListener('scroll', function () {
  if (window.scrollY > 400) {
    backToTop.classList.add('back-to-top--active');
  } else backToTop.classList.remove('back-to-top--active');
});

// Animated page

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      if (entry.target.closest('.header')) return;
      entry.target.classList.remove('show');
    }
  });
});

const hiddenelements = document.querySelectorAll('.hidden');

hiddenelements.forEach(element => observer.observe(element));

// Copyright

function linkedin() {
  window.open('https://www.linkedin.com/in/chnoumanejaz/', '_blank');
}
