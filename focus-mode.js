chrome.runtime.onMessage.addListener((msg) => {
  switch (msg) {
    case 'focus-on':
      document.body.setAttribute('data-focus-mode', 'on');
      break;
    case 'focus-off':
      document.body.removeAttribute('data-focus-mode');
      break;
  }
});
