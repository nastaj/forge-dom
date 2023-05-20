// Sticky Nav
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;

console.log(navHeight);

const stickyNav = (entries) => {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) {
    nav.classList.add("sticky", "top-0", "animate-slidein");
  } else {
    nav.classList.remove("sticky", "top-0", "animate-slidein");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// Reveal sections on scroll
const allSections = document.querySelectorAll("section");

const revealSection = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("opacity-0", "translate-y-36");

  observer.unobserve(entry.target);
};

const sectionsObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((section) => {
  sectionsObserver.observe(section);
  section.classList.add(
    "opacity-0",
    "translate-y-36",
    "transition",
    "duration-1000"
  );
});

// Stats functionality
const sectionStats = document.querySelector(".stats");
const statDices = document.querySelector(".stat--dices");
const statFigurines = document.querySelector(".stat--figurines");
const statDms = document.querySelector(".stat--dms");

let counterDices = 0;
let counterFigurines = 0;
let counterDms = 0;

statDices.textContent = counterDices + "+";
statFigurines.textContent = counterFigurines + "+";
statDms.textContent = counterDms;

const startCounter = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  const diceInterval = () => {
    counterDices++;
    statDices.textContent = counterDices + "+";
    counterDices === 50 && clearInterval(increaseDices);
  };
  const figurinesInterval = () => {
    counterFigurines++;
    statFigurines.textContent = counterFigurines + "+";
    counterFigurines === 200 && clearInterval(increaseFigurines);
  };
  const dmsInterval = () => {
    counterDms += 10;
    statDms.textContent = counterDms + "+";
    counterDms === 2000 && clearInterval(increaseDms);
  };

  const increaseDices = setInterval(diceInterval, 20);
  const increaseFigurines = setInterval(figurinesInterval, 10);
  const increaseDms = setInterval(dmsInterval, 10);

  observer.unobserve(entry.target);
};

const statsObserver = new IntersectionObserver(startCounter, {
  root: null,
  threshold: 0,
});

statsObserver.observe(sectionStats);

// Slider
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

let curSlide = 0;
const maxSlide = slides.length;

const goToSlide = (slide) => {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

const nextSlide = () => {
  curSlide === maxSlide - 1 ? (curSlide = 0) : curSlide++;
  goToSlide(curSlide);
};

const prevSlide = () => {
  curSlide === 0 ? (curSlide = maxSlide - 1) : curSlide--;
  goToSlide(curSlide);
};

btnLeft.addEventListener("click", prevSlide);
btnRight.addEventListener("click", nextSlide);
