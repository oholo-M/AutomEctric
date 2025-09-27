const texts = [
  "MON PORTFOLIO EN ELECTRICITE, AUTOMATISME ET TECHNOLOGIE",
  "APPRENDRE AVEC DES PROJETS SPECIFIQUES",
  "DES TUTORIELS",
  "DES BUREAUX D'ETUDES"
];

const typingElement = document.getElementById('hero-typing');
let textIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const currentText = texts[textIndex];

  if (!deleting) {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentText.length) {
      deleting = true;
      setTimeout(type, 2000);
      return;
    }
  } else {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }
  setTimeout(type, deleting ? 50 : 80);
}
type();
