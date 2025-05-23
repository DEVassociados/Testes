import { emojiData } from './state.js';
import { saveToLocalStorage } from '../pai/storage.sync.js';

export function addEmojiCategory(name) {
  if (name && !emojiData[name]) {
    emojiData[name] = [];
    saveToLocalStorage();
  }
}
export function renameEmojiCategory(oldName, newName) {
  if (oldName !== newName && newName) {
    emojiData[newName] = emojiData[oldName];
    delete emojiData[oldName];
    saveToLocalStorage();
  }
}
export function deleteEmojiCategory(category) {
  delete emojiData[category];
  saveToLocalStorage();
}
export function addEmoji(category, emoji) {
  if (emoji) {
    emojiData[category].push(emoji);
    saveToLocalStorage();
  }
}
export function removeEmoji(category, index) {
  emojiData[category].splice(index, 1);
  saveToLocalStorage();
}