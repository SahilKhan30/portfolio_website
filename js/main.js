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
   console.log(navList[i]);
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
