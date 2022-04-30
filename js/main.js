// typing animation

var typed = new Typed('.typing', {
   strings: ['Software Developer', 'Web Developer'],
   typeSpeed: 100,
   BackSpeed: 60,
   loop: true,
});

// Aside
const nav = document.querySelector('.nav');
const navList = nav.querySelectorAll('li');
const totalNavList = navList.length;
for (let i = 0; i < totalNavList; i++) {
   const a = navList[i].querySelector('a');
   a.addEventListener('click', function () {
      for (let j = 0; j < totalNavList; j++) {
         navList[j].querySelector('a').classList.remove('active');
      }
      this.classList.add('active');
   });
}

// nav toggler
const navTogglerBtn = document.querySelector('.nav-toggler');
const aside = document.querySelector('.aside');
navTogglerBtn.addEventListener('click', asideSectionTogglerBtn);

function asideSectionTogglerBtn() {
   aside.classList.toggle('open');
   navTogglerBtn.classList.toggle('open');
}

// hide nav on scroll when less screen size

function navHide() {
   if (window.innerWidth < 1200) {
      if (aside.classList.contains('open')) {
         aside.classList.remove('open');
         navTogglerBtn.classList.remove('open');
      }
   }
}

window.addEventListener('scroll', navHide);

// hire me
function showContact() {
   for (let j = 0; j < totalNavList; j++) {
      navList[j].querySelector('a').classList.remove('active');
      if (navList[j].querySelector('a').getAttribute('href') === '#contact') {
         navList[j].querySelector('a').classList.add('active');
      }
   }
   navList.querySelector;
}

document.querySelector('.hire-me').addEventListener('click', function () {
   showContact();
});

// active section on scroll

sectionList = document.querySelectorAll('.section');
totalSection = sectionList.length;

function showScroll() {
   let newSection = [];
   for (let j = 0; j < totalSection; j++) {
      if (sectionList[j].offsetTop < window.scrollY + 300) {
         newSection[newSection.length] = sectionList[j];
      }
   }

   let temp = '#' + newSection[newSection.length - 1].getAttribute('id');
   for (let j = 0; j < totalNavList; j++) {
      navList[j].querySelector('a').classList.remove('active');
      if (navList[j].querySelector('a').getAttribute('href') === temp) {
         navList[j].querySelector('a').classList.add('active');
      }
   }
}
window.addEventListener('scroll', showScroll);
