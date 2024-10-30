const script = document.createElement('script');
script.src = 'https://raw.githubusercontent.com/user/repo/main/script.js';
script.onload = () => {
  console.log('[MURRTUBE DOWLOADER] LOADED');
};
script.onerror = () => {
  console.error('[MURRTUBE DOWLOADER] LOAD ERROR');
};
document.body.appendChild(script);