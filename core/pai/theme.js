export function applyTheme(mode) {
  document.body.classList.remove('light-mode', 'dark-mode');
  if (mode === 'light') document.body.classList.add('light-mode');
  else if (mode === 'dark') document.body.classList.add('dark-mode');
  else document.body.classList.add(new Date().getHours() >= 7 && new Date().getHours() < 18 ? 'light-mode' : 'dark-mode');
}

export function changeTheme(mode) {
  localStorage.setItem('themeMode', mode);
  applyTheme(mode);
}

export function loadTheme() {
  const savedTheme = localStorage.getItem('themeMode') || 'auto';
  document.getElementById('themeSelector').value = savedTheme;
  applyTheme(savedTheme);
}

export function autoUpdateTheme() {
  setInterval(() => {
    if ((localStorage.getItem('themeMode') || 'auto') === 'auto') applyTheme('auto');
  }, 60000);
}