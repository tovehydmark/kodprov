document.getElementById('toggleTheme').addEventListener('click', () => {
  toggletheme();
});

const toggletheme = () => {
  const body = document.body;
  body.classList.toggle('dark-mode');
};
