// module for creating a dropdown menu element

import '../styles/menu-dropdown.css';

const createDropdownMenu = () => {
  const menu = document.createElement('nav');
  menu.classList.add('menu');
  menu.style.display = 'flex';
  menu.style.flexDirection = 'column';
  menu.style.alignItems = 'center';
  menu.style.height = '100%';
  menu.style.width = '200px';

  const menuButton = document.createElement('button');
  menuButton.classList.add('menu-button');
  menuButton.style.display = 'flex';
  menuButton.style.alignItems = 'center';
  menuButton.style.justifyContent = 'space-evenly';
  menuButton.style.height = '10vh';
  menuButton.style.width = '200px';
  menuButton.style.background = 'none';
  menuButton.style.flexShrink = '0';
  menuButton.style.transition = 'all 0.25s ease-in-out';
  menuButton.onclick = function clickMenuButton() {
    const dropdown = menuButton.nextElementSibling;
    const classes = dropdown.classList;
    if (classes.contains('animate')) {
      classes.replace('animate', 'reverse');
    } else if (classes.contains('reverse')) {
      classes.replace('reverse', 'animate');
    }
    menuButton.classList.toggle('highlight-button');
  };

  const menuButtonIcon = document.createElement('span');
  menuButtonIcon.classList.add('menu-button-icon');
  menuButtonIcon.classList.add('material-icons-round');
  menuButtonIcon.textContent = 'menu';
  menuButtonIcon.style.fontSize = '4rem';

  const menuButtonText = document.createElement('p');
  menuButtonText.classList.add('menu-button-text');
  menuButtonText.textContent = 'Menu';
  menuButtonText.style.fontSize = '3rem';

  const menuContainer = document.createElement('ul');
  menuContainer.classList.add('menu-container');
  menuContainer.classList.add('reverse');
  menuContainer.style.display = 'flex';
  menuContainer.style.flexDirection = 'column';
  menuContainer.style.backgroundColor = '#585858';
  menuContainer.style.width = '100%';
  menuContainer.style.boxShadow = '0px 8px 16px 0px rgba(0,0,0,0.2)';
  menuContainer.style.zIndex = '1';
  menuContainer.style.margin = '0';
  menuContainer.style.padding = '0';
  menuContainer.style.listStyleType = 'none';
  menuContainer.style.opacity = '0';
  menuContainer.style.clipPath = 'polygon(0 0, 100% 0%, 100% 0, 0 0)';

  const menuItemOne = document.createElement('li');
  menuItemOne.classList.add('menu-item');
  menuItemOne.textContent = 'Home';
  const menuItemTwo = document.createElement('li');
  menuItemTwo.textContent = 'About';
  menuItemTwo.classList.add('menu-item');
  const menuItemThree = document.createElement('li');
  menuItemThree.textContent = 'Contact';
  menuItemThree.classList.add('menu-item');

  menuContainer.append(menuItemOne);
  menuContainer.append(menuItemTwo);
  menuContainer.append(menuItemThree);

  menuButton.append(menuButtonIcon);
  menuButton.append(menuButtonText);

  menu.append(menuButton);
  menu.append(menuContainer);

  return menu;
};

export default createDropdownMenu;
