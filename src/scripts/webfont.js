// module to load google webfont for both fonts and icon usage
const WebFont = require('webfontloader');

const fonts = () => {
  WebFont.load({
    google: {
      families: ['Heebo', 'Mrs Sheppards'],
    },
  });
};

const icons = () => {
  const googleIcons = document.createElement('link');
  googleIcons.href = 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp';
  googleIcons.rel = 'stylesheet';
  document.head.append(googleIcons);
};

export {
  fonts,
  icons,
};
