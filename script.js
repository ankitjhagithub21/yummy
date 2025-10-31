const menuBtn = document.getElementById('menuBtn')
const navList = document.getElementById('navList')
const links = navList.querySelectorAll('a')
const menuNav = document.getElementById('menuNav')
const menuButtons = menuNav.querySelectorAll('.btn')
const menuContainer = document.getElementById('menuContainer')
menuBtn.addEventListener('click', () => {

    if (menuBtn.classList.contains('ri-menu-3-line')) {
        menuBtn.classList.replace('ri-menu-3-line', 'ri-close-line')
        navList.style.right = "0"
        document.body.style.overflow = "hidden"
    } else {
        menuBtn.classList.replace('ri-close-line', 'ri-menu-3-line')
        navList.style.right = "-100%"
        document.body.style.overflow = "scroll"
    }
})

links.forEach((link) => {
    link.addEventListener('click', () => {
        menuBtn.classList.replace('ri-close-line', 'ri-menu-3-line')
        navList.style.right = "-100%"
        document.body.style.overflow = "scroll"
    })
})

menuButtons.forEach((button) => {

    button.addEventListener('click', () => {
        menuButtons.forEach((btn) => {
            btn.classList.remove('active-menu')
        })
        button.classList.add('active-menu')
        menuContainer.classList.toggle('aos-animate')
        setTimeout(function () {
            menuContainer.classList.add('aos-animate');
        }, 400);
    })


})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3, 
    spaceBetween: 30,
    autoplay: {
        delay: 2000, 
    },
    
    // Other Swiper options...
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
 

  
    
  });
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const darkClass = 'dark-mode';

  // Load saved mode from localStorage if any
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add(darkClass);
    themeIcon.classList.remove('ri-moon-line');
    themeIcon.classList.add('ri-sun-line');
    document.querySelectorAll('nav, section, footer, h2').forEach(el => el.classList.add(darkClass));
  }

  themeToggle.addEventListener('click', function() {
    const body = document.body;
    const sections = document.querySelectorAll('nav, section, footer, h2');
    
    body.classList.toggle(darkClass);
    sections.forEach(el => el.classList.toggle(darkClass));
    
    const darkModeOn = body.classList.contains(darkClass);
    themeIcon.classList.toggle('ri-moon-line', !darkModeOn);
    themeIcon.classList.toggle('ri-sun-line', darkModeOn);

    // Save preference
    localStorage.setItem('theme', darkModeOn ? 'dark' : 'light');
  });
});


// Testimonials Swiper
const testimonialSwiper = new Swiper(".testimonialSwiper", {
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  },
});
