import { selectedSections } from './state.js';

export function createCard(title, messages, isPinned) {
  const card = document.createElement('div');
  card.className = 'card' + (isPinned ? ' pinned' : '');
  card.innerHTML = `
    <div class="card-header"><h3>${title}</h3></div>
    <div class="actions">
      <button class="pin-toggle" data-title="${title}">${isPinned ? '📌' : '📍'}</button>
      <input type="checkbox" class="select-toggle" data-title="${title}" ${selectedSections.has(title) ? 'checked' : ''}/>
      ${messages.map((msg, i) => `<textarea class="text-editable-area" id="${title}-${i}" data-section="${title}" data-index="${i}">${msg}</textarea>`).join('')}
    </div>`;
  return card;
}