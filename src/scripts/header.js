// module to create header with javascript
const createHeader = () => {
  const header = document.createElement('div');
  header.id = 'header';
  header.style.display = 'flex';
  header.style.alignItems = 'center';
  header.style.justifyContent = 'space-evenly';
  header.style.background = '#383838';
  header.style.height = '10vh';
  header.style.flexShrink = '0';
  header.style.alignSelf = 'stretch';
  header.style.position = 'fixed';

  return header;
};

export default createHeader;
