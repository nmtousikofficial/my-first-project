const typedElement = document.querySelector("#typed-word");
const words = ["Web Developer", "Creative Learner", "Tech Enthusiast"];
let wordIndex = 0;
let letterIndex = words[0].length;
let deleting = true;

function typeEffect() {
  const currentWord = words[wordIndex];
  if (deleting) {
    letterIndex--;
    typedElement.textContent = currentWord.slice(0, letterIndex);
    if (letterIndex <= 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 450);
      return;
    }
  } else {
    const nextWord = words[wordIndex];
    letterIndex++;
    typedElement.textContent = nextWord.slice(0, letterIndex);
    if (letterIndex >= nextWord.length) {
      deleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  }
  setTimeout(typeEffect, deleting ? 55 : 90);
}
setTimeout(typeEffect, 1500);

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));

document.querySelector("#year").textContent = new Date().getFullYear();
