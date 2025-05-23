import { mediaStorage, currentTextId } from './state.js';
import { render } from './sections.js';

export function importarBase64(base64) {
  if (!base64 || !currentTextId) return;
  const [section] = currentTextId.split('-');
  const matches = base64.match(/^data:(.*?);base64,/);
  if (!matches) return alert("Formato inválido");
  const mimeType = matches[1];
  mediaStorage[section] ||= [];
  mediaStorage[section].push({ name: 'importado.' + mimeType.split('/')[1], type: mimeType, data: base64 });
  localStorage.setItem('mediaStorage', JSON.stringify(mediaStorage));
  render();
}