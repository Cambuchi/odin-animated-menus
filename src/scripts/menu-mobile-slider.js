// module to create a slide in menu with transforming hamburger icon

import '../styles/menu-mobile-slider.css';

const createMenuSlider = () => {
  const menuContent = document.createElement('div');
  menuContent.id = 'menu-content';

  const nav = document.createElement('nav');
  nav.setAttribute('role', 'navigation');

  const menuToggle = document.createElement('div');
  menuToggle.id = 'menuToggle';

  const menuIcon = document.createElement('input');
  menuIcon.type = 'checkbox';

  const topMenuBar = document.createElement('span');
  topMenuBar.id = 'top-menu-bar';
  const midMenuBar = document.createElement('span');
  midMenuBar.id = 'mid-menu-bar';
  const botMenuBar = document.createElement('span');
  botMenuBar.id = 'bot-menu-bar';

  menuToggle.append(menuIcon);

  menuToggle.append(topMenuBar);
  menuToggle.append(midMenuBar);
  menuToggle.append(botMenuBar);

  const menu = document.createElement('ul');
  menu.id = 'menu';

  const menuItemOne = document.createElement('li');
  const menuItemOneLink = document.createElement('a');
  menuItemOneLink.innerHTML = '<span class="material-icons-round">'
  + 'home</span>Home';
  menuItemOneLink.href = '#';
  menuItemOne.append(menuItemOneLink);

  const menuItemTwo = document.createElement('li');
  const menuItemTwoLink = document.createElement('a');
  menuItemTwoLink.innerHTML = '<span class="material-icons-round">'
  + 'groups</span>About';
  menuItemTwoLink.href = '#';
  menuItemTwo.append(menuItemTwoLink);

  const menuItemThree = document.createElement('li');
  const menuItemThreeLink = document.createElement('a');
  menuItemThreeLink.innerHTML = '<span class="material-icons-round">'
  + 'info</span>Info';
  menuItemThreeLink.href = '#';
  menuItemThree.append(menuItemThreeLink);

  const menuItemFour = document.createElement('li');
  const menuItemFourLink = document.createElement('a');
  menuItemFourLink.innerHTML = '<span class="material-icons-round">'
  + 'call</span>Call';
  menuItemFourLink.href = '#';
  menuItemFour.append(menuItemFourLink);

  menu.append(menuItemOne);
  menu.append(menuItemTwo);
  menu.append(menuItemThree);
  menu.append(menuItemFour);

  menuToggle.append(menu);

  nav.append(menuToggle);

  menuContent.append(nav);

  return menuContent;
};

export default createMenuSlider;
