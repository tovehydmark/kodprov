const toggleThemeBtn = document.getElementById('toggleThemeBtn');
const themeIcon = document.getElementById('themeIcon');
const heroSection = document.getElementsByClassName('hero')[0];

toggleThemeBtn.addEventListener('click', () => {
  toggletheme();
});

const toggletheme = () => {
  const body = document.body;
  body.classList.toggle('dark-mode');
  themeIcon.classList.toggle('fa-sun');
  heroSection.classList.toggle('hero-dark');
};
