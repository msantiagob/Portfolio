const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');
const widthWindow =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
if (widthWindow < 1025) {
  function watchLinks() {
    const bgMenu = document.getElementById('bgMenu');
    const links = document.getElementById('myLinks');
    const btnMenu = document.getElementById('btnMenu');

    if (links.style.marginLeft === '20vw') {
      btnMenu.classList.remove('activeMenu');
      bgMenu.style.zIndex = '-10';
      bgMenu.style.opacity = '0';
      links.style.marginLeft = '100vw';
      links.style.height = '0';
    } else {
      btnMenu.classList.add('activeMenu');
      bgMenu.style.zIndex = '200';
      bgMenu.style.opacity = '1';
      links.style.height = '100%';
      links.style.marginLeft = '20vw';
    }
  }
}

function handleIndicator(el) {
  items.forEach((item) => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });

  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.left = `${el.offsetLeft}px`;
  indicator.style.backgroundColor = el.getAttribute('active-color');
  el.classList.add('is-active');
  el.style.color = el.getAttribute('active-color');
}

function findNearestSection() {
  const sections = ['hero', 'aboutMe', 'skills', 'portfolio', 'contact'];

  let closestSection = null;
  let minDistance = Infinity;

  sections.forEach((sectionId) => {
    const element = document.getElementById(sectionId);
    const rect = element.getBoundingClientRect();
    const distance = Math.abs(rect.top);

    if (distance < minDistance) {
      minDistance = distance;
      closestSection = sectionId;
    }
  });
  whatsFocusSection(closestSection);
  activateButtonForSection(closestSection);
}
let focusSections = 'hero';
function whatsFocusSection(param) {
  if (param) {
    focusSections = param;
  }
  return focusSections;
}
function activateButtonForSection(sectionId) {
  if ('contact') {
    items.forEach((item) => {
      item.classList.remove('is-active');
      item.removeAttribute('style');
    });
    indicator.style.width = `0px`;
    indicator.style.left = `0px`;
  }
  const sectionButton = document.querySelector(
    `.nav-item[data-section-id="${sectionId}"]`
  );

  if (sectionButton) {
    handleIndicator(sectionButton);
  }
}

items.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    handleIndicator(e.target);
  });
  item.classList.contains('is-active') && handleIndicator(item);
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

const modal = document.getElementById('myModal');
const modalImg = document.getElementById('img01');
const images = document.querySelectorAll('.modalImg');
images.forEach(function (img) {
  img.onclick = function () {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
});

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};
modal.onclick = function () {
  if (event.target !== document.getElementById('img01')) {
    modal.style.display = 'none';
  }
};
window.onscroll = function () {
  let y = window.scrollY;

  findNearestSection();

  if (100 < y) {
    const containerNav = document.getElementById('containerNav');
    const logo = document.getElementById('logo');
    const txtLogo = document.getElementById('txtLogo');
    containerNav.style = 'min-height:10vh';
    logo.style.width = '60px';
    txtLogo.style.fontSize = '18px';
  }
  if (y < 100) {
    const containerNav = document.getElementById('containerNav');
    containerNav.style = 'min-height:20vh';
    logo.style.width = '80px';
    txtLogo.style.fontSize = '24px';
  }
  if (whatsFocusSection() === 'hero') {
    const astronauts = document.getElementById('astronauts');
    const txtContainerHero = document.getElementById('txtContainerHero');
    astronauts.style.marginBottom = y * 1.3 + 'px';
    txtContainerHero.style.marginBottom = y * 0.6 + 'px';
  }
  if (whatsFocusSection() === 'aboutMe') {
    const rocket = document.getElementById('rocket');
    const sectionHero = document.getElementById('aboutMe');
    let secHero = sectionHero.getBoundingClientRect();
    rocket.style.display = 'block';
    rocket.style.top = 700 + secHero.bottom * 1 + 'px';
  }
  if (whatsFocusSection() === 'skills') {
    const section = document.getElementById('aboutMe');
    let sec = section.getBoundingClientRect();

    rocket.style.top = 700 + sec.bottom * 1 + 'px';

    const comet1 = document.getElementById('comet1');
    const comet2 = document.getElementById('comet2');
    const comet3 = document.getElementById('comet3');
    if (isElementVisible(comet1)) {
      comet1.style = 'transform: scaleX(1) rotate(-45deg)';
      comet1.style.left = '100vw';
      let elementsCA1 = document.getElementsByClassName('CA1');
      for (let i = 0; i < elementsCA1.length; i++) {
        elementsCA1[i].style.opacity = 1;
      }
    } else {
      comet1.style = 'transform: scaleX(-1) rotate(-45deg)';
      comet1.style.left = '-100vw';
    }
    if (isElementVisible(comet2)) {
      comet2.style = 'transform: scaleX(-1) rotate(-45deg);';
      comet2.style.right = '100vw';
    } else {
      comet2.style = 'transform: scaleX(1) rotate(-45deg);';
      comet2.style.right = '-100vw';
      let elementsCA2 = document.getElementsByClassName('CA2');
      for (let i = 0; i < elementsCA2.length; i++) {
        elementsCA2[i].style.opacity = 1;
      }
    }
    if (isElementVisible(comet3)) {
      comet3.style = 'transform: scaleX(1) rotate(-45deg);';
      comet3.style.left = '100vw';
    } else {
      comet3.style = 'transform: scaleX(-1) rotate(-45deg);';
      comet3.style.left = '-100vw';
      let elementsCA3 = document.getElementsByClassName('CA3');
      for (let i = 0; i < elementsCA3.length; i++) {
        elementsCA3[i].style.opacity = 1;
      }
    }
  }
  if (whatsFocusSection() === 'portfolio') {
    const comet3 = document.getElementById('comet3');
    comet3.style = 'transform: scaleX(-1) rotate(-45deg);';
    comet3.style.left = '-120%';
    const portfolio = document.getElementById('portfolio');
    portfolio.style.opacity = 1;
  }
  if (whatsFocusSection() === 'contact') {
    const astronauts = document.getElementById('astronauts');
    const txtContainerHero = document.getElementById('txtContainerHero');
    astronauts.style.marginBottom = y * 1.5 + 'px';
    txtContainerHero.style.marginBottom = y * 0.8 + 'px';
  }
};

document.addEventListener('DOMContentLoaded', function () {
  let links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      let targetId = this.getAttribute('href').substring(1);
      let targetElement = document.getElementById(targetId);

      if (targetElement) {
        let offset = 65;
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth',
        });
      }
    });
  });
  let swiper = new Swiper('.carousel-gallery .swiper-container', {
    effect: 'slide',
    speed: 900,
    slidesPerView: 5,
    spaceBetween: 20,
    simulateTouch: true,
    autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.carousel-gallery .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      // when window width is <= 480px
      425: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // when window width is <= 640px
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
});

function isElementVisible(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0;
}

document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});

function menuBtnFunction(menuBtn) {
  menuBtn.classList.toggle('activeMenu');
}
