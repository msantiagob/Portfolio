const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');

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
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

var modal = document.getElementById('myModal');
var modalImg = document.getElementById('img01');
var images = document.querySelectorAll('.modalImg');
images.forEach(function (img) {
  img.onclick = function () {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

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
    containerNav.style.height = '10vh';
    logo.style.width = '60px';
    txtLogo.style.fontSize = '18px';
  }
  if (y < 100) {
    const containerNav = document.getElementById('containerNav');
    containerNav.style.height = '20vh';
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
      comet1.style = 'transform: scaleX(1);';
      comet1.style.left = '120%';
    } else {
      comet1.style = 'transform: scaleX(-1);';
      comet1.style.left = '-120%';
    }
    if (isElementVisible(comet2)) {
      console.log("asdasd");
      comet2.style = 'transform: scaleX(-1);';
      comet2.style.right = '120%';
    } else {
      comet2.style = 'transform: scaleX(1);';
      comet2.style.right = '-120%';
    }
    if (isElementVisible(comet3)) {
      comet3.style = 'transform: scaleX(1);';
      comet3.style.left = '120%';
    } else {
      comet3.style = 'transform: scaleX(-1);';
      comet3.style.left = '-120%';
    }
  }
  if (whatsFocusSection() === 'portfolio') {
    const comet3 = document.getElementById('comet3');
    comet3.style = 'transform: scaleX(-1);';
    comet3.style.left = '-120%';
    
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
});

function isElementVisible(element) {
  var rect = element.getBoundingClientRect();
  console.log();
  return rect.top >= 0;
}
