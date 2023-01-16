const toggleThemeBtn = document.getElementById('toggleThemeBtn');
const themeIcon = document.getElementById('themeIcon');

toggleThemeBtn.addEventListener('click', () => {
  toggletheme();
});

const toggletheme = () => {
  const body = document.body;
  body.classList.toggle('dark-mode');
  themeIcon.classList.toggle('fa-sun');
};
