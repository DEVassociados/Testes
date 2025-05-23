import { mediaStorage } from './state.js';
import { render } from './sections.js';

export function handleMediaUpload(e, section) {
  const files = Array.from(e.target.files);
  processMediaFiles(files, section);
}

export function handleMediaDrop(e, section) {
  e.preventDefault();
  const files = Array.from(e.dataTransfer.files);
  processMediaFiles(files, section);
}

function processMediaFiles(files, section) {
  mediaStorage[section] ||= [];
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = () => {
      mediaStorage[section].push({ name: file.name, type: file.type, data: reader.result });
      localStorage.setItem('mediaStorage', JSON.stringify(mediaStorage));
      render();
    };
    reader.readAsDataURL(file);
  });
}