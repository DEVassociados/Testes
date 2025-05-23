import { groups, currentGroup, emojiData, mediaStorage, pinnedSections } from '../filha/state.js';

export function saveToLocalStorage() {
  const allData = {
    groups,
    currentGroup,
    emojiData,
    mediaStorage,
    pinnedSections,
    themeMode: localStorage.getItem('themeMode') || 'auto',
    primaryColor: localStorage.getItem('primaryColor') || '#f57c00'
  };
  localStorage.setItem('saudacoesData', JSON.stringify(allData));
  localStorage.setItem('currentGroup', currentGroup);
}

export function loadFromLocalStorage() {
  const saved = localStorage.getItem('saudacoesData');
  if (!saved) return;
  try {
    const parsed = JSON.parse(saved);
    Object.assign(groups, parsed.groups || {});
    Object.assign(mediaStorage, parsed.mediaStorage || {});
    Object.assign(pinnedSections, parsed.pinnedSections || {});
    Object.assign(emojiData, parsed.emojiData || {});
  } catch (e) {
    console.error('Erro ao carregar do localStorage', e);
  }
}