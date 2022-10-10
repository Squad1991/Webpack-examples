import _ from 'lodash';

export function storeLocal(name, value) {
  localStorage.setItem(name, value);
}

export function getItemFromLocal(name) {
  localStorage.getItem(name);
}

export function capitalise(str) {
  return _.capitalize(str);
}