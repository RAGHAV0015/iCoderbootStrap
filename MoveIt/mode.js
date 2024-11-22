// Select the button and the body element
const themeToggleButton = document.getElementById('mode');
const bodyElement = document.body;

// Add a click event listener to the button
themeToggleButton.addEventListener('click', () => {
  // Check the current theme
  const currentTheme = bodyElement.getAttribute('data-bs-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  // Set the new theme on the body
  bodyElement.setAttribute('data-bs-theme', newTheme);

  // Update the button text based on the new theme
  themeToggleButton.textContent =
    newTheme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';
});
