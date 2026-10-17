const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
if (menuToggle && navigation) {
  menuToggle.addEventListener('click', () => {
    const open = navigation.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}
const exhibitNames = ['THE ODDITIES DEPARTMENT', 'OBJECTS OF AFFECTION', 'WEAR YOUR WEIRD'];
const exhibitLabel = document.querySelector('[data-exhibit-label]');
const exhibitButton = document.querySelector('[data-exhibit-next]');
let exhibitIndex = 0;
if (exhibitButton && exhibitLabel) {
  exhibitButton.addEventListener('click', () => {
    exhibitIndex = (exhibitIndex + 1) % exhibitNames.length;
    exhibitLabel.textContent = exhibitNames[exhibitIndex];
    const disc = document.querySelector('.art-disc');
    if (disc) disc.classList.toggle('flipped');
  });
}
const backToTop = document.querySelector('[data-back-top]');
if (backToTop) backToTop.addEventListener('click', () => window.scrollTo({top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'}));
