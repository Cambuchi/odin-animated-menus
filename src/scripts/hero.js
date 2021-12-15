// module to create the hero header

import heroImg from '../images/hero.jpg';

const createHeroHeader = () => {
  const heroHeader = document.createElement('div');
  heroHeader.id = 'hero';
  heroHeader.style.backgroundImage = `url('${heroImg}')`;
  heroHeader.style.width = '100vw';
  heroHeader.style['max-width'] = '100%';
  heroHeader.style.height = '50vh';
  heroHeader.style['background-size'] = 'cover';
  heroHeader.style['background-position'] = 'bottom';
  heroHeader.textContent = 'To Do List:';
  heroHeader.style['text-align'] = 'center';
  heroHeader.style['line-height'] = '50vh';
  heroHeader.style['font-size'] = '2.5rem';
  heroHeader.style.fontFamily = 'Basement-Grotesque';
  heroHeader.style['letter-spacing'] = '0.025em';
  heroHeader.style.color = '#eaebeb';
  heroHeader.style['text-shadow'] = '0.025em 0.025em 0 #b5b5b5, '
  + '0.05em 0.05em 0 #868686, '
  + '0.075em 0.075em 0 #00ffbf, '
  + '0.1em 0.1em 0 rgb(83, 83, 83)';

  return heroHeader;
};

export default createHeroHeader;
