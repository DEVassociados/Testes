import { loadTheme, autoUpdateTheme } from './pai/theme.js';
import { populateGroupSelector, render } from './filha/sections.js';
import { loadFromLocalStorage } from './pai/storage.sync.js';

window.onload = () => {
  loadFromLocalStorage();
  populateGroupSelector();
  loadTheme();
  render();
  autoUpdateTheme();
};