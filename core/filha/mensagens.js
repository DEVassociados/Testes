import { groups, currentGroup, currentTextId } from './state.js';
import { saveToLocalStorage } from '../pai/storage.sync.js';
import { render } from './sections.js';

export function addMessage(section) {
  groups[currentGroup][section].push('Nova saudação...');
  saveToLocalStorage();
  render();
}

export function removeMessage(section) {
  if (groups[currentGroup][section].length > 1) {
    groups[currentGroup][section].pop();
    saveToLocalStorage();
    render();
  }
}

export function updateMessage(section, i, val) {
  groups[currentGroup][section][i] = val;
  saveToLocalStorage();
}

export function setActiveTextId(id) {
  currentTextId = id;
}

export function wrapText(id, wrapper) {
  const el = document.getElementById(id);
  const start = el.selectionStart;
  const end = el.selectionEnd;
  const selected = el.value.substring(start, end);
  el.setRangeText(wrapper + selected + wrapper);
  el.focus();
  el.setSelectionRange(start + wrapper.length, end + wrapper.length);
  updateDataFromElement(el);
}

function updateDataFromElement(el) {
  const [section, index] = el.id.split('-');
  updateMessage(section, Number(index), el.value);
}