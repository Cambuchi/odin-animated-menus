// module to load flickity for making image carousels

const js = () => {
  const flickityjs = document.createElement('script');
  flickityjs.src = 'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js';
  document.head.append(flickityjs);
};

const css = () => {
  const flickitycss = document.createElement('link');
  flickitycss.href = 'https://unpkg.com/flickity@2/dist/flickity.min.css';
  flickitycss.rel = 'stylesheet';
  document.head.append(flickitycss);
};

export {
  js,
  css,
};
