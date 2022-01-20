/* eslint-disable no-unused-vars */
import calcExpression, { summ, mult } from './calculator/index.js';
import fetchUser from './profile/gateway.js';
import { printProfile } from './profile/index.js';
import './polifyls/array-flat.js';

const calcResult = calcExpression('1 + 2');
const sumResult = summ(1, 2);
const multResult = mult(1, 2);
const userDataPromise = fetchUser('facebook');
printProfile({ name: 'Tom', from: 'TheWorld' });
