//  SHOW SIDEBAR

//  ------ SIDEBAR SHOW
/* Validate If Constant Exists */

//  ------ SIDEBAR HIDDEN
/* Validate If Constant Exists */

// ----------- SKILLS TABS ------------
const tabs = document.querySelectorAll('[data-target]'),
  tabContent = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabContent.forEach(tabContents => {
      tabContents.classList.remove('skills__active');
    });

    target.classList.add('skills__active');

    tabs.forEach(tab => {
      tab.classList.remove('skills__active');
    });

    tab.classList.add('skills__active');
  });
});

//  -------------- MIXITUP FILTER PORTFOLIO -------------

let mixerPortfolio = mixitup('.work__container', {
  selectors: {
    target: '.work__card',
  },
  animation: {
    duration: 300,
  },
});

//  ------ Link Active Work
const linkWork = document.querySelectorAll('.work__item');

function activeWork() {
  linkWork.forEach(work => {
    work.classList.remove('active-work');
    this.classList.add('active-work');
  });
}

linkWork.forEach(work => work.addEventListener('click', activeWork));

//  ------ Work Popup
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('work__button')) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePortfolioPopup() {
  document.querySelector('.portfolio__popup').classList.toggle('open');
}

document
  .querySelector('.portfolio__popup-close')
  .addEventListener('click', togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
  document.querySelector('.pp__thumbnail img').src =
    portfolioItem.querySelector('.work__img').src;
  document.querySelector('.pp__thumbnail img').alt =
    portfolioItem.querySelector('.work__img').alt;

  document.querySelector('.portfolio__popup-subtitle span').innerHTML =
    portfolioItem.querySelector('.work__title').innerHTML;
  document.querySelector('.portfolio__popup-body').innerHTML =
    portfolioItem.querySelector('.portfolio__item-details').innerHTML;
}

//  SERVICES MODAL
const modelViews = document.querySelectorAll('.services__model'),
  modelBtns = document.querySelectorAll('.services__button'),
  modelClose = document.querySelectorAll('.services__model-close');

let model = function (modelClick) {
  modelViews[modelClick].classList.add('active-model');
};

modelBtns.forEach((modelBtn, i) => {
  modelBtn.addEventListener('click', function () {
    model(i);
  });
});

modelClose.forEach(close => {
  close.addEventListener('click', () => {
    modelViews.forEach(modelView => {
      modelView.classList.remove('active-model');
    });
  });
});

//  INPUT ANIMATION
const inputs = document.querySelectorAll('.input');
function focus() {
  let parent = this.parentNode;
  parent.classList.add('focus');
}

function blur() {
  let parent = this.parentNode;
  if (this.value.trim() === '') {
    parent.classList.remove('focus');
  }
}

inputs.forEach(input => {
  input.addEventListener('focus', focus);
  input.addEventListener('blur', blur);
});

//  SCROLL SECTIONS ACTIVE LINK

//  SHOW SCROLL UP
