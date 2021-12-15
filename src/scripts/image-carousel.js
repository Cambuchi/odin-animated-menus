// module for creating an image carousel widget

import one from '../images/1.png';
import two from '../images/2.png';
import three from '../images/3.png';
import four from '../images/4.png';
import five from '../images/5.png';
import six from '../images/6.png';
import * as flickity from './flickity';

import '../styles/image-carousel.css';

const Flickity = require('flickity');

const createImageCarousel = () => {
  flickity.css();
  flickity.js();

  const images = [one, two, three, four, five, six];

  const mainCarousel = document.createElement('div');
  mainCarousel.classList = 'main-carousel';

  images.forEach((image) => {
    const carouselCell = document.createElement('div');
    carouselCell.classList = 'carousel-cell';
    carouselCell.style.backgroundImage = `url('${image}')`;
    carouselCell.style.backgroundSize = 'cover';
    carouselCell.style.backgroundPosition = 'center center';
    carouselCell.style.backgroundRepeat = 'no-repeat';
    mainCarousel.append(carouselCell);
  });

  return mainCarousel;
};

const createFlickity = (element) => {
  const flkty = new Flickity(element, {
    // options
    cellAlign: 'center',
    draggable: true,
    wrapAround: true,
    contain: true,
  });
  return flkty;
};

export {
  createImageCarousel,
  createFlickity,
};
