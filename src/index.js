import './styles/main.css';
import './styles/modern-normalize.css';

// import createHeroHeader from './scripts/hero';
import createHeader from './scripts/header';
// import { createDropdownMenu } from './scripts/menu-dropdown';
import * as WebFont from './scripts/webfont';
import createContent from './scripts/content';
import createMenuSlider from './scripts/menu-mobile-slider';
import { createImageCarousel, createFlickity } from './scripts/image-carousel';

WebFont.fonts();
WebFont.icons();

const { body } = document;

// const hero = createHeroHeader();
const header = createHeader();
const content = createContent();
content.id = 'content';
// const dropdownMenu = createDropdownMenu();
const sliderMenu = createMenuSlider();

const title = document.createElement('p');
title.textContent = 'To Do List:';
sliderMenu.append(title);

const imageCarousel = createImageCarousel();

// header.append(dropdownMenu);
header.append(sliderMenu);

// body.append(hero);
body.append(header);

const carouselWrapper = document.createElement('div');
carouselWrapper.id = 'carousel-wrapper';
carouselWrapper.style.zIndex = '1';

carouselWrapper.append(imageCarousel);
body.append(carouselWrapper);

body.append(content);

createFlickity('.main-carousel');
