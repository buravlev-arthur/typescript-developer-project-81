/* eslint-disable no-console */
import { Tag } from './classes';

console.log(new Tag('img', { src: '/image.png', alt: 'Alt text' }).toString());
console.log(new Tag('br').toString());
console.log(new Tag('input', { type: 'submit', value: 'Save' }).toString());
console.log(new Tag('label', {}, 'Email').toString());
console.log(new Tag('label', { for: 'email' }, 'Email').toString());
console.log(new Tag('div').toString());
console.log(new Tag('div', { class: 'container' }, 'Text inside div-element').toString());
