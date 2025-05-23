import { groups, currentGroup, pinnedSections } from './state.js';
import { createCard } from './utils.js';

export function render() {
  const grid = document.getElementById('sections');
  grid.innerHTML = '';
  const entries = Object.entries(groups[currentGroup] || {});
  entries.filter(([t]) => pinnedSections[t]).forEach(([t, m]) => grid.appendChild(createCard(t, m, true)));
  if (entries.length > 0) grid.appendChild(document.createElement('hr'));
  entries.filter(([t]) => !pinnedSections[t]).forEach(([t, m]) => grid.appendChild(createCard(t, m, false)));
}

export function populateGroupSelector() {
  const selector = document.getElementById('groupSelector');
  if (!selector) return;
  selector.innerHTML = '';
  Object.keys(groups).forEach(group => {
    const opt = document.createElement('option');
    opt.value = group;
    opt.textContent = group;
    if (group === currentGroup) opt.selected = true;
    selector.appendChild(opt);
  });
}