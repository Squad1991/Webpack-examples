import _ from 'lodash';
import { printCamelise } from "./helper";
import './style.css';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  element.onclick = function() {
    console.log(printCamelise('Hello'));
  }
  return element;
}

document.body.appendChild(component());
