// script.js

const themeSelect = document.getElementById('theme');
const themeLink = document.getElementById('theme-style'); // This is the <link> element for theme CSS

themeSelect.addEventListener('change', (e) => {
  const selectedTheme = e.target.value;
  
  // Correct file names for themes (ensure the paths are correct)
  if (selectedTheme === 'default theme') {
    themeLink.setAttribute('href', 'assets/style.css'); // Set the default theme
  } else if (selectedTheme === 'theme1') {
    themeLink.setAttribute('href', 'assets/car.css');
  } else if (selectedTheme === 'theme2') {
    themeLink.setAttribute('href', 'assets/space.css');
  } else if (selectedTheme === 'theme3') {
    themeLink.setAttribute('href', 'assets/dinasour.css');
  }
});

// Optionally, set a default theme when the page loads
window.addEventListener('load', () => {
  themeLink.setAttribute('href', 'assets/style.css'); // Default to default theme
});
