import { cube, square } from './math';

function component() {
  const element = document.createElement('div');
  element.innerHTML = `Cube of 2 is ${cube(2)}`;
  return element;
}

document.body.appendChild(component());
